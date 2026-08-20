import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    const recipientEmail = 'aftabnew77@gmail.com';
    const timestamp = new Date().toISOString();
    const subject = `CA Legal Source Contact Inquiry: ${data.topic || 'General'} - ${data.name}`;

    // Direct Email Dispatch via FormSubmit
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
          'Sender Name': data.name,
          'Email Address': data.email,
          'Phone Number': data.phone || 'N/A',
          'Topic': data.topic || 'General Inquiry',
          'Message': data.message,
          'Timestamp': timestamp,
          'Operated By': 'DPA Attorneys at Law (San Diego Office - 8880 Rio San Diego Dr. Suite 800, San Diego, CA 92108)'
        }),
      });
    } catch (dispatchErr) {
      console.error('Contact email dispatch error:', dispatchErr);
    }

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
              <h2>New Contact Form Inquiry</h2>
              <p><strong>Name:</strong> ${data.name}</p>
              <p><strong>Email:</strong> ${data.email}</p>
              <p><strong>Phone:</strong> ${data.phone || 'N/A'}</p>
              <p><strong>Topic:</strong> ${data.topic || 'General'}</p>
              <p><strong>Message:</strong></p>
              <p>${data.message}</p>
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
        message: 'Your inquiry has been received. Our team will get back to you shortly.',
        routedTo: recipientEmail,
        timestamp 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in contact API:', error);
    return NextResponse.json(
      { error: 'Internal server error while processing contact message.' },
      { status: 500 }
    );
  }
}
