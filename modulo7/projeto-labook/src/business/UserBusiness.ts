import {
  CustomError,
  InvalidEmail,
  InvalidName,
  InvalidPassword,
} from "../error/customError";
import { UserInputDTO } from "../model/user";
import { generateId } from "../services/generateId";
import { user } from "../types/User";
import { UserRepository } from "./UserRepository";
import { friendship } from "./../types/Friendship";
import { FriendshipInputDTO, FriendshipInputDeleteDTO } from "./../model/user";

export class UserBusiness {
  constructor(private userDatabase: UserRepository) {}

  public createUser = async (input: UserInputDTO) => {
    try {
      const { name, email, password } = input;

      if (!name || !email || !password) {
        throw new CustomError(
          400,
          'Campos "name", "email" e "password" são obrigatórios'
        );
      }

      if (name.length < 3) {
        throw new InvalidName();
      }

      if (!email.includes("@")) {
        throw new InvalidEmail();
      }
      if (password.length < 8) {
        throw new InvalidPassword();
      }
      const id: string = generateId();

      const user: user = {
        id,
        name,
        email,
        password,
      };

      await this.userDatabase.insertUser(user);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  public createFriendship = async (input: FriendshipInputDTO) => {
    try {
      const { user_id, friend_id } = input;
      if (!user_id || !friend_id) {
        throw new CustomError(400, "Campos obrigatórios inválidos");
      }
      const id_friendship: string = generateId();
      const friendship: friendship = {
        id_friendship,
        user_id,
        friend_id,
      };
      await this.userDatabase.insertFriendship(friendship);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  public deleteFriendship = async (input: FriendshipInputDeleteDTO) => {
    try {
      const { friend_id } = input;
      if (!friend_id) {
        throw new CustomError(400, "Campos obrigatórios inválidos");
      }
      await this.userDatabase.deleteFriendship(friend_id);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  public getFeed = async (): Promise<any> => {
    try {
      return await this.userDatabase.getFeed();
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
}
