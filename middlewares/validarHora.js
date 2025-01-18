const express = require("express");
const router = express.Router();
const hour = 12;

const validarHora = (req, res, next) => {
  const now = new Date();
  const hora = now.getHours(); // Middleware
  if (hora < hour || hora >= 24) {
    res.locals.mensaje = `Aún no es la hora, espera hasta las ${hour}:00 para entrar`;
    return res.redirect("/?mensaje=" + encodeURIComponent(res.locals.mensaje));
  }
  next();
};

module.exports = validarHora;
