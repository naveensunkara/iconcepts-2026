import nodemailer from "nodemailer";

/**
 * Google Workspace / Gmail: set GSUITE_EMAIL + GSUITE_APP_PASSWORD (App Password from
 * Google Account → Security → 2-Step Verification → App passwords). Uses smtp.gmail.com.
 *
 * Other providers: set SMTP_HOST, SMTP_USER, SMTP_PASS (optional SMTP_PORT, SMTP_SECURE, SMTP_FROM).
 */

/** @returns {{ host: string; port: number; secure: boolean; user: string; pass: string } | null} */
function resolveSmtpAuth() {
  const generic =
    process.env.SMTP_HOST &&
    process.env.SMTP_USER &&
    process.env.SMTP_PASS
      ? {
          host: process.env.SMTP_HOST,
          port: parseInt(process.env.SMTP_PORT || "587", 10),
          secure: process.env.SMTP_SECURE === "true",
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        }
      : null;

  if (generic) return generic;

  const gsuiteUser = process.env.GSUITE_EMAIL?.trim();
  const gsuitePass = process.env.GSUITE_APP_PASSWORD?.replace(/\s/g, "") || "";
  if (gsuiteUser && gsuitePass) {
    return {
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      user: gsuiteUser,
      pass: gsuitePass,
    };
  }

  return null;
}

export function isContactEmailConfigured() {
  return resolveSmtpAuth() !== null;
}

/** @param {{ id: string; name: string; email: string; company?: string; phone?: string; requirement: string; createdAt: string }} inquiry */
function buildTextBody(inquiry) {
  return [
    "New inquiry from the iConcepts website",
    `ID: ${inquiry.id}`,
    `Submitted: ${inquiry.createdAt}`,
    "",
    `Name: ${inquiry.name}`,
    `Email: ${inquiry.email}`,
    `Company: ${inquiry.company || "—"}`,
    `Phone: ${inquiry.phone || "—"}`,
    "",
    "Requirement:",
    inquiry.requirement,
  ].join("\n");
}

/** @param {{ id: string; name: string; email: string; company?: string; phone?: string; requirement: string; createdAt: string }} inquiry */
function buildHtmlBody(inquiry) {
  const esc = (s) =>
    String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  return `<!DOCTYPE html><html><body style="font-family:system-ui,sans-serif;line-height:1.5;color:#111">
<h2 style="margin-top:0">New website inquiry</h2>
<p><b>Name:</b> ${esc(inquiry.name)}<br/>
<b>Email:</b> ${esc(inquiry.email)}<br/>
<b>Company:</b> ${esc(inquiry.company || "—")}<br/>
<b>Phone:</b> ${esc(inquiry.phone || "—")}</p>
<p><b>Requirement:</b></p>
<p>${esc(inquiry.requirement).replace(/\n/g, "<br/>")}</p>
<p style="color:#666;font-size:12px">ID: ${esc(inquiry.id)} · ${esc(inquiry.createdAt)}</p>
</body></html>`;
}

/**
 * Sends notification to CONTACT_NOTIFY_TO (default connect@iconcepts.in).
 * @param {{ id: string; name: string; email: string; company?: string; phone?: string; requirement: string; createdAt: string }} inquiry
 */
export async function sendContactInquiryNotification(inquiry) {
  const cfg = resolveSmtpAuth();
  if (!cfg) {
    throw new Error("SMTP / G Suite mail is not configured");
  }

  const transporter = nodemailer.createTransport({
    host: cfg.host,
    port: cfg.port,
    secure: cfg.secure,
    auth: { user: cfg.user, pass: cfg.pass },
  });

  const to = process.env.CONTACT_NOTIFY_TO || "connect@iconcepts.in";
  const from =
    process.env.SMTP_FROM || `iConcepts Website <${cfg.user}>`;

  await transporter.sendMail({
    from,
    to,
    replyTo: inquiry.email,
    subject: `Website inquiry: ${inquiry.name}`,
    text: buildTextBody(inquiry),
    html: buildHtmlBody(inquiry),
  });
}
