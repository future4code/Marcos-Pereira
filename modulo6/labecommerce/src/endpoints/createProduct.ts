import { Request, Response } from "express";
import connection from "../data/connection";
import { v4 as generateId } from "uuid";

export async function createProduct(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { name, price, image_url } = req.body;
    if (!name) {
      throw new Error("É necessário informar o nome do produto");
    }
    if (!price || price.length <= 0) {
      throw new Error("É necessário informar um valor maior que 0");
    }
    if (!image_url) {
      throw new Error("É necessário informar uma URL de imagem válida");
    }

    await connection("labecommerce_products").insert({
      id: generateId(),
      name,
      price,
      image_url,
    });

    res.status(201).send("Produto cadastrado com sucesso");
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}