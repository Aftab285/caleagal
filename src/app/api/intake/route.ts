import { NextResponse } from 'next/server';
import { sendIntakeWithResend } from '@/lib/resend';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Required field validation & sanitization
    const firstName = String(body.firstName || '').trim();
    const lastName = String(body.lastName || '').trim();
    const phone = String(body.phone || '').trim();
    const email = String(body.email || '').trim().toLowerCase();
    const practiceArea = String(body.practiceArea || '').trim();
    const county = String(body.county || '').trim();
    const description = String(body.description || '').trim();
    const incidentDate = String(body.incidentDate || '').trim();
    const preferredLanguage = String(body.preferredLanguage || 'English').trim();
    const consent = Boolean(body.consent);

    if (!firstName || !lastName || !phone || !email || !practiceArea || !county) {
      return NextResponse.json(
        { error: 'Please fill in all required fields.' },
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
    await sendIntakeWithResend({
      firstName,
      lastName,
      phone,
      email,
      practiceArea,
      county,
      description,
      incidentDate,
      preferredLanguage,
      consent,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Your intake has been submitted successfully.',
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error processing intake submission:', error);
    return NextResponse.json(
      {
        error: error.message || 'An error occurred while submitting the form. Please try again or call (760) 372-0007.',
      },
      { status: 500 }
    );
  }
}
