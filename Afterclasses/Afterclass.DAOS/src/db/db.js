import admin from "firebase-admin";
import mongoose from "mongoose";
import { config } from "../config/config.js";
import serviceAccount from "./llave.json" assert { type: "json" };

let connectDb;

const connectMongo = async (url) => {
  await mongoose.connect(url);
};

const connectFirebase = async (url) => {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
};

if (config.database === "MONGO") {
  connectDb = connectMongo;
} else {
  connectDb = connectFirebase;
}

export const db = { connectDb };
