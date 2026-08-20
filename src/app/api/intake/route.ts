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

    const fullName = `${data.firstName} ${data.lastName}`;
    const subject = `New CA Legal Source Intake: ${data.practiceArea} (${data.county}) - ${fullName}`;

    // Direct Email Dispatch via FormSubmit & Web3Forms
    try {
      await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: subject,
          _template: 'table',
          'Client Name': fullName,
          'Phone': data.phone,
          'Email': data.email,
          'Legal Practice Area': data.practiceArea,
          'California County': data.county,
          'Incident Date / Timeline': data.incidentDate || 'Not specified',
          'Case Details': data.description || 'N/A',
          'Preferred Language': data.preferredLanguage || 'English',
          'Consent Granted': data.consent ? 'Yes' : 'No',
          'Submission Timestamp': timestamp,
          'Operated By': 'DPA Attorneys at Law (San Diego Office - 8880 Rio San Diego Dr. Suite 800, San Diego, CA 92108)'
        }),
      });
    } catch (dispatchErr) {
      console.error('Email dispatch error via FormSubmit:', dispatchErr);
    }

    // Optional Resend API fallback if configured in env
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
            subject: subject,
            html: `
              <h2>New California Legal Intake Request</h2>
              <p><strong>Name:</strong> ${fullName}</p>
              <p><strong>Phone:</strong> ${data.phone}</p>
              <p><strong>Email:</strong> ${data.email}</p>
              <p><strong>Legal Category:</strong> ${data.practiceArea}</p>
              <p><strong>County:</strong> ${data.county}</p>
              <p><strong>Incident Date:</strong> ${data.incidentDate || 'Not specified'}</p>
              <p><strong>Description:</strong> ${data.description}</p>
              <p><strong>Preferred Language:</strong> ${data.preferredLanguage}</p>
              <hr />
              <p><small>Operated by DPA Attorneys at Law • 8880 Rio San Diego Dr. Suite 800, San Diego, CA 92108</small></p>
            `,
          }),
        });
      } catch (emailErr) {
        console.error('Resend dispatch error:', emailErr);
      }
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Intake submitted successfully and notification sent.',
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
