import { friendship } from "./../types/Friendship";
import { user } from "../types/User";
import { post } from "../types/Post";

export interface UserRepository {
  insertUser(user: user): Promise<void>;
  insertFriendship(friendship: friendship): Promise<void>;
  deleteFriendship(friend_id: string): Promise<void>;
  getFeed(): Promise<post[]>;
}
