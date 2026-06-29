import { NextResponse } from "next/server";

const FORMSPREE_URL = "https://formspree.io/f/mdarzggb";
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN!;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID!;

async function notifyTelegram(data: {
  name: string;
  email: string;
  service: string;
  message: string;
}) {
  const text = [
    `🔔 New lead from firmo-site.vercel.app`,
    ``,
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Service: ${data.service}`,
    `Message: ${data.message}`,
    ``,
    `→ Reply within 24h`,
  ].join("\n");

  await fetch(
    `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text }),
    }
  );
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      service: formData.get("service") as string,
      message: formData.get("message") as string,
    };

    const formspreePromise = fetch(FORMSPREE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(data),
    });

    const telegramPromise = notifyTelegram(data).catch(() => {});

    await Promise.all([formspreePromise, telegramPromise]);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
