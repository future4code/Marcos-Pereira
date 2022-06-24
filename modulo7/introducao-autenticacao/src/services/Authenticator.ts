import * as jwt from "jsonwebtoken";
import { AuthenticationData } from "../model/auth";

export class Authenticator {
  generateToken = (input: AuthenticationData): string => {
    const token = jwt.sign(
      {
        id: input.id,
      },
      process.env.JWT_KEY as string,
      {
        expiresIn: "1min",
      }
    );
    return token;
  };
}
