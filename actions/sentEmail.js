"use server";

import nodemailer from "nodemailer";

export async function sendEmail(body) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: body?.to,
      subject: body?.subject,
      text: body?.text,
      html: body?.html,
    });

    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false };
  }
}
