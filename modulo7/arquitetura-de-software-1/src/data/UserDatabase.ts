import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  public async createUser(
    id: string,
    email: string,
    name: string,
    password: string
  ): Promise<void> {
    try {
      await BaseDatabase.connection()
        .insert({
          id,
          email,
          name,
          password,
        })
        .into("User_Arq");
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}
