import { model, Schema } from "mongoose";

const carSchema = new Schema({
  model: { type: String, required: true },
  price: { type: Number, required: true },
  year: { type: Number, required: true },
  color: { type: String, required: true },
});

const Car = model("car", carSchema);

export default Car;
