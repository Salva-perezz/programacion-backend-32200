import { Router } from "express";
import upload from "../libs/multer.js";

const router = Router();
const pets = [
  {
    id: 1,
    name: "Firulais",
    age: 2,
    breed: "Golden",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmui.today%2F__export%2F1602378684955%2Fsites%2Fmui%2Fimg%2F2020%2F10%2F10%2F58.jpg_693687776.jpg&f=1&nofb=1&ipt=5748c2e33eff91b05198e6a1e4030bd4d719cfe9a6205ac42dd5f2183ee67d41&ipo=images",
  },
  {
    id: 2,
    name: "Chocolate",
    age: 4,
    breed: "Mestizo",
    image:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimagenesnoticias.com%2Fwp-content%2Fuploads%2F2017%2F11%2FPerrosGraciosos45.jpg&f=1&nofb=1&ipt=331c9060a4ac587e697e513401159b258ccbd56cb359fdd19f0d629a55d6f1ed&ipo=images",
  },
  {
    id: 3,
    name: "Roco",
    age: 1,
    breed: "Doberman",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.doogweb.es%2Fwp-content%2Fuploads%2F2016%2F03%2FLabrador-retriever-1024x675.jpg&f=1&nofb=1&ipt=a10c408cb0cb83f4bdad8c78bd8c666b5331a71698a03a6edfd3f35196bad74e&ipo=images",
  },
];
const checkIfAdminMiddleware = (req, res, next) => {
  const userType = req.header("userType");

  if (userType === "ADMIN") {
    next();
  } else {
    res.status(401).json({
      status: "Unauthorized",
      data: null,
    });
  }
};

router
  .route("/")
  .get((req, res) => {
    const response = {
      status: "Ok",
      data: pets,
    };

    res.json(response);
  })
  .post(upload.single("petImage"), (req, res) => {
    const { name, age, breed } = req.body;
    const image = req.file;
    const newPetId = pets[pets.length - 1].id + 1;

    const newPet = {
      id: newPetId,
      name,
      age,
      breed,
      image: `http://localhost:3000/images/${image.originalname}`,
    };
    const response = {
      status: "Created",
      data: newPet,
    };

    pets.push(newPet);

    res.status(201).json(response);
  });

router
  .route("/:id")
  .put((req, res) => {
    const { id } = req.params;
    const { name, breed, age } = req.body;
    const indexPetToUpdate = pets.find((pet) => pet.id === Number(id));

    if (!indexPetToUpdate) {
      return res.status(404).json({ status: "Not found", data: null });
    }

    pets.splice(indexPetToUpdate, 1, { id, name, breed, age });

    res.status(200).json({
      status: "Updated",
      data: { id, name, breed, age },
    });
  })
  .delete(checkIfAdminMiddleware, (req, res) => {
    const { id } = req.params;
    const indexPetToUpdate = pets.findIndex((pet) => pet.id === Number(id));
    const petToDelete = pets[indexPetToUpdate];

    if (!petToDelete) {
      return res.status(404).json({ status: "Not found", data: null });
    }

    pets.splice(indexPetToUpdate, 1);

    res.status(200).json({
      status: "Deleted",
      data: petToDelete,
    });
  })
  .get((req, res) => {
    const { id } = req.params;
    const pet = pets.find((pet) => pet.id === Number(id));
    const response = pet
      ? { status: "Ok", data: pet }
      : { status: "Not found", data: null };
    const statusCode = pet ? 200 : 404;

    res.status(statusCode).json(response);
  });

export default router;
