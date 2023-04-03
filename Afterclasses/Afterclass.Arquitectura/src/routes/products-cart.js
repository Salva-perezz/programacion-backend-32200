import { Router } from 'express';
import { authController } from "../controllers/index.js";
import compression from 'compression';
import { cartController } from '../controllers/cart.controller.js';

const router = Router()

router.route('/login/adminproductos')
    .get(authController.getLoginAdmin)

router.route('/login/productos')
    .get(cartController.findCartByFilter)

router.route('/api/productos-test')
    .get(authController.fakerProducts)

router.route("/cart/:productId")
    .post(cartController.updateCart);

router.route("/cart/finish/:cartId")
    .post(cartController.finish)

router.get("/info", compression(), authController.info)

router.get("/info-uncomp", authController.info)

router.get("/api/random", authController.getRandom)

export const productsCartRouter = router;