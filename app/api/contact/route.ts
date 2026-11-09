import { site } from "@/data/site";
import { messageSchema } from "@/lib/validation";

/**
 * Sends form messages through Resend. Needs RESEND_API_KEY and CONTACT_TO_EMAIL.
 * Without them it answers 503 and the form shows the fallback contact option.
 */
export async function POST(request: Request) {
  const parsed = messageSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return Response.json({ error: "invalid" }, { status: 400 });

  const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env;
  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL) return Response.json({ error: "not_configured" }, { status: 503 });

  const { name, email, business, projectType, budget, message } = parsed.data;
  const lines = [
    `Name: ${name}`,
    `Email: ${email}`,
    business ? `Business: ${business}` : null,
    projectType ? `Project type: ${projectType}` : null,
    budget ? `Budget: ${budget}` : null,
    "",
    message,
  ].filter((line) => line !== null);

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      // Resend's shared sender works until you verify your own domain.
      from: CONTACT_FROM_EMAIL ?? `${site.name} Portfolio <onboarding@resend.dev>`,
      to: CONTACT_TO_EMAIL,
      reply_to: email,
      subject: `${projectType ? "Project inquiry" : "Message"} from ${name}`,
      text: lines.join("\n"),
    }),
  });

  if (!res.ok) return Response.json({ error: "send_failed" }, { status: 502 });
  return Response.json({ ok: true });
}
