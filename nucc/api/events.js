import crypto from "crypto";

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, a");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const publicKey = "nucc";
    const privateKey = "MF0CAQACEADum2BHPkUSAmnE2j4Mk5sCAwEAAQIPUPMRtNnhYPJJao0L2JoBAggPiiRcblMgGwIID1rQ4/sukoECCAHXlXHjnjULAggJGkmkHhCqAQIIATHb3QkptWQ=";
    const requestMethod = "POST";
    const version = "v2";
    const endpoint = "event/list"; // 👈 добавляем в baseString
    const timestamp = Date.now();

    // 👉 Формируем baseString по расширенной схеме
    const baseString = requestMethod + publicKey + version + endpoint + timestamp;

    const digest = crypto
  	.createHmac("sha256", privateKey)
  	.update(baseString)
  	.digest("hex");

    const authHeader = `v=1.0;k=${publicKey};ts=${timestamp};d=${digest}`;

    console.log("baseString:", baseString);
    console.log("digest:", digest);

    const glueRes = await fetch("https://api-services.glueup.com/v2/event/list", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "a": authHeader,
      },
      body: JSON.stringify(req.body || {}),
    });

    const text = await glueRes.text();
    const contentType = glueRes.headers.get("content-type");

    if (contentType?.includes("application/json")) {
      return res.status(200).json(JSON.parse(text));
    }

    res.setHeader("Content-Type", "text/html; charset=utf-8");
    return res.status(200).send(text);
  } catch (err) {
    console.error("Proxy error:", err);
    return res.status(500).json({ error: "Proxy error", details: err.message });
  }
}
