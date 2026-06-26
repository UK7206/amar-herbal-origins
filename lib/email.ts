import nodemailer from 'nodemailer';

// ── Transporter (Gmail SMTP) ──────────────────────────────────────────────
function getTransporter() {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD?.replace(/\s/g, ''); // remove spaces

  if (!user || !pass || pass === 'xxxxxxxxxxxxxxxxx') {
    throw new Error('GMAIL_USER or GMAIL_APP_PASSWORD not set in .env.local');
  }

  return nodemailer.createTransport({
    service: 'gmail',
    auth: { user, pass },
  });
}

// ── Types ─────────────────────────────────────────────────────────────────
interface EnquiryData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  country?: string;
  product?: string;
  quantity?: string;
  message: string;
  ip?: string;
  timestamp?: string;
}

// ── Send admin notification email ─────────────────────────────────────────
export async function sendEnquiryNotification(data: EnquiryData) {
  const adminEmail = process.env.ADMIN_EMAIL || process.env.GMAIL_USER;
  const receivedAt = data.timestamp
    ? new Date(data.timestamp).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
    : new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

  const rows = (
    [
      ['Full Name', data.name],
      ['Email', data.email],
      data.phone ? ['Phone / WhatsApp', data.phone] : null,
      data.company ? ['Company', data.company] : null,
      data.country ? ['Country', data.country] : null,
      data.product ? ['Product Interest', data.product] : null,
      data.quantity ? ['Est. Quantity', data.quantity] : null,
      ['Received At (IST)', receivedAt],
      data.ip ? ['Visitor IP', data.ip] : null,
    ] as (string[] | null)[]
  )
    .filter((row): row is string[] => row !== null)
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:8px 12px;background:#faf8f4;font-weight:700;font-size:13px;color:#92400e;white-space:nowrap;border:1px solid #e5e0d8;">${label}</td>
          <td style="padding:8px 12px;font-size:13px;color:#1a1a1a;border:1px solid #e5e0d8;">${value}</td>
        </tr>`
    )
    .join('');

  const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"/></head>
<body style="margin:0;padding:0;background:#f5f0e8;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f0e8;padding:40px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:white;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#1C1204,#3d2a0a);padding:32px 40px;text-align:center;">
            <div style="font-size:32px;margin-bottom:8px;">🌿</div>
            <h1 style="margin:0;color:#D97706;font-size:22px;font-weight:800;letter-spacing:-0.5px;">New Enquiry Received!</h1>
            <p style="margin:8px 0 0;color:#b8a98a;font-size:14px;">Amar Herbal Origins — Admin Notification</p>
          </td>
        </tr>

        <!-- Alert banner -->
        <tr>
          <td style="background:#D97706;padding:12px 40px;text-align:center;">
            <p style="margin:0;color:white;font-size:13px;font-weight:700;">
              🔔 ${data.name} has submitted an enquiry from ${data.country || 'unknown location'}
            </p>
          </td>
        </tr>

        <!-- Enquiry Details -->
        <tr>
          <td style="padding:32px 40px;">
            <h2 style="margin:0 0 16px;font-size:16px;color:#1a1a1a;font-weight:800;text-transform:uppercase;letter-spacing:0.05em;">Enquiry Details</h2>
            <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-radius:8px;overflow:hidden;">
              ${rows}
            </table>
          </td>
        </tr>

        <!-- Message -->
        <tr>
          <td style="padding:0 40px 24px;">
            <h2 style="margin:0 0 12px;font-size:16px;color:#1a1a1a;font-weight:800;text-transform:uppercase;letter-spacing:0.05em;">Message</h2>
            <div style="background:#faf8f4;border:1px solid #e5e0d8;border-radius:10px;padding:16px 20px;font-size:14px;color:#374151;line-height:1.7;white-space:pre-wrap;">${data.message}</div>
          </td>
        </tr>

        <!-- CTA Buttons -->
        <tr>
          <td style="padding:0 40px 32px;">
            <table cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding-right:12px;">
                  <a href="mailto:${data.email}" style="display:inline-block;background:#1d4ed8;color:white;padding:12px 24px;border-radius:50px;font-weight:700;font-size:13px;text-decoration:none;">✉️ Reply by Email</a>
                </td>
                ${data.phone ? `
                <td>
                  <a href="https://wa.me/${String(data.phone).replace(/\D/g, '')}" style="display:inline-block;background:#25D366;color:white;padding:12px 24px;border-radius:50px;font-weight:700;font-size:13px;text-decoration:none;">💬 WhatsApp</a>
                </td>` : ''}
              </tr>
            </table>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#faf8f4;border-top:1px solid #e5e0d8;padding:20px 40px;text-align:center;">
            <p style="margin:0;font-size:12px;color:#9ca3af;">This is an automated notification from <strong>amarherbalorigins.com</strong></p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;

  const transporter = getTransporter();
  await transporter.sendMail({
    from: `"Amar Herbal Origins" <${process.env.GMAIL_USER}>`,
    to: adminEmail,
    replyTo: data.email,
    subject: `🌿 New Enquiry from ${data.name}${data.company ? ` (${data.company})` : ''}${data.country ? ` — ${data.country}` : ''}`,
    html,
  });
}

// ── Send auto-reply to the enquirer ──────────────────────────────────────
export async function sendAutoReply(data: EnquiryData) {
  const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"/></head>
<body style="margin:0;padding:0;background:#f5f0e8;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f0e8;padding:40px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:white;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

        <tr>
          <td style="background:linear-gradient(135deg,#1C1204,#3d2a0a);padding:32px 40px;text-align:center;">
            <div style="font-size:36px;margin-bottom:8px;">🌿</div>
            <h1 style="margin:0;color:#D97706;font-size:24px;font-weight:800;">Thank You, ${data.name}!</h1>
            <p style="margin:10px 0 0;color:#b8a98a;font-size:14px;">We've received your enquiry</p>
          </td>
        </tr>

        <tr>
          <td style="padding:32px 40px;">
            <p style="margin:0 0 16px;font-size:15px;color:#374151;line-height:1.7;">
              Hi <strong>${data.name}</strong>,<br/><br/>
              Thank you for reaching out to <strong>Amar Herbal Origins</strong>. We have received your enquiry and our team will get back to you within <strong>24 hours</strong>.
            </p>

            <div style="background:#faf8f4;border-left:4px solid #D97706;border-radius:0 10px 10px 0;padding:16px 20px;margin:24px 0;">
              <p style="margin:0;font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:0.06em;margin-bottom:8px;">What happens next?</p>
              <ul style="margin:0;padding-left:20px;font-size:14px;color:#374151;line-height:2;">
                <li>Our team reviews your requirements</li>
                <li>We prepare a customised quote</li>
                <li>Free sample can be dispatched within 2–3 days</li>
              </ul>
            </div>

            <p style="font-size:14px;color:#6b7280;line-height:1.7;margin:0 0 24px;">
              For urgent matters, feel free to WhatsApp us directly:
            </p>

            <a href="https://wa.me/919408465040" style="display:inline-block;background:#25D366;color:white;padding:14px 28px;border-radius:50px;font-weight:700;font-size:14px;text-decoration:none;">
              💬 Chat on WhatsApp Now
            </a>
          </td>
        </tr>

        <tr>
          <td style="background:#1C1204;padding:24px 40px;text-align:center;">
            <p style="margin:0 0 8px;color:#D97706;font-weight:700;font-size:14px;">Amar Herbal Origins</p>
            <p style="margin:0;color:#b8a98a;font-size:12px;">Ahmedabad, Gujarat, India &nbsp;|&nbsp; +91 94084 65040 &nbsp;|&nbsp; amarherbalorigins.com</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;

  const transporter = getTransporter();
  await transporter.sendMail({
    from: `"Amar Herbal Origins" <${process.env.GMAIL_USER}>`,
    to: data.email,
    subject: `✅ We received your enquiry — Amar Herbal Origins`,
    html,
  });
}
