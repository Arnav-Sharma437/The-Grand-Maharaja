import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { SITE_CONFIG } from "@/lib/constants";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      source = "Website Form",
      name,
      fullName,
      email,
      phone,
      eventType,
      inquiryType,
      subject,
      guests,
      guestCount,
      date,
      eventDate,
      preferredDate,
      serviceNeeded,
      dietarySanctum,
      message,
      specialRequests,
    } = body;

    const clientName = (name || fullName || "Valued Guest").trim();
    const clientEmail = (email || "").trim();
    const clientPhone = (phone || "").trim();
    const eventCategory = (eventType || inquiryType || subject || "General Inquiry").trim();
    const numberOfGuests = (guests || guestCount || "Not specified").trim();
    const bookingDate = (date || eventDate || preferredDate || "Not specified").trim();
    const inquiryMessage = (message || specialRequests || "None provided").trim();
    const cateringService = (serviceNeeded || "Standard Restaurant Dining").trim();
    const dietaryRequirement = (dietarySanctum || "Standard Pure Vegetarian").trim();

    const recipient = process.env.RECIPIENT_EMAIL || SITE_CONFIG.contact.email || "info@thegrandmaharaja.co.uk";

    const timestamp = new Date().toLocaleString("en-GB", {
      timeZone: "Europe/London",
      dateStyle: "full",
      timeStyle: "medium",
    });

    // 1. Clean Plain Text Format
    const textContent = `
============================================================
THE GRAND MAHARAJA - NEW INQUIRY RECEIVED
============================================================

A new reservation/inquiry has been submitted through the official website:
Sent to: ${recipient}
Source: ${source}
Timestamp: ${timestamp}

------------------------------------------------------------
GUEST DETAILS
------------------------------------------------------------
Name:           ${clientName}
Email:          ${clientEmail || "Not provided"}
Phone:          ${clientPhone || "Not provided"}

------------------------------------------------------------
EVENT & BOOKING DETAILS
------------------------------------------------------------
Inquiry / Event: ${eventCategory}
Guests:          ${numberOfGuests}
Preferred Date:  ${bookingDate}
Service Needed:  ${cateringService}
Dietary Sanctum: ${dietaryRequirement}

------------------------------------------------------------
MESSAGE / SPECIAL REQUESTS
------------------------------------------------------------
${inquiryMessage}

============================================================
The Grand Maharaja | 209 Catherine St, Leicester LE4 6GE
============================================================
`.trim();

    // 2. Royal Styled HTML Email Format
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>New Inquiry - The Grand Maharaja</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f5f1eb; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #1a1a1a;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f5f1eb; padding: 30px 15px;">
    <tr>
      <td align="center">
        <!-- Main Card -->
        <table role="presentation" width="100%" style="max-width: 620px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.08); border: 1px solid #ebe6dc;">
          <!-- Top Royal Bar -->
          <tr>
            <td style="background: linear-gradient(135deg, #161310 0%, #221d17 100%); padding: 30px 35px; border-bottom: 3px solid #d4af37; text-align: center;">
              <p style="margin: 0 0 6px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 3px; color: #d4af37; font-weight: bold;">
                THE GRAND MAHARAJA &bull; LEICESTER
              </p>
              <h1 style="margin: 0; font-family: Georgia, serif; font-size: 24px; color: #ffffff; font-weight: normal; letter-spacing: 0.5px;">
                New Guest Inquiry Received
              </h1>
              <p style="margin: 8px 0 0 0; font-size: 12px; color: #c5beb3;">
                Submitted via <strong>${source}</strong> &bull; Target: <span style="color: #d4af37;">${recipient}</span>
              </p>
            </td>
          </tr>

          <!-- Guest Summary Row -->
          <tr>
            <td style="padding: 28px 35px 20px 35px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="background-color: #faf8f5; border: 1px solid #eee7db; border-radius: 8px; padding: 18px 22px;">
                    <p style="margin: 0 0 4px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; color: #8c6e2e; font-weight: bold;">
                      Guest Contact Information
                    </p>
                    <p style="margin: 0 0 6px 0; font-size: 18px; font-weight: bold; color: #1a1a1a;">
                      ${clientName}
                    </p>
                    <table role="presentation" width="100%" style="margin-top: 8px;">
                      <tr>
                        <td style="font-size: 13px; color: #555; padding: 3px 0;">
                          <strong>Email:</strong> <a href="mailto:${clientEmail}" style="color: #8c6e2e; text-decoration: underline;">${clientEmail || "Not provided"}</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="font-size: 13px; color: #555; padding: 3px 0;">
                          <strong>Phone:</strong> <a href="tel:${clientPhone}" style="color: #8c6e2e; text-decoration: underline;">${clientPhone || "Not provided"}</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Details Table -->
          <tr>
            <td style="padding: 0 35px 20px 35px;">
              <h3 style="margin: 0 0 12px 0; font-size: 13px; text-transform: uppercase; letter-spacing: 1.5px; color: #8c6e2e; font-weight: bold; border-bottom: 1px solid #f0ebe3; padding-bottom: 6px;">
                Inquiry &amp; Reservation Details
              </h3>
              <table role="presentation" width="100%" style="border-collapse: collapse; font-size: 13px;">
                <tr>
                  <td style="padding: 9px 0; color: #777; width: 38%; border-bottom: 1px solid #f5f1eb;">Inquiry / Event:</td>
                  <td style="padding: 9px 0; color: #1a1a1a; font-weight: 600; border-bottom: 1px solid #f5f1eb;">${eventCategory}</td>
                </tr>
                <tr>
                  <td style="padding: 9px 0; color: #777; border-bottom: 1px solid #f5f1eb;">Expected Guests:</td>
                  <td style="padding: 9px 0; color: #1a1a1a; font-weight: 600; border-bottom: 1px solid #f5f1eb;">${numberOfGuests}</td>
                </tr>
                <tr>
                  <td style="padding: 9px 0; color: #777; border-bottom: 1px solid #f5f1eb;">Preferred Date:</td>
                  <td style="padding: 9px 0; color: #1a1a1a; font-weight: 600; border-bottom: 1px solid #f5f1eb;">${bookingDate}</td>
                </tr>
                <tr>
                  <td style="padding: 9px 0; color: #777; border-bottom: 1px solid #f5f1eb;">Service Type:</td>
                  <td style="padding: 9px 0; color: #1a1a1a; font-weight: 600; border-bottom: 1px solid #f5f1eb;">${cateringService}</td>
                </tr>
                <tr>
                  <td style="padding: 9px 0; color: #777; border-bottom: 1px solid #f5f1eb;">Dietary Sanctum:</td>
                  <td style="padding: 9px 0; color: #1a1a1a; font-weight: 600; border-bottom: 1px solid #f5f1eb;">${dietaryRequirement}</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message Block -->
          <tr>
            <td style="padding: 0 35px 30px 35px;">
              <h3 style="margin: 0 0 10px 0; font-size: 13px; text-transform: uppercase; letter-spacing: 1.5px; color: #8c6e2e; font-weight: bold; border-bottom: 1px solid #f0ebe3; padding-bottom: 6px;">
                Message / Special Requirements
              </h3>
              <div style="background-color: #faf8f5; border-left: 3px solid #d4af37; padding: 14px 18px; border-radius: 4px; font-size: 13px; line-height: 1.6; color: #333333; font-style: italic;">
                ${inquiryMessage.replace(/\n/g, "<br>")}
              </div>
            </td>
          </tr>

          <!-- Action Button Row -->
          <tr>
            <td style="padding: 0 35px 35px 35px; text-align: center;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td align="center">
                    <a href="mailto:${clientEmail}?subject=Re:%20The%20Grand%20Maharaja%20Inquiry%20-${encodeURIComponent(eventCategory)}" style="display: inline-block; background: linear-gradient(135deg, #8c6e2e 0%, #6e5520 100%); color: #ffffff; text-decoration: none; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 1.5px; padding: 13px 30px; border-radius: 6px; box-shadow: 0 4px 12px rgba(140,110,46,0.3);">
                      Reply Directly to Guest
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #14120e; padding: 22px 35px; text-align: center; border-top: 1px solid #28221a;">
              <p style="margin: 0 0 4px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; color: #d4af37;">
                The Grand Maharaja
              </p>
              <p style="margin: 0; font-size: 11px; color: #888888;">
                209 Catherine St, Leicester LE4 6GE &bull; +0116 507 0296 &bull; <a href="mailto:info@thegrandmaharaja.co.uk" style="color: #d4af37; text-decoration: none;">info@thegrandmaharaja.co.uk</a>
              </p>
              <p style="margin: 8px 0 0 0; font-size: 10px; color: #666666;">
                Received at: ${timestamp}
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`.trim();

    // 3. SMTP Sending Logic
    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT) || 587;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    if (host && user && pass) {
      const transporter = nodemailer.createTransport({
        host,
        port,
        secure: port === 465,
        auth: { user, pass },
      });

      await transporter.sendMail({
        from: process.env.SMTP_FROM || `"The Grand Maharaja Inquiries" <${user}>`,
        to: recipient,
        replyTo: clientEmail || undefined,
        subject: `[New Inquiry - The Grand Maharaja] ${eventCategory} from ${clientName}`,
        text: textContent,
        html: htmlContent,
      });

      console.log(`[Enquiry API] Successfully dispatched email to ${recipient} from ${clientName} (${clientEmail})`);
    } else {
      // In development or when SMTP environment variables are awaiting credentials
      console.log(`============================================================`);
      console.log(`[Enquiry API] Inquiry routed to: ${recipient}`);
      console.log(`[Enquiry API] Guest Name: ${clientName}`);
      console.log(`[Enquiry API] Guest Email: ${clientEmail}`);
      console.log(`[Enquiry API] Guest Phone: ${clientPhone}`);
      console.log(`[Enquiry API] Event / Subject: ${eventCategory}`);
      console.log(`[Enquiry API] Guests: ${numberOfGuests}`);
      console.log(`[Enquiry API] Preferred Date: ${bookingDate}`);
      console.log(`[Enquiry API] Service: ${cateringService}`);
      console.log(`[Enquiry API] Message: ${inquiryMessage}`);
      console.log(`[Enquiry API] (To enable live SMTP delivery, provide SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS in .env.local)`);
      console.log(`============================================================`);
    }

    return NextResponse.json({
      success: true,
      message: `Your inquiry has been successfully received and forwarded to ${recipient}. Our coordinator will contact you promptly.`,
    });
  } catch (error: any) {
    console.error("[Enquiry API Error]:", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Failed to process inquiry.",
      },
      { status: 500 }
    );
  }
}
