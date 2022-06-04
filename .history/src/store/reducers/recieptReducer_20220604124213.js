import { LOAD_CHECKS } from "../types";

const initialState = { allChecks: [] };

export const recieptsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CHECKS:
      return { ...state, allCards: action.payload };
    default:
      return state;
  }
};
