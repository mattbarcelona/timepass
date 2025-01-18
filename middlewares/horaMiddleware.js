const horaMiddleware = (req, res, next) => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const formatedTime = `${hours}:${minutes}:${seconds}`;
  req.horaActual = `${formatedTime}!`;
  req.horaNumerica = hours;
  next();
};

module.exports = horaMiddleware;
