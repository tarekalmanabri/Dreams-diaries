import { UserAction, UserState } from "../../types/types";

const initialState: UserState = {};

export const userReducer = (state = initialState, action: UserAction) => {
  switch (action.type) {
    case "SAVE_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "UPDATE_USER":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
