import { NextResponse } from 'next/server';
import { sendNotificationEmail } from '@/lib/mailer';

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
    const timestamp = new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' });
    const fullName = `${data.firstName} ${data.lastName}`;
    const subject = `New CA Legal Intake: ${data.practiceArea} (${data.county}) - ${fullName}`;

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
        <div style="background-color: #0f233a; color: #ffffff; padding: 20px; text-align: center;">
          <h2 style="margin: 0; font-size: 22px;">CA Legal Source — New Case Intake</h2>
          <p style="margin: 5px 0 0; color: #85db61; font-size: 13px; font-weight: bold;">CALIFORNIA ATTORNEY MATCHING SYSTEM</p>
        </div>
        <div style="padding: 24px; background-color: #ffffff; color: #1e293b; line-height: 1.6;">
          <h3 style="color: #0f233a; border-bottom: 2px solid #edf2f7; padding-bottom: 8px; margin-top: 0;">Client Information</h3>
          <table style="width: 100%; font-size: 14px; margin-bottom: 20px;">
            <tr><td style="width: 140px; color: #64748b;"><strong>Full Name:</strong></td><td>${fullName}</td></tr>
            <tr><td style="color: #64748b;"><strong>Phone:</strong></td><td><a href="tel:${data.phone}" style="color: #3d7826; font-weight: bold;">${data.phone}</a></td></tr>
            <tr><td style="color: #64748b;"><strong>Email:</strong></td><td><a href="mailto:${data.email}">${data.email}</a></td></tr>
            <tr><td style="color: #64748b;"><strong>Preferred Language:</strong></td><td>${data.preferredLanguage || 'English'}</td></tr>
          </table>

          <h3 style="color: #0f233a; border-bottom: 2px solid #edf2f7; padding-bottom: 8px;">Case Details</h3>
          <table style="width: 100%; font-size: 14px; margin-bottom: 20px;">
            <tr><td style="width: 140px; color: #64748b;"><strong>Practice Area:</strong></td><td><span style="background: #edf7e8; color: #3d7826; padding: 3px 8px; border-radius: 6px; font-weight: bold;">${data.practiceArea}</span></td></tr>
            <tr><td style="color: #64748b;"><strong>County Jurisdiction:</strong></td><td><strong>${data.county}</strong></td></tr>
            <tr><td style="color: #64748b;"><strong>Timeline / Date:</strong></td><td>${data.incidentDate || 'Not specified'}</td></tr>
          </table>

          <h3 style="color: #0f233a; border-bottom: 2px solid #edf2f7; padding-bottom: 8px;">Situation Description</h3>
          <div style="background-color: #f8fafc; padding: 14px; border-radius: 8px; border: 1px solid #e2e8f0; font-size: 14px; white-space: pre-wrap;">${data.description || 'No description provided.'}</div>

          <div style="margin-top: 24px; padding: 12px; background-color: #edf7e8; border-radius: 8px; font-size: 12px; color: #2d5a1b;">
            <strong>Consent Status:</strong> User agreed to California terms, privacy policy & attorney contact authorization.
          </div>
        </div>
        <div style="background-color: #f1f5f9; padding: 14px 20px; font-size: 11px; color: #64748b; text-align: center; border-top: 1px solid #e2e8f0;">
          Received: ${timestamp} (PT) • Operated by DPA Attorneys at Law • San Diego Office (8880 Rio San Diego Dr. Suite 800, San Diego, CA 92108)
        </div>
      </div>
    `;

    const { emailSent, logs } = await sendNotificationEmail({
      subject,
      htmlContent,
      dataFields: {
        'Client Name': fullName,
        'Phone': data.phone,
        'Email': data.email,
        'Practice Area': data.practiceArea,
        'County': data.county,
        'Incident Timeline': data.incidentDate || 'Not specified',
        'Case Description': data.description || 'N/A',
        'Preferred Language': data.preferredLanguage || 'English',
        'Consent': data.consent ? 'Granted' : 'No',
        'Timestamp': timestamp,
      },
    });

    console.log(`[INTAKE PROCESSED FOR ${recipientEmail}]:`, logs);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Intake submitted successfully and notification routed.',
        routedTo: recipientEmail,
        timestamp,
        deliveryLogs: logs,
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
