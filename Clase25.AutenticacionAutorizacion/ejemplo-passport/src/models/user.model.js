import { model, Schema } from "mongoose";

const userSchema = Schema({
  username: { type: String },
  emails: { type: String },
  password: { type: String },
  firstname: { type: String },
  lastname: { type: String },
});

export const User = model("user", userSchema);
