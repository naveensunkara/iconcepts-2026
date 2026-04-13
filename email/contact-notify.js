import nodemailer from "nodemailer";

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

export function isContactEmailConfigured() {
  return Boolean(
    process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS,
  );
}

/**
 * Sends notification to CONTACT_NOTIFY_TO (default connect@iconcepts.in).
 * Set SMTP_HOST, SMTP_PORT (default 587), SMTP_USER, SMTP_PASS.
 * Optional: SMTP_SECURE=true, SMTP_FROM, CONTACT_NOTIFY_TO
 * @param {{ id: string; name: string; email: string; company?: string; phone?: string; requirement: string; createdAt: string }} inquiry
 */
export async function sendContactInquiryNotification(inquiry) {
  const port = parseInt(process.env.SMTP_PORT || "587", 10);
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const to = process.env.CONTACT_NOTIFY_TO || "connect@iconcepts.in";
  const from =
    process.env.SMTP_FROM || `iConcepts Website <${process.env.SMTP_USER}>`;

  await transporter.sendMail({
    from,
    to,
    replyTo: inquiry.email,
    subject: `Website inquiry: ${inquiry.name}`,
    text: buildTextBody(inquiry),
    html: buildHtmlBody(inquiry),
  });
}
