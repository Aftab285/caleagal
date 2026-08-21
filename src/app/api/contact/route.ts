import { NextResponse } from 'next/server';
import { sendContactWithResend } from '@/lib/resend';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = String(body.name || '').trim();
    const email = String(body.email || '').trim().toLowerCase();
    const phone = String(body.phone || '').trim();
    const topic = String(body.topic || 'General Inquiry').trim();
    const message = String(body.message || '').trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    if (!email.includes('@') || !email.includes('.')) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // Send email notification via Resend on the server side
    await sendContactWithResend({
      name,
      email,
      phone,
      topic,
      message,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Your inquiry has been received. Our team will get back to you shortly.',
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error in contact API:', error);
    return NextResponse.json(
      {
        error: error.message || 'An error occurred while sending your message. Please try again.',
      },
      { status: 500 }
    );
  }
}
