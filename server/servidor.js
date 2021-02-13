//importar modulos
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import Rutas from "../routes/rutas.usuarios.js";
//servidor con clases
class Servidor {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    //middlewares
    this.app.use(cors());
    this.mongooseMetodo();
    this.middlewares();

    //aplicacion de rutas
    this.routers();
  };
   async mongooseMetodo() {
    
    await mongoose.connect("mongodb://localhost/reservas", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
  }

  middlewares() {
    //cors

    //parseo y lectura de body
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());

    //directorio publico
    this.app.use(express.static("public"));
  }

  routers() {
    this.app.use("/api/usuarios", Rutas());
  }
  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor conectado en el puerto ${this.port}`);
    });
  }
}

export default Servidor;
