// app/api/send-rfq/route.js
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const formData = await request.formData();
    
    const corporateName = formData.get('corporateName');
    const buyerName = formData.get('buyerName');
    const email = formData.get('email');
    const category = formData.get('category');
    const quantity = formData.get('quantity');
    const targetPrice = formData.get('targetPrice');
    const specifications = formData.get('specifications') || 'None provided';
    const files = formData.getAll('files'); // Retrieves array of Files

    // Configure your commercial SMTP / Email dispatch settings
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // e.g., smtp.mailgun.org or smtp.gmail.com
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: true, 
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Format file attachments for Nodemailer
    const attachments = [];
    for (const file of files) {
      const buffer = Buffer.from(await file.arrayBuffer());
      attachments.push({
        filename: file.name,
        content: buffer,
      });
    }

    // Email Layout Matrix
    const mailOptions = {
      from: `"B2B Procurement Portal" <${process.env.SMTP_USER}>`,
      to: 'merchandising@yourcompany.com', // ◄ Change to your actual corporate desk email
      replyTo: email, 
      subject: `New RFQ Submission: ${corporateName} (${category.toUpperCase()})`,
      text: `
        New RFQ received via digital portal:
        
        Company: ${corporateName}
        Contact Name: ${buyerName}
        Email: ${email}
        Category: ${category}
        Target Quantity: ${quantity} pcs
        Target FOB Price: ${targetPrice}
        
        Requirements/Specifications:
        ${specifications}
      `,
      html: `
        <div style="font-family: sans-serif; color: #292524; max-width: 600px; border: 1px solid #e7e5e4; padding: 24px;">
          <h2 style="font-family: serif; border-bottom: 2px solid #78716c; padding-bottom: 8px;">Production Request for Quote</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr><td style="padding: 6px 0; font-weight: bold; width: 40%;">Company Name:</td><td>${corporateName}</td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold;">Representative:</td><td>${buyerName}</td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold;">Client Email:</td><td><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold;">Apparel Category:</td><td style="text-transform: uppercase;">${category}</td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold;">Order Volume:</td><td>${quantity} Pcs</td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold;">Target FOB Price:</td><td>${targetPrice}</td></tr>
          </table>
          <h4 style="margin-top: 20px; margin-bottom: 6px; font-weight: bold;">Fabric & GSM Specifications:</h4>
          <p style="background-color: #f5f5f4; padding: 12px; font-size: 14px; white-space: pre-wrap; margin: 0; border-left: 3px solid #d6d3d1;">${specifications}</p>
          <p style="font-size: 11px; color: #a8a29e; margin-top: 24px;">This inquiry was dispatched automatically from the B2B entry portal.</p>
        </div>
      `,
      attachments: attachments,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('SMTP Mail error occurred:', error);
    return NextResponse.json({ error: 'Failed to process email dispatch backend.' }, { status: 500 });
  }
}