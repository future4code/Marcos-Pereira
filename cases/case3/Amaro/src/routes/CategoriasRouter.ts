import express from "express";
import { CategoriaController } from "../controller/CategoriasController";

export const categoriaRouter = express.Router();
const categoriaController = new CategoriaController();

categoriaRouter.post("/tag", categoriaController.adicionarCategoria);
categoriaRouter.get("/tag", categoriaController.TodasCategorias);
