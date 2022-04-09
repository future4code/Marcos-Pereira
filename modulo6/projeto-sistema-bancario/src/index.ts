import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { Conta, Extrato, usuarios } from "./data";
import { send } from "process";

const app = express();

app.use(express.json());
app.use(cors());

app.post("/users", (req: Request, res: Response) => {
  try {
    const { nome, CPF, nascimento, saldo }: Conta = req.body;

    if (!nome || !CPF || !nascimento) {
      throw new Error("Um ou mais campos são inválidos.");
    }

    if (isNaN(CPF)) {
      throw new Error("O campo 'CPF' deve conter apenas números");
    }
    if (!nascimento) {
      throw new Error("A data de nascimento deve ser no formato: DIA/MÊS/ANO");
    }

    const novaConta = {
      nome,
      CPF,
      nascimento,
      saldo: 0,
    };

    usuarios.push(novaConta);
    res.send(usuarios);
  } catch (error: any) {
    switch (error.message) {
      case "Um ou mais campos são inválidos":
        res.status(422);
        break;
      case "O campo 'CPF' deve conter apenas números":
        res.status(422);
        break;
      case "A data de nascimento deve ser no formato: DIA/MÊS/ANO":
        res.status(422);
        break;
      default:
        res.status(500);
    }
    res.send(error.message);
  }
});

app.get("/users", (req: Request, res: Response) => {
  try {
    res.send(usuarios);
  } catch (error: any) {
    res.send(error.message || "Erro inesperado");
  }
});

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
