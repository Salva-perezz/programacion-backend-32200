const config = {
  modo: process.env.MODO || "prod",
  puerto: process.env.PUERTO || 0,
  debug: Boolean(process.env.DEBUG) || false,
};

console.log(config);
