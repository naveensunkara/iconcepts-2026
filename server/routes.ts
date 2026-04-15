import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactInquirySchema } from "@shared/schema";
import {
  isContactEmailConfigured,
  sendContactInquiryNotification,
} from "../email/contact-notify.js";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    const result = contactInquirySchema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({ error: result.error.flatten() });
    }

    const inquiry = await storage.createInquiry(result.data);

    const production = process.env.NODE_ENV === "production";
    if (production && !isContactEmailConfigured()) {
      console.error(
        "[contact] Production requires mail env: SMTP_HOST+SMTP_USER+SMTP_PASS, or GSUITE_EMAIL+GSUITE_APP_PASSWORD",
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
        "[contact] Mail not configured — inquiry saved but no email sent (set SMTP_* or GSUITE_EMAIL+GSUITE_APP_PASSWORD)",
      );
    }

    return res.status(201).json(inquiry);
  });

  return httpServer;
}
