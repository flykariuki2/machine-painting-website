import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { full_name, phone, email, county, location, service_interest, property_type, message, request_type, preferred_date } = body;

    // Configure Nodemailer to use Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail address
        pass: process.env.GMAIL_APP_PASSWORD, // Your 16-character Gmail App Password
      },
    });

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; padding: 20px;">
        <h2 style="color: #043079; border-bottom: 2px solid #f5b400; padding-bottom: 10px;">New ${request_type} Request</h2>
        <p><strong>Name:</strong> ${full_name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Location:</strong> ${location}, ${county}</p>
        <p><strong>Service:</strong> ${service_interest}</p>
        <p><strong>Property Type:</strong> ${property_type}</p>
        <p><strong>Preferred Date:</strong> ${preferred_date}</p>
        <p><strong>Message:</strong> ${message}</p>
        <hr style="margin: 20px 0; border: 0; border-top: 1px solid #eee;" />
        <p style="font-size: 12px; color: #666;">This enquiry was submitted via the The Machine Painting Co Ltd website.</p>
      </div>
    `;

    await transporter.sendMail({
      from: `"The Machine Painting Website" <${process.env.GMAIL_USER}>`,
      to: "tmppainters@gmail.com",
      subject: `New ${request_type} from ${full_name}`,
      html: emailHtml,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 });
  }
}