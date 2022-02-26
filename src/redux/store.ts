import { reportError } from "./middlewares/reportError";
import { logActions } from "./middlewares/logActions";
import { applyMiddleware, createStore } from "redux";
import pokemonReducer from "./reducers/pokemonsReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import pokemonSaga from "./saga/pokemonSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  pokemonReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware, logActions, reportError))
);

sagaMiddleware.run(pokemonSaga);
