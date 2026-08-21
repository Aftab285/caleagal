import { Resend } from 'resend';

// Initialize Resend with server-side environment variable only
const getResendClient = () => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn('[Resend] Warning: RESEND_API_KEY is not set in environment variables.');
    return null;
  }
  return new Resend(apiKey);
};

export interface IntakeEmailPayload {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  practiceArea: string;
  county: string;
  incidentDate?: string;
  description?: string;
  preferredLanguage?: string;
  consent?: boolean;
}

export interface ContactEmailPayload {
  name: string;
  email: string;
  phone?: string;
  topic?: string;
  message: string;
}

const RECIPIENT_EMAIL = 'aftabnew77@gmail.com';
const FROM_EMAIL = 'forms@calegalsource.com';
const FALLBACK_FROM_EMAIL = 'onboarding@resend.dev';

export async function sendIntakeWithResend(data: IntakeEmailPayload) {
  const resend = getResendClient();
  const timestamp = new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' });
  const fullName = `${data.firstName.trim()} ${data.lastName.trim()}`;
  const subject = `New Website Form Submission: ${data.practiceArea} (${data.county}) - ${fullName}`;

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 10px; overflow: hidden; background-color: #ffffff;">
      <div style="background-color: #0f233a; color: #ffffff; padding: 20px; text-align: center;">
        <h2 style="margin: 0; font-size: 20px; letter-spacing: -0.5px;">New Website Form Submission</h2>
        <p style="margin: 4px 0 0; color: #85db61; font-size: 12px; font-weight: bold; text-transform: uppercase;">California Legal Intake Portal</p>
      </div>

      <div style="padding: 24px; color: #1e293b; line-height: 1.6; font-size: 14px;">
        <h3 style="color: #0f233a; font-size: 15px; margin: 0 0 12px; border-bottom: 2px solid #f1f5f9; padding-bottom: 6px;">Client Contact Information</h3>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 13.5px;">
          <tr>
            <td style="padding: 6px 0; width: 150px; color: #64748b;"><strong>Full Name:</strong></td>
            <td style="padding: 6px 0; color: #0f233a; font-weight: bold;">${fullName}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #64748b;"><strong>Phone Number:</strong></td>
            <td style="padding: 6px 0;"><a href="tel:${encodeURIComponent(data.phone)}" style="color: #3d7826; font-weight: bold; text-decoration: none;">${data.phone}</a></td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #64748b;"><strong>Email Address:</strong></td>
            <td style="padding: 6px 0;"><a href="mailto:${encodeURIComponent(data.email)}" style="color: #0f233a;">${data.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #64748b;"><strong>Preferred Language:</strong></td>
            <td style="padding: 6px 0;">${data.preferredLanguage || 'English'}</td>
          </tr>
        </table>

        <h3 style="color: #0f233a; font-size: 15px; margin: 0 0 12px; border-bottom: 2px solid #f1f5f9; padding-bottom: 6px;">Case & Jurisdiction Details</h3>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 13.5px;">
          <tr>
            <td style="padding: 6px 0; width: 150px; color: #64748b;"><strong>Legal Practice Area:</strong></td>
            <td style="padding: 6px 0;"><span style="background-color: #edf7e8; color: #2d5a1b; font-weight: bold; padding: 3px 8px; border-radius: 4px;">${data.practiceArea}</span></td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #64748b;"><strong>California County:</strong></td>
            <td style="padding: 6px 0; font-weight: bold; color: #0f233a;">${data.county}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #64748b;"><strong>Incident Date:</strong></td>
            <td style="padding: 6px 0;">${data.incidentDate || 'Not specified'}</td>
          </tr>
        </table>

        <h3 style="color: #0f233a; font-size: 15px; margin: 0 0 12px; border-bottom: 2px solid #f1f5f9; padding-bottom: 6px;">Case Description</h3>
        <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 14px; margin-bottom: 20px; white-space: pre-wrap; font-size: 13.5px;">${data.description || 'No description provided.'}</div>

        <div style="background-color: #edf7e8; border-radius: 6px; padding: 10px 14px; font-size: 12px; color: #2d5a1b;">
          <strong>Consent:</strong> Visitor checked the acknowledgment box to submit their inquiry for attorney referral review.
        </div>
      </div>

      <div style="background-color: #f8fafc; border-top: 1px solid #e2e8f0; padding: 14px 24px; font-size: 11px; color: #64748b; text-align: center;">
        Submission Time: ${timestamp} (Pacific Time)<br />
        CA Legal Source • Operated by DPA Attorneys at Law (San Diego Office)
      </div>
    </div>
  `;

  if (!resend) {
    throw new Error('Resend API key is not configured on the server.');
  }

  // Attempt sending from forms@calegalsource.com, with automated fallback to onboarding@resend.dev if domain not yet verified
  try {
    const result = await resend.emails.send({
      from: `CA Legal Source <${FROM_EMAIL}>`,
      to: [RECIPIENT_EMAIL],
      replyTo: data.email.trim(),
      subject: subject,
      html: html,
    });

    if (result.error) {
      console.warn('[Resend] Primary domain sending failed, retrying with fallback domain:', result.error);
      const fallbackResult = await resend.emails.send({
        from: `CA Legal Source <${FALLBACK_FROM_EMAIL}>`,
        to: [RECIPIENT_EMAIL],
        replyTo: data.email.trim(),
        subject: subject,
        html: html,
      });

      if (fallbackResult.error) {
        throw new Error(fallbackResult.error.message);
      }
      return fallbackResult;
    }

    return result;
  } catch (err: any) {
    console.error('[Resend Error in sendIntakeWithResend]:', err);
    throw err;
  }
}

export async function sendContactWithResend(data: ContactEmailPayload) {
  const resend = getResendClient();
  const timestamp = new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' });
  const subject = `New Website Form Submission: Contact - ${data.name.trim()} (${data.topic || 'General Inquiry'})`;

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 10px; overflow: hidden; background-color: #ffffff;">
      <div style="background-color: #0f233a; color: #ffffff; padding: 20px; text-align: center;">
        <h2 style="margin: 0; font-size: 20px; letter-spacing: -0.5px;">New Website Contact Submission</h2>
        <p style="margin: 4px 0 0; color: #85db61; font-size: 12px; font-weight: bold; text-transform: uppercase;">CA Legal Source Inquiry</p>
      </div>

      <div style="padding: 24px; color: #1e293b; line-height: 1.6; font-size: 14px;">
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 13.5px;">
          <tr>
            <td style="padding: 6px 0; width: 140px; color: #64748b;"><strong>Name:</strong></td>
            <td style="padding: 6px 0; font-weight: bold; color: #0f233a;">${data.name.trim()}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #64748b;"><strong>Email:</strong></td>
            <td style="padding: 6px 0;"><a href="mailto:${encodeURIComponent(data.email)}" style="color: #0f233a;">${data.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #64748b;"><strong>Phone:</strong></td>
            <td style="padding: 6px 0;">${data.phone ? `<a href="tel:${encodeURIComponent(data.phone)}" style="color: #3d7826; font-weight: bold; text-decoration: none;">${data.phone}</a>` : 'Not provided'}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #64748b;"><strong>Topic:</strong></td>
            <td style="padding: 6px 0; font-weight: bold;">${data.topic || 'General Inquiry'}</td>
          </tr>
        </table>

        <h3 style="color: #0f233a; font-size: 15px; margin: 0 0 12px; border-bottom: 2px solid #f1f5f9; padding-bottom: 6px;">Message</h3>
        <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 14px; white-space: pre-wrap; font-size: 13.5px;">${data.message}</div>
      </div>

      <div style="background-color: #f8fafc; border-top: 1px solid #e2e8f0; padding: 14px 24px; font-size: 11px; color: #64748b; text-align: center;">
        Submission Time: ${timestamp} (Pacific Time)<br />
        CA Legal Source • Operated by DPA Attorneys at Law (San Diego Office)
      </div>
    </div>
  `;

  if (!resend) {
    throw new Error('Resend API key is not configured on the server.');
  }

  try {
    const result = await resend.emails.send({
      from: `CA Legal Source <${FROM_EMAIL}>`,
      to: [RECIPIENT_EMAIL],
      replyTo: data.email.trim(),
      subject: subject,
      html: html,
    });

    if (result.error) {
      console.warn('[Resend] Primary domain sending failed, retrying with fallback domain:', result.error);
      const fallbackResult = await resend.emails.send({
        from: `CA Legal Source <${FALLBACK_FROM_EMAIL}>`,
        to: [RECIPIENT_EMAIL],
        replyTo: data.email.trim(),
        subject: subject,
        html: html,
      });

      if (fallbackResult.error) {
        throw new Error(fallbackResult.error.message);
      }
      return fallbackResult;
    }

    return result;
  } catch (err: any) {
    console.error('[Resend Error in sendContactWithResend]:', err);
    throw err;
  }
}
