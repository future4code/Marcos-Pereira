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
export class InvalidEmail extends CustomError {
  constructor() {
    super(400, "Email em formato inválido");
  }
}
export class InvalidPassword extends CustomError {
  constructor() {
    super(400, "Senha inválida");
  }
}
export class UserNotFoud extends CustomError {
  constructor() {
    super(400, "Email ou senha inválidos");
  }
}
export class InvalidName extends CustomError {
  constructor() {
    super(400, "Nome inválido");
  }
}
export class Invalidnumber extends CustomError {
  constructor() {
    super(400, "Informe um valor numérico");
  }
}
export class InvalidText extends CustomError {
  constructor() {
    super(400, "O campo de conter apenas texto");
  }
}
export class InvalidID extends CustomError {
  constructor() {
    super(400, "Informe um ID válido");
  }
}
export class InvalidTAG extends CustomError {
  constructor() {
    super(400, "Insira uma categoria válida");
  }
}
export class InvalidData extends CustomError {
  constructor() {
    super(400, "Preencha os campos corretamente");
  }
}
