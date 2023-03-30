import dotenv from "dotenv";

dotenv.config();

const config = {
  port: process.env.PORT,
  dbUrl: process.env.DB_URL,
  database: process.env.DATABASE,
  corsOrigin: process.env.CORS_ORIGINS.split(","),
};

export default config;

// Esto ahce el .split(",") = "localhost:3001,localhost:3002" => ["localhost:3001","localhost:3002"]
