import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { Writable } from 'stream';

// Define the directory where downloadable files are stored.
// IMPORTANT: Create this directory at the root of your project.
const PRIVATE_UPLOADS_DIR = path.resolve(process.cwd(), 'private_uploads');

// A simple utility to get MIME type based on extension.
// For a more robust solution, consider using a library like 'mime-types'.
const getMimeType = (filePath: string): string => {
  const ext = path.extname(filePath).toLowerCase();
  switch (ext) {
    case '.pdf':
      return 'application/pdf';
    case '.txt':
      return 'text/plain';
    case '.png':
      return 'image/png';
    case '.jpg':
    case '.jpeg':
      return 'image/jpeg';
    case '.zip':
      return 'application/zip';
    // Add more MIME types as needed
    default:
      return 'application/octet-stream'; // Generic binary type
  }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { fileId } = req.query;

  if (typeof fileId !== 'string' || !fileId) {
    return res.status(400).json({ error: 'File identifier is required.' });
  }

  // Sanitize the fileId to prevent directory traversal.
  // path.basename will return the last portion of a path, ignoring directory parts.
  const safeFilename = path.basename(fileId);

  if (safeFilename !== fileId) {
    // This indicates that fileId might have contained path characters like '..' or '/'
    return res.status(400).json({ error: 'Invalid file identifier format.' });
  }

  const filePath = path.join(PRIVATE_UPLOADS_DIR, safeFilename);

  try {
    // Check if the file exists and is readable.
    await fs.promises.access(filePath, fs.constants.R_OK);

    // Get file stats to set Content-Length (optional but good for progress).
    const stats = await fs.promises.stat(filePath);
    const contentType = getMimeType(filePath);

    res.setHeader('Content-Disposition', `attachment; filename="${safeFilename}"`);
    res.setHeader('Content-Type', contentType);
    res.setHeader('Content-Length', stats.size.toString());

    const fileStream = fs.createReadStream(filePath);

    // Pipe the file stream to the response.
    // Next.js handles the end of the response when a stream is piped.
    await new Promise<void>((resolve, reject) => {
      fileStream.pipe(res as Writable); // Cast res to Writable as NextApiResponse might not be directly assignable
      fileStream.on('end', resolve);
      fileStream.on('error', (err) => {
        // Ensure headers are not sent again if an error occurs mid-stream
        if (!res.headersSent) {
          res.status(500).json({ error: 'Error streaming the file.' });
        } else {
          // If headers already sent, we can only try to end the response.
          // The client might receive a partial file.
          res.end();
        }
        reject(err);
      });
    });

  } catch (error: any) {
    console.error('File download error:', error);
    if (error.code === 'ENOENT') {
      return res.status(404).json({ error: `File not found: ${safeFilename}` });
    } else if (error.code === 'EACCES') {
      return res.status(403).json({ error: `Access denied to file: ${safeFilename}` });
    } else {
      // Avoid sending response if already sent by stream error handler
      if (!res.headersSent) {
        return res.status(500).json({ error: 'An unexpected error occurred while trying to download the file.' });
      }
    }
  }
} 