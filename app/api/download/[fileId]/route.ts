import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { Readable } from 'stream';

// Define the directory where downloadable files are stored.
const PRIVATE_UPLOADS_DIR = path.resolve(process.cwd(), 'private_uploads');

// A simple utility to get MIME type based on extension.
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
    default:
      return 'application/octet-stream';
  }
};

export async function GET(
  request: NextRequest, 
  { params }: { params: { fileId: string } }
) {
  const { fileId } = params;

  if (!fileId) {
    return NextResponse.json({ error: 'File identifier is required.' }, { status: 400 });
  }

  const safeFilename = path.basename(fileId);
  if (safeFilename !== fileId) {
    return NextResponse.json({ error: 'Invalid file identifier format.' }, { status: 400 });
  }

  const filePath = path.join(PRIVATE_UPLOADS_DIR, safeFilename);

  try {
    await fs.promises.access(filePath, fs.constants.R_OK);
    const stats = await fs.promises.stat(filePath);
    const contentType = getMimeType(filePath);

    const fileStream = fs.createReadStream(filePath);
    
    // For App Router, we can convert Node.js stream to a Web Stream for the Response body
    const webStream = Readable.toWeb(fileStream) as ReadableStream<Uint8Array>; 

    return new NextResponse(webStream, {
      status: 200,
      headers: {
        'Content-Disposition': `attachment; filename="${safeFilename}"`,
        'Content-Type': contentType,
        'Content-Length': stats.size.toString(),
      },
    });

  } catch (error: any) {
    console.error('File download error:', error);
    if (error.code === 'ENOENT') {
      return NextResponse.json({ error: `File not found: ${safeFilename}` }, { status: 404 });
    } else if (error.code === 'EACCES') {
      return NextResponse.json({ error: `Access denied to file: ${safeFilename}` }, { status: 403 });
    } else {
      return NextResponse.json({ error: 'An unexpected error occurred while trying to download the file.' }, { status: 500 });
    }
  }
} 