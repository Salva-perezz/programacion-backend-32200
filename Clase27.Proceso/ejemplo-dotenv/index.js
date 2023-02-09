import dotenv from "dotenv";
dotenv.config();

console.log({
  dbUrl: process.env.DB_URL,
  host: process.env.HOST,
  user: process.env.USER_API,
  password: process.env.PASSWORD,
});
