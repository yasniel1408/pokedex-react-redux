import { reportError } from "./middlewares/reportError";
import { logActions } from "./middlewares/logActions";
import { applyMiddleware, createStore } from "redux";
import rootReducers from "./slices/rootReducers";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import pokemonSaga from "./saga/pokemonSaga";
import thunk from "redux-thunk";

// const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducers,
  // composeWithDevTools(applyMiddleware(thunk, logActions, reportError))
  // composeWithDevTools(applyMiddleware(sagaMiddleware, logActions, reportError))
  composeWithDevTools(applyMiddleware(thunk, logActions, reportError)) //con toolkit
);

// sagaMiddleware.run(pokemonSaga);
