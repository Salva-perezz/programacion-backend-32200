import { Router } from 'express';
import { registerLoginRouter } from './register-login.js';
import { productsCartRouter } from './products-cart.js';

const router = Router()

router.use(registerLoginRouter);
router.use(productsCartRouter);

export default router;