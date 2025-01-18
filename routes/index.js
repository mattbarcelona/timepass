const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const mensaje = req.query.mensaje || "";
  res.send(`
    <h1>Bienvenido</h1>
    <p>La hora actual es: ${req.horaActual}</p>
    <form action="/endroute" method="GET">
      <button><a href="/endroute">Entrar</></button>
    </form>
    <p>${req.query.mensaje ? req.query.mensaje : ""}</p>
  `);
});

module.exports = router;
