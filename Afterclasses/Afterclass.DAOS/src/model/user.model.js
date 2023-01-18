import { model, Schema } from "mongoose";

const userSchema = new Schema({
  name: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  age: { type: Number, required: true },
});

export const User = model("user", userSchema);
