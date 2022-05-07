import { Request, Response } from "express";
import connection from "../data/connection";
import { v4 as generateId } from "uuid";

export async function createUser(req: Request, res: Response): Promise<void> {
  try {
    const { name, email, password } = req.body;
    if (!name) {
      throw new Error("É necessário informar o nome");
    }
    if (!email || email.length < 10) {
      throw new Error("O e-mail deve conter pelo menos 10 caracteres");
    }
    if (!email.includes("@")) {
      throw new Error("Um e-mail válido deve conter @");
    }
    if (!password || password.length < 8) {
      throw new Error("A senha deve conter no mínimo 8 caracteres");
    }

    const [checkEmail] = await connection("labecommerce_users")
      .select("email")
      .where({ email: email });

    if (checkEmail) {
      throw new Error("E-mail já cadastrado");
    }

    await connection("labecommerce_users").insert({
      id: generateId(),
      name,
      email,
      password,
    });

    res.status(201).send("Usuário criado com sucesso");
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}

// ver aula de filtros e ordenação para popular a tabela