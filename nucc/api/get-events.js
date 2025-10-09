import crypto from "crypto";

function getAuthHeader(publicKey, privateKey, method, version) {
  const ts = Date.now();
  const data = `${publicKey}${method}${version}${ts}`;
  const hmac = crypto.createHmac("sha256", privateKey).update(data).digest("hex");
  return `v=${version};k=${publicKey};ts=${ts};d=${hmac}`;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const publicKey = "nucc";
    const privateKey = process.env.GLUEUP_PRIVATE_KEY;

    if (!privateKey) {
      throw new Error("Missing GLUEUP_PRIVATE_KEY in environment");
    }

    const authHeader = getAuthHeader(publicKey, privateKey, "POST", "1.0");
    const url = "https://api-nucc.glueup.com/v2/event/list";

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        a: authHeader,
      },
      body: JSON.stringify(req.body),
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`GlueUp error ${response.status}: ${text}`);
    }

    const data = await response.json();
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(data);
  } catch (err) {
    console.error("Function error:", err);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(500).json({ error: err.message });
  }
}
