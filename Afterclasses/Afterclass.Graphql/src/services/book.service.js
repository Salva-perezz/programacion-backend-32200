import { bookDao } from "../daos/index.js";

const createBook = async (createBookRequest) => {
  try {
    const { title } = createBookRequest;
    const existingBook = await bookDao.findBookByFilter({ title });

    if (existingBook) {
      throw {
        message: "The book you want to create already exists",
        status: 400,
      };
    }

    const createdBook = await bookDao.createBook(createBookRequest);

    return createdBook;
  } catch (err) {
    console.log(err);

    throw err;
  }
};

const updateBook = async (updateBookRequest, id) => {
  try {
    const existingBook = await bookDao.findBookById(id);

    if (!existingBook) {
      throw {
        message: "The book you want to update does not exist",
        status: 400,
      };
    }

    const updatedBook = await bookDao.updateBook(id, updateBookRequest);

    return updatedBook;
  } catch (err) {
    console.log(err);

    throw err;
  }
};

const deleteBook = async (id) => {
  try {
    const existingBook = bookDao.findBookById(id);

    if (!existingBook) {
      throw {
        message: "The book you want to delete does not exist",
        status: 400,
      };
    }

    const deletedBook = await bookDao.deleteBook(id);

    return deletedBook;
  } catch (err) {
    console.log(err);

    throw err;
  }
};

const findAllBooks = async () => {
  try {
    const books = await bookDao.findAllBooks();

    return books;
  } catch (err) {
    console.log(err);

    throw err;
  }
};

const findBookById = async (id) => {
  try {
    const book = await bookDao.findBookById(id);

    if (!book) {
      throw {
        message: "The book you want to create already exists",
        status: 404,
      };
    }

    return book;
  } catch (err) {
    console.log(err);

    throw err;
  }
};

export const bookService = {
  createBook,
  updateBook,
  deleteBook,
  findAllBooks,
  findBookById,
};
