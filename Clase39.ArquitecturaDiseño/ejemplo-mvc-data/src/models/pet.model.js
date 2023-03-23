import { model, Schema } from "mongoose";

const petSchema = new Schema({
  name: { type: String, required: true },
  breed: { type: String, required: true },
});

const Pet = model("pet", petSchema);

export default Pet;
