import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Create a simple PDF content
    const content = `The Going Hybrid Manifesto

Our philosophy on reclaiming the balance between digital and physical worlds.

The Limitations of a Digital-Only Approach
In our rush to digitize everything, we've lost something profound: the ability to capitalize socially on the human-to-human connection. Everyone seems to be fading into clicks, likes and shares, missing on the physical reality (made of multiple layers of sensory and the processing of meaning). The missing potential of the focused attention that comes from interacting with the material world. Possibilities are out there, but they are not being used.

Going Hybrid
Going Hybrid isn't about rejecting technology—it's about thoughtfully integrating it with physical interactions to create experiences that are greater than the sum of their parts. By combining the best aspects of both worlds, we can create deeper engagement, more meaningful connections, and experiences that respect our human nature while leveraging the power of digital tools.`;

    // Create a blob with the content
    const blob = new Blob([content], { type: 'application/pdf' });
    
    // Return the blob as a response
    return new NextResponse(blob, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename=going-hybrid-manifesto.pdf',
      },
    });
  } catch (error) {
    console.error('Error generating PDF:', error);
    return NextResponse.json({ error: 'Failed to generate PDF' }, { status: 500 });
  }
}
