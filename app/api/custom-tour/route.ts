import { NextRequest, NextResponse } from 'next/server';
import { sendCustomTourEmail, CustomTourEmailData } from '@/app/lib/email';

export async function POST(request: NextRequest) {
  try {
    // Check if request has a body
    const text = await request.text();
    if (!text) {
      return NextResponse.json(
        { error: 'Request body is empty' },
        { status: 400 }
      );
    }

    let body: CustomTourEmailData;
    try {
      body = JSON.parse(text);
    } catch {
      return NextResponse.json(
        { error: 'Invalid JSON in request body' },
        { status: 400 }
      );
    }

    // Validate required fields
    if (!body.name || !body.email) {
      return NextResponse.json(
        { error: 'Name and email are required', received: body },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    await sendCustomTourEmail(body);

    return NextResponse.json(
      { message: 'Custom tour request sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending custom tour email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}

