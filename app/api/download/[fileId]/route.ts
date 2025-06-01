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

// Map friendly fileIds to actual files in public directory
const PUBLIC_FILE_MAP: Record<string, { filename: string; contentType: string }> = {
  'digital-maze': {
    filename: 'Laberintos Digitales_Manual de usuario.pdf',
    contentType: 'application/pdf',
  },
  'manifesto': {
    filename: 'going-hybrid-manifesto.pdf',
    contentType: 'application/pdf',
  },
};

export async function GET(
  request: NextRequest, 
  { params }: { params: { fileId: string } }
) {
  const { fileId } = params;

  if (!fileId) {
    return NextResponse.json({ error: 'File identifier is required.' }, { status: 400 });
  }

  // Check if fileId is mapped to a public file
  if (PUBLIC_FILE_MAP[fileId]) {
    const { filename, contentType } = PUBLIC_FILE_MAP[fileId];
    const filePath = path.join(process.cwd(), 'public', filename);
    try {
      await fs.promises.access(filePath, fs.constants.R_OK);
      const fileBuffer = await fs.promises.readFile(filePath);
      return new NextResponse(fileBuffer, {
        status: 200,
        headers: {
          'Content-Disposition': `attachment; filename="${filename}"`,
          'Content-Type': contentType,
          'Content-Length': fileBuffer.length.toString(),
        },
      });
    } catch (error: any) {
      if (error.code === 'ENOENT') {
        return NextResponse.json({ error: `File not found: ${filename}` }, { status: 404 });
      } else if (error.code === 'EACCES') {
        return NextResponse.json({ error: `Access denied to file: ${filename}` }, { status: 403 });
      } else {
        return NextResponse.json({ error: 'An unexpected error occurred while trying to download the file.' }, { status: 500 });
      }
    }
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