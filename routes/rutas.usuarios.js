import express from "express";
import {
  usuariosGET,
  usuariosPOST,
  usuariosPUT,
  usuariosDelete,
  usuariosPATCH,
} from "../controllers/controller.usuarios.js";
const rutas = express.Router();

const Rutas = () => {
  rutas.get("/", usuariosGET);

  rutas.post("/", usuariosPOST);
  rutas.put("/:id", usuariosPUT);
  rutas.delete("/:id", usuariosDelete);
  rutas.patch("/", usuariosPATCH);

  return rutas;
};

export default Rutas;
