import dotenv from "dotenv";

dotenv.config();

const config = {
  port: process.env.PORT,
  host: process.env.HOST,
  dbUrl: process.env.MONGO_URL,
  db: process.argv[2],
};

export default config;
