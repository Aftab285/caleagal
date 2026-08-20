import { NextResponse } from 'next/server';
import { sendNotificationEmail } from '@/lib/mailer';

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
    const timestamp = new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' });
    const subject = `CA Legal Source Contact Inquiry: ${data.topic || 'General'} - ${data.name}`;

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
        <div style="background-color: #0f233a; color: #ffffff; padding: 20px; text-align: center;">
          <h2 style="margin: 0; font-size: 22px;">CA Legal Source — Contact Inquiry</h2>
        </div>
        <div style="padding: 24px; background-color: #ffffff; color: #1e293b; line-height: 1.6;">
          <table style="width: 100%; font-size: 14px; margin-bottom: 20px;">
            <tr><td style="width: 140px; color: #64748b;"><strong>Name:</strong></td><td>${data.name}</td></tr>
            <tr><td style="color: #64748b;"><strong>Email:</strong></td><td><a href="mailto:${data.email}">${data.email}</a></td></tr>
            <tr><td style="color: #64748b;"><strong>Phone:</strong></td><td>${data.phone || 'Not provided'}</td></tr>
            <tr><td style="color: #64748b;"><strong>Topic:</strong></td><td><strong>${data.topic || 'General Inquiry'}</strong></td></tr>
          </table>

          <h3 style="color: #0f233a; border-bottom: 2px solid #edf2f7; padding-bottom: 8px;">Message Content</h3>
          <div style="background-color: #f8fafc; padding: 14px; border-radius: 8px; border: 1px solid #e2e8f0; font-size: 14px; white-space: pre-wrap;">${data.message}</div>
        </div>
        <div style="background-color: #f1f5f9; padding: 14px 20px; font-size: 11px; color: #64748b; text-align: center; border-top: 1px solid #e2e8f0;">
          Received: ${timestamp} (PT) • Operated by DPA Attorneys at Law (San Diego Office)
        </div>
      </div>
    `;

    const { emailSent, logs } = await sendNotificationEmail({
      subject,
      htmlContent,
      dataFields: {
        'Sender Name': data.name,
        'Email': data.email,
        'Phone': data.phone || 'N/A',
        'Topic': data.topic || 'General Inquiry',
        'Message': data.message,
        'Timestamp': timestamp,
      },
    });

    console.log(`[CONTACT PROCESSED FOR ${recipientEmail}]:`, logs);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Your inquiry has been received and routed.',
        routedTo: recipientEmail,
        timestamp,
        deliveryLogs: logs,
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
