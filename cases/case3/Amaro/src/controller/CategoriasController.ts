import { Request, Response } from "express";
import { CategoriaBusiness } from "../business/CategoriasBusiness";
import { CategoriaDatabase } from "../data/CategoriasDatabase";
import { categoria, categoriaInputDTO } from "../model/categoria";
import { InvalidData, InvalidTAG, InvalidID } from "../error/customError";

export class CategoriaController {
  public adicionarCategoria = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      if (!req.body.TAG || !req.body.produto_id) {
        throw new InvalidData();
      }

      if (typeof req.body.TAG !== "string") {
        throw new InvalidTAG();
      }
      if (typeof req.body.produto_id !== "string") {
        throw new InvalidID();
      }

      const { TAG, produto_id } = req.body;

      const input: categoriaInputDTO = { TAG, produto_id };

      const categoriaBusiness = new CategoriaBusiness();
      categoriaBusiness.adicionarCategoria(input);

      res.status(201).send({ message: "Categoria adicionada com sucesso!" });
    } catch (error: any) {
      res.status(400).send(error.sqlMessage || error.message);
    }
  };

  public TodasCategorias = async (req: Request, res: Response) => {
    try {
      const input: any = {
        id: req.params.id,
        search: req.query.search,
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

      if (input.sort !== "tag") {
        input.sort = "tag";
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

      const result = await new CategoriaDatabase().TodasCategorias(
        input,
        input
      );

      res.send(result).status(200);
    } catch (error: any) {
      res
        .send({ message: error.message })
        .status(error.sqlMessage || error.message);
    }
  };
}
