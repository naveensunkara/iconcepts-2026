import { z } from "zod";
import {
  isContactEmailConfigured,
  sendContactInquiryNotification,
} from "../email/contact-notify.js";

const contactInquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().optional(),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  requirement: z
    .string()
    .min(10, "Please describe your requirement in at least 10 characters"),
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const body =
    typeof req.body === "string"
      ? JSON.parse(req.body || "{}")
      : req.body || {};

  const result = contactInquirySchema.safeParse(body);
  if (!result.success) {
    return res.status(400).json({ error: result.error.flatten() });
  }

  const id = crypto.randomUUID();
  const createdAt = new Date().toISOString();
  const inquiry = { id, ...result.data, createdAt };

  const production = process.env.NODE_ENV === "production";
  if (production && !isContactEmailConfigured()) {
    console.error(
      "[contact] Production requires SMTP_HOST, SMTP_USER, and SMTP_PASS",
    );
    return res.status(503).json({
      error:
        "Message could not be delivered. Please email connect@iconcepts.in directly.",
    });
  }

  if (isContactEmailConfigured()) {
    try {
      await sendContactInquiryNotification(inquiry);
    } catch (err) {
      console.error("[contact] SMTP send failed:", err);
      return res.status(503).json({
        error:
          "Message could not be sent. Please try again or email connect@iconcepts.in directly.",
      });
    }
  } else {
    console.warn(
      "[contact] SMTP not configured — no email sent (set SMTP_* on Vercel)",
    );
  }

  return res.status(201).json(inquiry);
}
