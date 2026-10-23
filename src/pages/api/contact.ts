import type { APIRoute } from "astro";
import { Resend } from "resend";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { name, email, subject, message } = data;

    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ success: false, error: "Please fill in all required fields." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ success: false, error: "Please provide a valid email address." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Escape HTML to prevent injection
    const escapeHtml = (str: string) =>
      str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message);

    // --- OPTION 1: Web3Forms (No DNS records required) ---
    const web3formsKey =
      import.meta.env.WEB3FORMS_ACCESS_KEY || process.env.WEB3FORMS_ACCESS_KEY;

    if (web3formsKey) {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: web3formsKey,
          name: safeName,
          email: safeEmail,
          subject: safeSubject,
          message: safeMessage,
          from_name: "Mahakali Website Inquiry",
        }),
      });

      const result = await response.json();

      if (result.success) {
        return new Response(
          JSON.stringify({
            success: true,
            message: "Thank you! Your message has been sent successfully. We will be in touch shortly.",
          }),
          { status: 200, headers: { "Content-Type": "application/json" } }
        );
      } else {
        console.error("Web3Forms error:", result);
        return new Response(
          JSON.stringify({ success: false, error: result.message || "Failed to send message." }),
          { status: 400, headers: { "Content-Type": "application/json" } }
        );
      }
    }

    // --- OPTION 2: Resend (Requires domain verification or matching signup email) ---
    const apiKey = import.meta.env.RESEND_API_KEY || process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("Neither WEB3FORMS_ACCESS_KEY nor RESEND_API_KEY is configured.");
      return new Response(
        JSON.stringify({
          success: false,
          error: "Email service is temporarily not configured. Please add WEB3FORMS_ACCESS_KEY or RESEND_API_KEY in your .env file.",
        }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const resend = new Resend(apiKey);
    const toEmail =
      import.meta.env.CONTACT_EMAIL_TO || process.env.CONTACT_EMAIL_TO || "enquires.wrnxt@gmail.com";
    const fromEmail =
      import.meta.env.CONTACT_EMAIL_FROM ||
      process.env.CONTACT_EMAIL_FROM ||
      "Mahakali Furnitures <onboarding@resend.dev>";

    const { error: resendError } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `New Inquiry: ${safeSubject} (from ${safeName})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 8px; background-color: #fdfdfd;">
          <div style="background-color: #1b1512; padding: 18px 20px; border-radius: 6px 6px 0 0; text-align: center;">
            <h2 style="color: #e4c9a4; margin: 0; font-size: 20px; letter-spacing: 1px;">Mahakali Home Furnitures</h2>
            <p style="color: #ffffff; margin: 6px 0 0 0; font-size: 13px; opacity: 0.85;">New Website Inquiry</p>
          </div>
          <div style="padding: 24px 20px; background: #ffffff;">
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr>
                <td style="padding: 8px 0; color: #666; width: 100px;"><strong>Name:</strong></td>
                <td style="padding: 8px 0; color: #111;">${safeName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666;"><strong>Email:</strong></td>
                <td style="padding: 8px 0; color: #111;"><a href="mailto:${safeEmail}" style="color: #a3723a; text-decoration: none;">${safeEmail}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666;"><strong>Subject:</strong></td>
                <td style="padding: 8px 0; color: #111;">${safeSubject}</td>
              </tr>
            </table>
            <div style="margin-top: 20px; padding: 16px; background-color: #f9f7f4; border-left: 4px solid #a3723a; border-radius: 4px;">
              <p style="margin: 0 0 8px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #888;"><strong>Message:</strong></p>
              <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #333; white-space: pre-wrap;">${safeMessage}</p>
            </div>
          </div>
          <div style="padding: 12px 20px; font-size: 12px; color: #999; text-align: center; border-top: 1px solid #eaeaea;">
            <p style="margin: 0;">You can reply directly to this email to respond to <strong>${safeName}</strong>.</p>
          </div>
        </div>
      `,
    });

    if (resendError) {
      console.error("Resend error:", resendError);
      return new Response(
        JSON.stringify({ success: false, error: resendError.message }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Thank you! Your message has been sent successfully. We will be in touch shortly.",
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err: any) {
    console.error("Contact API error:", err);
    return new Response(
      JSON.stringify({ success: false, error: err?.message || "Failed to send message." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
