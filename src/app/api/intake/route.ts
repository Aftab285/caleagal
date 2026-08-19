import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Required field validation
    if (!data.practiceArea || !data.county || !data.firstName || !data.lastName || !data.phone || !data.email) {
      return NextResponse.json(
        { error: 'Missing required intake fields.' },
        { status: 400 }
      );
    }

    const recipientEmail = 'aftabnew77@gmail.com';
    const timestamp = new Date().toISOString();

    const submissionPayload = {
      targetNotificationEmail: recipientEmail,
      timestamp,
      clientDetails: {
        name: `${data.firstName} ${data.lastName}`,
        email: data.email,
        phone: data.phone,
        preferredLanguage: data.preferredLanguage || 'English',
      },
      caseDetails: {
        practiceArea: data.practiceArea,
        county: data.county,
        description: data.description || 'No description provided',
        incidentDate: data.incidentDate || 'Not specified',
      },
      compliance: {
        termsConsent: Boolean(data.consent),
        operator: 'DPA Attorneys at Law (San Diego Office)',
        jurisdiction: 'California',
      }
    };

    // Log the submission payload for auditing and server notification
    console.log(`[INTAKE SUBMISSION FOR ${recipientEmail}]:`, JSON.stringify(submissionPayload, null, 2));

    // Optional: If an SMTP or Resend API key is configured in env, send email notification
    if (process.env.RESEND_API_KEY) {
      try {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'CA Legal Source <notifications@calegalsource.com>',
            to: recipientEmail,
            subject: `New CA Legal Intake: ${data.practiceArea} (${data.county})`,
            html: `
              <h2>New California Legal Intake Request</h2>
              <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
              <p><strong>Phone:</strong> ${data.phone}</p>
              <p><strong>Email:</strong> ${data.email}</p>
              <p><strong>Legal Category:</strong> ${data.practiceArea}</p>
              <p><strong>County:</strong> ${data.county}</p>
              <p><strong>Description:</strong> ${data.description}</p>
              <p><strong>Preferred Language:</strong> ${data.preferredLanguage}</p>
              <hr />
              <p><small>Operated by DPA Attorneys at Law • 8880 Rio San Diego Dr. Suite 800, San Diego, CA 92108</small></p>
            `,
          }),
        });
      } catch (emailErr) {
        console.error('Email dispatch error:', emailErr);
      }
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Intake submitted successfully and routed to intake team.',
        routedTo: recipientEmail,
        timestamp 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing intake submission:', error);
    return NextResponse.json(
      { error: 'Internal server error while processing intake request.' },
      { status: 500 }
    );
  }
}
