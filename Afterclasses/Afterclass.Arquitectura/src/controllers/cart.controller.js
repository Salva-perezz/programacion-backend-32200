import ContenedorMongo from "../classes/ContenedorMongo.js";
import config from "../config/config.js";
import CartDaoFactory from "../daos/cartDaoFactory.js";
import logger from "../lib/logger.js";
import { Product } from "../models/product.model.js";
import sendMessage from "../services/twilio.js";

const productApi = new ContenedorMongo(Product);
const cartDao = CartDaoFactory.getDao(config.db);

const createCart = async (req, res, next) => {
  try {
    const response = await cartDao.create(req.body);

    return response;
  } catch (err) {
    next(err);
  }
};

const updateCart = async (req, res, next) => {
  try {
    const { productId } = req.params;
    const product = await productApi.getById(productId);
    const cart = await cartDao.getByFilter({
      username: req.session.passport.user.username,
    });

    cart.products.push(product);

    await cartDao.update(cart, cart._id);
    res.redirect("/login/productos");
  } catch (err) {
    logger.error({ error: err }, "Error adding product");

    res.sendStatus(500);
  }
};

const deleteCart = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await cartDao.delete(id);

    return response;
  } catch (err) {
    next(err);
  }
};

const findAllCarts = async (req, res, next) => {
  try {
    const response = await cartDao.getAll();

    return response;
  } catch (err) {
    next(err);
  }
};

const findCartById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await cartDao.getById(id);

    return response;
  } catch (err) {
    next(err);
  }
};

const findCartByFilter = async (req, res, next) => {
  try {
    const { user } = req.session.passport;
    const userCart = await cartDao.getByFilter({
      username: user.username,
    });
    if (!user) {
      return res.redirect("/login");
    }
    res.render("cart", { cart: userCart, user });
  } catch (err) {
    logger.error(err);
  }
};

const finish = async (req, res, next) => {
  try {
    sendMessage();
    res.sendStatus(200);
  } catch (err) {
    logger.error({ error: err }, "Error adding product");
    res.sendStatus(500);
  }
};

export const cartController = {
  createCart,
  updateCart,
  deleteCart,
  findAllCarts,
  findCartById,
  findCartByFilter,
  finish,
};
