import { model, Schema } from "mongoose";

const petSchema = new Schema({
  name: { type: String, required: true },
  breed: { type: String, required: true },
  age: { type: Number, required: true },
});

export const Pet = model("pet", petSchema);
