export function isContactEmailConfigured(): boolean;
export function sendContactInquiryNotification(inquiry: {
  id: string;
  name: string;
  email: string;
  company?: string;
  phone?: string;
  requirement: string;
  createdAt: string;
}): Promise<void>;
