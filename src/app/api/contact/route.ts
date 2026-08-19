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

    const contactPayload = {
      targetNotificationEmail: recipientEmail,
      timestamp,
      sender: {
        name: data.name,
        email: data.email,
        phone: data.phone || 'Not provided',
        topic: data.topic || 'General Inquiry',
      },
      message: data.message,
      operator: 'DPA Attorneys at Law (San Diego Office)',
    };

    console.log(`[CONTACT INQUIRY FOR ${recipientEmail}]:`, JSON.stringify(contactPayload, null, 2));

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
            subject: `Contact Inquiry: ${data.topic || 'General'} - ${data.name}`,
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
