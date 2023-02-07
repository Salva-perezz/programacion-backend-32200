const config = {
  env: process.env.ENV || "dev",
  port: process.env.PORT || 3000,
  host: process.env.HOST || "127.0.0.1",
};

export default config;
