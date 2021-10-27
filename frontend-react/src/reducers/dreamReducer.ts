import { DreamData } from "../services/api/dreamApi";

export interface AddDreamAction {
  type: "ADD_DREAM";
  payload: DreamData[];
}

export type DreamAction = AddDreamAction;

const initialState: { dreams: DreamData[] } = {
  dreams: [],
};

export const dreamReducer = (state = initialState, action: DreamAction) => {
  switch (action.type) {
    case "ADD_DREAM":
      return {
        ...state,
        dreams: action.payload,
      };
    default:
      return state;
  }
};
