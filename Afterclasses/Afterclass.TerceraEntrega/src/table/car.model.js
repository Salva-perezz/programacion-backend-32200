import { model, Schema } from "mongoose";

const cartSchema = Schema({
  products: { type: Schema.Types.Array },
  username: { type: String },
});

export const Carts = model("cart", cartSchema);
