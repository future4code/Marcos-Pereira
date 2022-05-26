import { UserDatabase } from "../data/UserDatabase";
import { v4 as generateId } from "uuid";

export class UserBusiness {
  select: any;
  get() {
      throw new Error("Method not implemented.");
  }
  public createUser = async (input: any) => {
    try {
      const { name, email, password } = input;
      if (!name || !email || !password) {
        throw new Error("Please fill all the fields");
      }

      if (email.indexOf("@") === -1) {
        throw new Error("Invalid Email");
      }

      if (password.length < 6) {
        throw new Error("Password must have at least 6 characters");
      }

      const id = generateId();

      await new UserDatabase().createUser(id, email, name, password);
    } catch (error: any) {
      throw new Error(
        error.message ||
          "Error creating user. Please check your system administrator."
      );
    }
  };
}
