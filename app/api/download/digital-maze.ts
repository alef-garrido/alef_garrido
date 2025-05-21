import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    // Get the path to the PDF file in the public directory
    const pdfPath = path.join(process.cwd(), 'public', 'Laberintos Digitales_Manual de usuario.pdf');
    
    // Read the PDF file
    const pdfBuffer = fs.readFileSync(pdfPath);
    
    // Return the PDF file
    return new NextResponse(pdfBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Laberintos Digitales_Manual de usuario.pdf"',
      },
    });
  } catch (error) {
    console.error('Error serving PDF:', error);
    return NextResponse.json({ error: 'Failed to serve PDF' }, { status: 500 });
  }
}
