import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { cardsReducer } from "./reducers";

const rootReducer = combineReducers({
  cards: cardsReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
