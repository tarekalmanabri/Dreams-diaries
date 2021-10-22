import axios from "axios";
import { User } from "../../types/types";
import { UserData, usersApi } from "../services/api/usersApi";
import store from "../store";

export const getUser = async () => {
  const { token } = store.getState().auth;

  if (!token) {
    console.error("No token!");
    return;
  }

  const data: { data: User } = await axios.get("/users", {
    headers: {
      authorization: token,
    },
  });

  store.dispatch({ type: "SAVE_USER", payload: data.data });
};

export const updateUserProfile = async (data: UserData) => {
  const response = await usersApi.updateUser(data);
  store.dispatch({
    type: "UPDATE_USER",
    payload: response.user,
  });
};
