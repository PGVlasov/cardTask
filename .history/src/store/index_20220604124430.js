import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { cardsReducer, recieptsReducer } from "./reducers";

const rootReducer = combineReducers({
  cards: cardsReducer,
  checks: recieptsReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
