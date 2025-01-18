const express = require("express");
const app = express();
const horaMiddleware = require("./middlewares/horaMiddleware");

const indexRouter = require("./routes/index");
const endrouteRouter = require("./routes/endroute");

// Routes
app.use(horaMiddleware);
app.use("/", indexRouter);
app.use("/endroute", endrouteRouter);

// Server
app.listen(3000, () => {
  console.log("El servidor está escuchando en el puerto 3000");
});
