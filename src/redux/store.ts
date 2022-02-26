import { reportError } from "./middlewares/reportError";
import { logActions } from "./middlewares/logActions";
import { applyMiddleware, createStore } from "redux";
import pokemonReducer from "./reducers/pokemonsReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

export const store = createStore(
  pokemonReducer,
  composeWithDevTools(applyMiddleware(thunk, logActions, reportError))
);
