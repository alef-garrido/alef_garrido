import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();
    // Here you would send the data to your email service, database, etc.
    // For now, just log it (for demonstration)
    console.log('Contact form submission:', { name, email, message });
    // Respond with success
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Invalid request' }, { status: 400 });
  }
}
