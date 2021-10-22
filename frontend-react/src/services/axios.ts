import realAxios from "axios";
import store from "../store";

export const getAxios = () => {
  realAxios.defaults.headers = {
    Authorization: store.getState().auth.token ?? "",
  };

  return realAxios;
};
