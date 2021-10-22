import { User } from "../../../types/types";
import { axios } from "../axios";

export interface UserResponse {
  user: User;
}

export interface UserData {
  username: string;
  password?: string;
  email?: string;
}

export const usersApi = {
  async getUser(): Promise<UserResponse> {
    const res = await axios.get("users");

    return res.data as UserResponse;
  },

  async updateUser(data: UserData): Promise<UserResponse> {
    const res = await axios.put("users", data);

    return res.data as unknown as UserResponse;
  },
};
