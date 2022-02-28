import { combineReducers } from "redux";
import pokemonReducer from "./pokemon";

const rootReducer = combineReducers({
  pokemonReducer,
});

export default rootReducer;
