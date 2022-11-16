import express, { Router } from "express";
import multer from "multer";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const router = Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "upload");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("upload"));

router.post("/uploadFile", upload.single("myFile"), (req, res, next) => {
  const file = req.file;

  if (!file) {
    const error = { message: "No subiste nada", statusCode: 400 };
    res.json(error);
  }

  res.json(file);
});

router.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.use("/", router);

app.listen(3000, () => {
  console.log("Servidor escuchando el puerto 3000");
});
