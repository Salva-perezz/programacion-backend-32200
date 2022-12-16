import { Router } from 'express';
import Contenedor from "../api.js";

const router = Router()

const api = new Contenedor('./src/productos.txt')

router.get('/', async (req, res) => {
    res.render('form', { items: await api.getAll() })
})

export default router;