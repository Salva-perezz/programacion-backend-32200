import Response from "../lib/response.lib.js";
import { bookService } from "../services/index.js";
import validationHelper from "../validations/validationHelper.js";

const createBook = async (req, res, next) => {
  try {
    validationHelper(req);
    const response = await bookService.createBook(req.body);

    res.json(new Response(response, "Success"));
  } catch (err) {
    next(err);
  }
};

const updateBook = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await bookService.updateBook(req.body, id);

    res.json(new Response(response, "Success"));
  } catch (err) {
    next(err);
  }
};

const deleteBook = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await bookService.deleteBook(id);

    res.json(new Response(response, "Success"));
  } catch (err) {
    next(err);
  }
};

const findAllBooks = async (req, res, next) => {
  try {
    const response = await bookService.findAllBooks();

    res.json(new Response(response, "Success"));
  } catch (err) {
    next(err);
  }
};

const findBookById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await bookService.findBookById(id);

    res.json(new Response(response, "Success"));
  } catch (err) {
    next(err);
  }
};

export const bookController = {
  createBook,
  updateBook,
  deleteBook,
  findAllBooks,
  findBookById,
};
