import { UserData, usersApi } from "../services/api/usersApi";
import store from "../store";

export const getUser = async () => {
  const { token } = store.getState().auth;

  if (!token) {
    console.error("No token!");
    return;
  }

  const data = await usersApi.getUser();

  if (data) {
    store.dispatch({ type: "SAVE_USER", payload: data });
  }
};

export const updateUserProfile = async (data: UserData) => {
  const response = await usersApi.updateUser(data);
  store.dispatch({
    type: "UPDATE_USER",
    payload: response,
  });
};
