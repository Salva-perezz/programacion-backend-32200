import dotenv from "dotenv";

dotenv.config();

const config = {
  port: process.env.PORT,
  dbUrl: process.env.DB_URL,
};

export default config;
