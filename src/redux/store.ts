import { logActions } from "./middlewares/index";
import { applyMiddleware, createStore } from "redux";
import pokemonReducer from "./reducers/pokemonsReducer";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(
  pokemonReducer,
  composeWithDevTools(applyMiddleware(logActions))
);
