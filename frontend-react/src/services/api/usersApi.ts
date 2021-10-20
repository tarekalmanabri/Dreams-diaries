import { axios } from "../axios";

export interface UserResponse {}

export const usersApi = {
  async getUser(): Promise<UserResponse> {
    const res = await axios.get("users");

    return res.data as UserResponse;
  },
};
