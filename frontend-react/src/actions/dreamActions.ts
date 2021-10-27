import { dreamApi, DreamData } from "../services/api/dreamApi";
import store from "../store";

export const createDream = async (data: DreamData) => {
  const response = await dreamApi.createNewDream(data);

  store.dispatch({
    type: "ADD_DREAM",
    payload: response,
  });
};
