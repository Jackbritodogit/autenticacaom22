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
    "jack": "73c40f1c59a16dc6f3cfd522d7d16408"
    
  };

  if (usuarios[user] === hash) {
    res.status(200).json({ success: true, message: "Login OK" });
  } else {
    res.status(401).json({ success: false, message: "Usuário ou senha inválidos" });
  }
}
