import dotenv from "dotenv";
dotenv.config();

const config = {
  clienId: process.env.CLIENT_ID,
  clienSecret: process.env.CLIENT_SECRET,
};
console.log(config);
export default config;
