import { User, UserAction } from "../../types/types";

const initialState: User = {};

export const userReducer = (state = initialState, action: UserAction) => {
  switch (action.type) {
    case "SAVE_USER":
      return {
        ...state,
        ...action.payload,
      };
    case "UPDATE_USER":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
