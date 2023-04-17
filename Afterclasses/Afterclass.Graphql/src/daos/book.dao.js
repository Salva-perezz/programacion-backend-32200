import { Book } from "../models/index.js";

const createBook = async (createBookRequest) => {
  try {
    const createdBook = await Book.create(createBookRequest);

    return createdBook;
  } catch (err) {
    console.log(err);
  }
};

const updateBook = async (id, updateBookRequest) => {
  try {
    const updatedBook = await Book.updateOne({ _id: id }, updateBookRequest);

    return updatedBook;
  } catch (err) {
    console.log(err);
  }
};

const deleteBook = async (id) => {
  try {
    const deletedBook = await Book.deleteOne({ _id: id });

    return deletedBook;
  } catch (err) {
    console.log(err);
  }
};

const findAllBooks = async () => {
  try {
    const books = await Book.find();

    return books;
  } catch (err) {
    console.log(err);
  }
};

const findBookById = async (id) => {
  try {
    const book = await Book.findById(id);

    return book;
  } catch (err) {
    console.log(err);
  }
};

const findBookByFilter = async (filters) => {
  try {
    const book = await Book.findOne(filters);

    return book;
  } catch (err) {
    console.log(err);
  }
};

export const bookDao = {
  createBook,
  updateBook,
  deleteBook,
  findAllBooks,
  findBookById,
  findBookByFilter,
};
