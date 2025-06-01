import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    // Get the path to the PDF file in the public directory
    const pdfPath = path.join(process.cwd(), 'public', 'going-hybrid-manifesto.pdf');
    
    // Read the PDF file
    const pdfBuffer = fs.readFileSync(pdfPath);
    
    // Return the PDF file
    return new NextResponse(pdfBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename=going-hybrid-manifesto.pdf',
      },
    });
  } catch (error) {
    console.error('Error serving PDF:', error);
    return NextResponse.json({ error: 'Failed to serve PDF' }, { status: 500 });
  }
}
