import Book from "../models/book.model.js";

const getBooks = async (ctx) => {
  try {
    const books = await Book.find();

    ctx.body = {
      data: books,
    };
  } catch (err) {
    console.log(err);

    ctx.response.status = 500;
    ctx.body = {
      data: "Error getting books",
    };
  }
};

const getBookById = async (ctx) => {
  try {
    const { id } = ctx.params;
    const book = await Book.findById(id);

    ctx.body = {
      data: book,
    };
  } catch (err) {
    console.log(err);

    ctx.response.status = 500;
    ctx.body = {
      data: "Error getting book",
    };
  }
};

const createBook = async (ctx) => {
  try {
    const { name, author } = ctx.request.body;
    const createdBook = await Book.create({ name, author });

    ctx.response.status = 201;
    ctx.body = {
      data: createdBook,
    };
  } catch (err) {
    console.log(err);

    ctx.response.status = 500;
    ctx.body = {
      data: "Error creating book",
    };
  }
};

const updateBook = async (ctx) => {
  try {
    const { name, author } = ctx.request.body;
    const { id } = ctx.params;
    const updatedBook = await Book.updateOne({ _id: id }, { name, author });

    ctx.response.status = 201;
    ctx.body = {
      data: updatedBook,
    };
  } catch (err) {
    console.log(err);

    ctx.response.status = 500;
    ctx.body = {
      data: "Error updating book",
    };
  }
};

const deleteBook = async (ctx) => {
  try {
    const { id } = ctx.params;
    const deletedBook = await Book.deleteOne({ _id: id });

    ctx.response.status = 200;
    ctx.body = {
      data: deletedBook,
    };
  } catch (err) {
    console.log(err);

    ctx.response.status = 500;
    ctx.body = {
      data: "Error deleting book",
    };
  }
};

export default {
  getBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
};
