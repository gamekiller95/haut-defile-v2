import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(req) {
  // Access the key inside the function so it doesn't crash the whole file if it's missing
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("Server Error: RESEND_API_KEY is missing from .env.local");
    return NextResponse.json({ error: "Internal Configuration Error" }, { status: 500 });
  }

  const resend = new Resend(apiKey);

  try {
    const body = await req.json();
    const { name, company, email, quantity, message } = body;

    const data = await resend.emails.send({
      from: 'Haut Défilé <onboarding@resend.dev>',
      to: ['m.hasanalmamun6@gmail.com'], // Change this to your real email
      subject: `Bulk Inquiry: ${company}`,
      html: `
        <div style="font-family: serif; color: #1c1917; padding: 20px;">
          <h2>New Bulk Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Quantity:</strong> ${quantity}</p>
          <p><strong>Message:</strong> ${message}</p>
        </div>
      `,
    });

    if (data.error) {
      return NextResponse.json({ error: data.error }, { status: 400 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}