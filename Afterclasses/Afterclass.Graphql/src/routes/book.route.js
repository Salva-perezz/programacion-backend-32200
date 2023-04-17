import { Router } from "express";
import { bookController } from "../controllers/index.js";
import { bookValidations } from "../validations/book.validations.js";

const router = Router();

router
  .route("/")
  .get(bookController.findAllBooks)
  .post(bookValidations.createBookValidations, bookController.createBook);

router
  .route("/:id")
  .get(bookController.findBookById)
  .delete(bookController.deleteBook)
  .patch(bookController.updateBook);

export const bookRouter = router;

/*

RECURSO COMO ESTA EN LA BD

{
    title: "Pepe",
    price: 120,
    author: "salva"
}

-----------------------------

MODIFICANDO CON PATCH

{
    price: 200
}

-----------------------------

MODIFICANDO CON PUT

{
    title: "Pepe",
    price: 200,
    author: "salva"
}
*/
