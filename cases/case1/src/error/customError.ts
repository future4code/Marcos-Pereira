export abstract class BaseError extends Error {
  constructor(message: string, public code: number) {
    super(message);
  }
}

export class CustomError extends Error {
  constructor(statusCode: number, message: string) {
    super(message);
  }
}

export class InvalidPet extends CustomError {
  constructor() {
    super(400, "A quantidade deve ser maior que zero");
  }
}
export class InvalidTime extends CustomError {
  constructor() {
    super(400, "São permitidos apenas passeios de 30 minutos ou 1 hora");
  }
}

export class InvalidData extends CustomError {
  constructor() {
    super(
      400,
      "Todos os campos são de preenchimento obrigatório!"
    );
  }
}
