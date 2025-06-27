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
    "Jack": "4752d1e615a374cd2ed5215c4875356c"
    
  };

  if (usuarios[user] === hash) {
    res.status(200).json({ success: true, message: "Login OK" });
  } else {
    res.status(401).json({ success: false, message: "Usuário ou senha inválidos" });
  }
}
