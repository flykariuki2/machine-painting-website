import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

function textValue(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;

    const fullName = textValue(body.full_name);
    const phone = textValue(body.phone);
    const email = textValue(body.email);
    const county = textValue(body.county);
    const location = textValue(body.location);
    const specialty = textValue(body.specialty);

    if (
      !fullName ||
      !phone ||
      !county ||
      !location ||
      !specialty ||
      typeof body.age !== "number" ||
      !Number.isInteger(body.age) ||
      body.age < 18 ||
      body.age > 100
    ) {
      return NextResponse.json(
        { success: false, error: "Invalid application details." },
        { status: 400 },
      );
    }

    const gmailUser = process.env.GMAIL_USER;
    const gmailPassword = process.env.GMAIL_APP_PASSWORD;

    if (!gmailUser || !gmailPassword) {
      console.error("Careers email configuration is missing.");
      return NextResponse.json(
        { success: false, error: "Email service unavailable." },
        { status: 503 },
      );
    }

    const yearsExperience =
      typeof body.years_experience === "number"
        ? String(body.years_experience)
        : "Not provided";

    const sprayExperience =
      body.has_spray_painting_experience === true
        ? "Yes"
        : body.has_spray_painting_experience === false
          ? "No"
          : "Not provided";

    const details = [
      "NEW PAINTER APPLICATION",
      "",
      `Full name: ${fullName}`,
      `Age: ${body.age}`,
      `Phone: ${phone}`,
      `Email: ${email || "Not provided"}`,
      `County: ${county}`,
      `Location: ${location}`,
      `Skills: ${specialty}`,
      `Years of experience: ${yearsExperience}`,
      `Availability: ${textValue(body.availability) || "Not provided"}`,
      `Spray painting experience: ${sprayExperience}`,
      "",
      "Additional information:",
      textValue(body.message) || "Not provided",
      "",
      `Source: ${textValue(body.source) || "careers_form"}`,
    ].join("\n");

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailPassword,
      },
    });

    await transporter.sendMail({
      from: `"The Machine Painting Website" <${gmailUser}>`,
      to: "tmppainters@gmail.com",
      subject: "New Painter Application - The Machine Painting Co Ltd",
      text: details,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Painter application email error:", error);

    return NextResponse.json(
      { success: false, error: "Failed to send notification." },
      { status: 500 },
    );
  }
}
