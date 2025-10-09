import crypto from "crypto";

export async function handler(event, context) {
  // --- CORS preflight ---
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type, a",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
      },
      body: "",
    };
  }

  // --- Только POST ---
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  try {
  const body = JSON.parse(event.body);

  const publicKey = "nucc";
  const privateKey = process.env.GLUEUP_PRIVATE_KEY;

  if (!privateKey) throw new Error("Private key is missing");

  const authHeader = getAuthHeader(publicKey, privateKey, "POST", "1.0");
  const url = "https://api-nucc.glueup.com/v2/event/list";

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "a": authHeader,
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`GlueUp error ${response.status}: ${text}`);
  }

  const data = await response.json();

  return {
    statusCode: 200,
    headers: { "Access-Control-Allow-Origin": "*" },
    body: JSON.stringify(data),
  };
} catch (err) {
  console.error("Function error:", err);
  return {
    statusCode: 500,
    headers: { "Access-Control-Allow-Origin": "*" },
    body: JSON.stringify({ error: err.message }),
  };
}
}

// --- функция генерации заголовка a ---
function getAuthHeader(publicKey, privateKey, method, version = "1.0") {
  const ts = Date.now(); // timestamp в миллисекундах
  const toSign = publicKey + privateKey + method + version + ts;

  const hmac = crypto.createHmac("sha256", privateKey);
  hmac.update(toSign);
  const digest = hmac.digest("hex");

  return `v=${version};k=${publicKey};ts=${ts};d=${digest}`;
}
