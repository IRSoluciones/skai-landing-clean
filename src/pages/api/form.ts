import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = { ok: true } | { ok: false; error: string };

/**
 * Valida que el número de teléfono sea español y válido
 * Rechaza números de tarificación especial, premium y adultos
 */
function validateSpanishPhone(phone: string): { valid: boolean; error?: string } {
  // Limpiar el número de espacios, guiones y caracteres especiales
  const cleaned = phone.replace(/[\s\-\(\)]/g, "");
  
  // Remover el prefijo +34 o 0034 si existe
  let normalized = cleaned;
  if (normalized.startsWith("+34")) {
    normalized = normalized.substring(3);
  } else if (normalized.startsWith("0034")) {
    normalized = normalized.substring(4);
  } else if (normalized.startsWith("34") && normalized.length === 11) {
    normalized = normalized.substring(2);
  }
  
  // Debe tener exactamente 9 dígitos
  if (!/^\d{9}$/.test(normalized)) {
    return { valid: false, error: "El teléfono debe tener 9 dígitos" };
  }
  
  // Números premium y de tarificación especial a rechazar
  const invalidPrefixes = [
    "800", // Números gratuitos (no son de particulares)
    "803", "806", "807", // Números de adultos/premium
    "900", "901", "902", "903", "904", "905", "906", "907", // Tarificación especial
  ];
  
  const prefix3 = normalized.substring(0, 3);
  if (invalidPrefixes.includes(prefix3)) {
    return { valid: false, error: "Este tipo de número no está permitido" };
  }
  
  // Validar números válidos:
  // - Móviles: 6XX XXX XXX o 7XX XXX XXX
  // - Fijos: 8XX XXX XXX (excepto 80X) o 9XX XXX XXX (excepto 90X)
  const firstDigit = normalized[0];
  const firstTwo = normalized.substring(0, 2);
  
  if (firstDigit === "6" || firstDigit === "7") {
    // Móviles válidos
    return { valid: true };
  } else if (firstDigit === "8" && firstTwo !== "80") {
    // Fijos que empiezan por 8 (excepto 80X)
    return { valid: true };
  } else if (firstDigit === "9" && firstTwo !== "90") {
    // Fijos que empiezan por 9 (excepto 90X)
    return { valid: true };
  }
  
  return { valid: false, error: "Número de teléfono no válido para España" };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method Not Allowed" });
  }

  try {
    const { name, company, email, phone, formId, type } = req.body || {};
    
    // Validación diferente según el tipo de formulario
    if (type === "call-request") {
      // Para solicitud de llamada: nombre, empresa y teléfono son obligatorios
      if (!name || !company || !phone) {
        return res
          .status(400)
          .json({ ok: false, error: "Faltan campos requeridos" });
      }
      
      // Validar el número de teléfono español
      const phoneValidation = validateSpanishPhone(phone);
      if (!phoneValidation.valid) {
        return res
          .status(400)
          .json({ ok: false, error: phoneValidation.error || "Teléfono no válido" });
      }
    } else {
      // Para formulario de reserva: nombre, empresa y email son obligatorios
      if (!name || !company || !email) {
        return res
          .status(400)
          .json({ ok: false, error: "Faltan campos requeridos" });
      }
      
      // Si hay teléfono, validarlo
      if (phone) {
        const phoneValidation = validateSpanishPhone(phone);
        if (!phoneValidation.valid) {
          return res
            .status(400)
            .json({ ok: false, error: phoneValidation.error || "Teléfono no válido" });
        }
      }
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
        email: email || null,
        phone: phone || null,
        formId: formId || null,
        type: type || "reservation",
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


