import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { cardsReducer, recieptReducer } from "./reducers";

const rootReducer = combineReducers({
  cards: cardsReducer,
  checks: recieptReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
