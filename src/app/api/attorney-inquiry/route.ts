import { NextResponse } from 'next/server';
import { sendAttorneyInquiryWithResend } from '@/lib/resend';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const fullName = String(body.fullName || '').trim();
    const barNumber = String(body.barNumber || '').trim();
    const firmName = String(body.firmName || '').trim();
    const email = String(body.email || '').trim().toLowerCase();
    const phone = String(body.phone || '').trim();
    const practiceAreas = String(body.practiceAreas || '').trim();
    const primaryCounty = String(body.primaryCounty || '').trim();
    const notes = String(body.notes || '').trim();

    // Validation
    if (!fullName || !barNumber || !email || !phone) {
      return NextResponse.json(
        { error: 'Full Name, California Bar Number, Email, and Phone are required fields.' },
        { status: 400 }
      );
    }

    if (!email.includes('@') || !email.includes('.')) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // Dispatch via Resend to aftabnew77@gmail.com
    await sendAttorneyInquiryWithResend({
      fullName,
      barNumber,
      firmName,
      email,
      phone,
      practiceAreas,
      primaryCounty,
      notes,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Your panel application has been submitted successfully for compliance review.',
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error in attorney inquiry API:', error);
    return NextResponse.json(
      {
        error: error.message || 'An error occurred while submitting your application. Please try again or email questions@dpalaw.com.',
      },
      { status: 500 }
    );
  }
}
