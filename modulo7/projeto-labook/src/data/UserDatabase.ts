import { user } from "../types/User";
import { BaseDatabase } from "./BaseDatabase";
import { friendship } from "./../types/Friendship";

export class UserDatabase extends BaseDatabase {
  public insertUser = async (user: user) => {
    try {
      await UserDatabase.connection
        .insert({
          id: user.id,
          name: user.name,
          email: user.email,
          password: user.password,
        })
        .into("labook_users");
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  public insertFriendship = async (friendship: friendship) => {
    try {
      await UserDatabase.connection
        .insert({
          id_friendship: friendship.id_friendship,
          user_id: friendship.user_id,
          friend_id: friendship.friend_id,
        })
        .into("labook_friends");
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  public deleteFriendship = async (friend_id: string) => {
    try {
      await UserDatabase.connection("labook_friends")
        .where("friend_id", "=", friend_id)
        .del();
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  public getFeed = async (): Promise<any> => {
    try {
      return await UserDatabase.connection.raw(`
			SELECT post.id,post.photo,post.description,post.type,post.created_at,post.author_id 
			FROM labook_posts as post inner join labook_friends friendship 
			ON post.author_id=friendship.friend_id
			`);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
}
