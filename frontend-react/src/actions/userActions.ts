import axios from "axios";
import { User } from "../../types/types";
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
