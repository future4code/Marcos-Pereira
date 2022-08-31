import { Request, Response } from "express";
import { ProdutosBusiness } from "../business/ProdutosBusiness";
import { ProdutosDatabase } from "../data/ProdutosDatabase";
import { produto, produtoInputDTO } from "../model/produto";
import { InvalidData, Invalidnumber, InvalidText } from "../error/customError";

export class ProdutosController {
  public adicionarProduto = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      if (
        !req.body.nome ||
        !req.body.marca ||
        !req.body.preco_compra ||
        !req.body.icms ||
        !req.body.lucro
      ) {
        throw new InvalidData();
      }

      if (typeof req.body.nome !== "string") {
        throw new InvalidText();
      }
      if (typeof req.body.marca !== "string") {
        throw new InvalidText();
      }
      if (typeof req.body.preco_compra !== "number") {
        throw new Invalidnumber();
      }
      if (typeof req.body.icms !== "number") {
        throw new Invalidnumber();
      }
      if (typeof req.body.lucro !== "number") {
        throw new Invalidnumber();
      }

      const { nome, marca, preco_compra, icms, lucro, preco_venda } = req.body;

      const input: produtoInputDTO = {
        nome,
        marca,
        preco_compra,
        icms,
        lucro,
        preco_venda,
      };

      const produtoBusiness = new ProdutosBusiness();
      produtoBusiness.adicionarProduto(input);

      res.status(201).send({
        message:
          "Produto adicionado com sucesso!",
      });
    } catch (error: any) {
      res.status(400).send(error.sqlMessage || error.message);
    }
  };
  public ListarTodosProdutos = async (req: Request, res: Response) => {
    try {
      const input: any = {
        id: req.params.id,
      };

      const produtos = await new ProdutosDatabase().ListarTodosProdutos(
        input,
        input
      );

      res.send(produtos).status(200);
    } catch (error: any) {
      res
        .send({ message: error.message })
        .status(error.sqlMessage || error.message);
    }
  };

  public PesquisaProdutos = async (req: Request, res: Response) => {
    try {
      const input: any = {
        id: req.params.id,
        search: req.query.search,
        g: req.query.g,
        sort: req.query.sort as string,
        order: req.query.order as string,
        page: Number(req.query.page),
        size: Number(req.query.size),
      };

      let offset = input.size * (input.page - 1);
      input.offset = offset;

      if (!input.resultado) {
        input.resultado = "%";
      }

      if (input.sort !== "nome") {
        input.sort = "nome";
      }

      if (
        !input.order ||
        (input.order.toUpperCase() !== "ASC" &&
          input.order.toUpperCase() !== "DESC")
      ) {
        input.order = "ASC";
      }

      if (isNaN(input.page) || input.page < 1) {
        input.page = 1;
      }

      if (isNaN(input.size) || input.size < 1) {
        input.size = 10;
      }

      const produtos = await new ProdutosDatabase().PesquisaProdutos(
        input,
        input
      );

      res.send(produtos).status(200);
    } catch (error: any) {
      res
        .send({ message: error.message })
        .status(error.sqlMessage || error.message);
    }
  };
}
