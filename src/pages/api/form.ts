import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = { ok: true } | { ok: false; error: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method Not Allowed" });
  }

  try {
    const { name, company, email, phone, formId } = req.body || {};
    if (!name || !company || !email) {
      return res
        .status(400)
        .json({ ok: false, error: "Missing required fields" });
    }

    const webhookUrl =
      process.env.N8N_WEBHOOK_URL ||
      "https://n8n.solverkey.es/webhook/evento-form-response";

    const token = process.env.N8N_WEBHOOK_TOKEN;
    if (!token) {
      return res
        .status(500)
        .json({ ok: false, error: "Missing N8N_WEBHOOK_TOKEN env" });
    }

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name,
        company,
        email,
        phone: phone || null,
        formId: formId || null,
        page: "skai-landing-clean",
        timestamp: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      const text = await response.text();
      return res.status(502).json({ ok: false, error: text || "Bad Gateway" });
    }

    return res.status(200).json({ ok: true });
  } catch (err: any) {
    return res
      .status(500)
      .json({ ok: false, error: err?.message || "Internal Server Error" });
  }
}


