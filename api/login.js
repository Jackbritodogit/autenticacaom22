// Arquivo: /api/login.js
export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: "Método não permitido" });
  }

  const { user, pass } = req.body;
  const SALT = "secret_key_2024";

  const crypto = require("crypto");
  const hash = crypto.createHash("md5").update(pass + SALT).digest("hex");

  const usuarios = {
    "admin": "9ee675e05b3aadd09a5bcc7273f82f43"
  };

  if (usuarios[user] === hash) {
    res.status(200).json({ success: true, message: "Login OK" });
  } else {
    res.status(401).json({ success: false, message: "Usuário ou senha inválidos" });
  }
}
