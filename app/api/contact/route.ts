import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // In a real implementation, you would send an email here
    // For now, we'll just log it and return success
    console.log("Contact form submission:", { name, email, message });

    // TODO: Integrate with email service (SendGrid, Resend, etc.)
    // Example: await sendEmail({ to: 'imrulo.eth@proton.me', subject: `Domain Inquiry from ${name}`, body: message });

    return NextResponse.json(
      { message: "Thank you for your inquiry. We'll get back to you soon." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

