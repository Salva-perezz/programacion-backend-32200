import { model, Schema } from "mongoose";

const bookSchema = new Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  author: { type: String, required: true },
});

const Book = model("book", bookSchema);

export default Book;
