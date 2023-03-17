import bcrypt from "bcrypt";
import mongoose from "mongoose";
import { User } from "./table/user.model.js";

await mongoose.connect(
  "mongodb+srv://salvax:salva@cluster0.uriryq6.mongodb.net/?retryWrites=true&w=majority"
);

const hashPasword = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

const newUser = {
  username: "salvax",
  password: hashPasword("salva"),
  firstname: "Salva",
  lastname: "salva",
  email: "salva@Mail.com",
  phone: 123456,
  address: "salva",
  age: 21,
  photo: "pepe",
};

await User.create(newUser);
