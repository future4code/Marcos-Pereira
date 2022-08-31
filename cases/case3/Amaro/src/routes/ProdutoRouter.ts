import express from "express";
import { ProdutosController } from "../controller/ProdutosController";

export const produtoRouter = express.Router();
const produtoController = new ProdutosController();

produtoRouter.post("/produto", produtoController.adicionarProduto);
produtoRouter.get("/produto/pesquisa", produtoController.PesquisaProdutos);
produtoRouter.get("/produto", produtoController.ListarTodosProdutos);
