import { CustomError } from "../error/customError";
import { PostInputDTO } from "../model/post";
import { generateId } from "../services/generateId";
import { post } from "../types/Post";
import { PostRepository } from "./PostRepository";

export class PostBusiness {
  constructor(private postDatabase: PostRepository) {}

  public createPost = async (input: PostInputDTO) => {
    try {
      const { photo, description, type, created_at, author_id } = input;
      if (!photo || !description || !type || !created_at || !author_id) {
        throw new CustomError(400, "Campos obrigatórios inválidos");
      }
      const id: string = generateId();

      const post: post = {
        id,
        photo,
        description,
        type,
        created_at,
        author_id,
      };
      await this.postDatabase.insertPost(post);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  public getPostById = async (id: string): Promise<any> => {
    try {
      return await this.postDatabase.getPostById(id);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
}
