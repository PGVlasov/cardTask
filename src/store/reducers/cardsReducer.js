import { LOAD_CARDS } from "../types";

const initialState = { allCards: [] };

export const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CARDS:
      return { ...state, allCards: action.payload };
    default:
      return state;
  }
};
