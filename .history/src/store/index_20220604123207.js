import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { cardsReducer, checkReducer } from "./reducers";

const rootReducer = combineReducers({
  cards: cardsReducer,
  checks: checkReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
