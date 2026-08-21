import nodemailer from 'nodemailer';

interface SendMailParams {
  subject: string;
  htmlContent: string;
  dataFields: Record<string, string | boolean | undefined>;
}

export async function sendNotificationEmail({ subject, htmlContent, dataFields }: SendMailParams) {
  const recipientEmail = 'aftabnew77@gmail.com';
  let emailSent = false;
  const logs: string[] = [];

  // 1. Direct Nodemailer SMTP (Gmail / Custom SMTP) if configured in .env.local
  if (process.env.SMTP_USER && process.env.SMTP_PASS) {
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: `"CA Legal Source" <${process.env.SMTP_USER}>`,
        to: recipientEmail,
        subject: subject,
        html: htmlContent,
      });

      emailSent = true;
      logs.push('Sent successfully via direct Gmail / SMTP');
      console.log('✅ Email sent successfully via SMTP to:', recipientEmail);
    } catch (err: any) {
      console.error('SMTP delivery error:', err.message);
      logs.push(`SMTP Error: ${err.message}`);
    }
  }

  // 2. Resend API if configured
  if (!emailSent && process.env.RESEND_API_KEY) {
    try {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'CA Legal Source <onboarding@resend.dev>',
          to: recipientEmail,
          subject: subject,
          html: htmlContent,
        }),
      });

      if (res.ok) {
        emailSent = true;
        logs.push('Sent successfully via Resend API');
      }
    } catch (err: any) {
      console.error('Resend delivery error:', err.message);
      logs.push(`Resend Error: ${err.message}`);
    }
  }

  // 3. FormSubmit Relay with origin headers
  try {
    const res = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Origin': 'https://www.calegalsource.com',
        'Referer': 'https://www.calegalsource.com/',
      },
      body: JSON.stringify({
        _subject: subject,
        _template: 'table',
        _captcha: 'false',
        ...dataFields,
        'Operated By': 'DPA Attorneys at Law (San Diego Office - 8880 Rio San Diego Dr. Suite 800, San Diego, CA 92108)',
      }),
    });

    const resJson = await res.json().catch(() => null);
    logs.push(`FormSubmit Status: ${res.status} (${JSON.stringify(resJson)})`);
    console.log('FormSubmit response:', resJson);
  } catch (err: any) {
    console.error('FormSubmit relay error:', err.message);
    logs.push(`FormSubmit Error: ${err.message}`);
  }

  return { emailSent, logs };
}
