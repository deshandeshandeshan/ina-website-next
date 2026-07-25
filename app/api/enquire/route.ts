import { NextResponse } from "next/server";
import { Resend } from "resend";

type EnquiryPayload = {
  name: string;
  email: string;
  pronouns: string;
  budget: string;
  date: string;
  details: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidPayload(body: unknown): body is EnquiryPayload {
  if (!body || typeof body !== "object") return false;
  const { name, email, pronouns, budget, date, details } = body as Record<
    string,
    unknown
  >;
  return (
    typeof name === "string" &&
    name.trim().length > 0 &&
    typeof email === "string" &&
    EMAIL_PATTERN.test(email) &&
    typeof pronouns === "string" &&
    typeof budget === "string" &&
    budget.trim().length > 0 &&
    typeof date === "string" &&
    date.trim().length > 0 &&
    typeof details === "string" &&
    details.trim().length > 0
  );
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!isValidPayload(body)) {
    return NextResponse.json(
      { error: "Missing required fields." },
      { status: 400 }
    );
  }

  const { name, email, pronouns, budget, date, details } = body;

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL!,
    to: process.env.RESEND_TO_EMAIL!,
    replyTo: email,
    subject: `New tattoo enquiry from ${name}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      pronouns && `Pronouns: ${pronouns}`,
      `Budget: ${budget}`,
      `Preferred date: ${date}`,
      "",
      "Details:",
      details,
    ]
      .filter(Boolean)
      .join("\n"),
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Failed to send enquiry." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
