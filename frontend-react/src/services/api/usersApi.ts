import { User } from "../../../types/types";
import store from "../../store";
import { getAxios } from "../axios";

export interface UserData {
  username: string;
  password?: string;
  email?: string;
}

export const usersApi = {
  async getUser(): Promise<User | null> {
    let res = await getAxios().get("users");

    return res.data;
  },

  async updateUser(data: UserData): Promise<User> {
    const res = await getAxios().put("users/update", {
      ...data,
      uuid: store.getState().user.uuid,
    });

    return res.data as User;
  },
};
