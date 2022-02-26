import { SET_ERROR } from "./../actions/types";
import { GET_POKEMONS_WITH_DETAILS } from "../actions/types";
import { setPokemons } from "../actions/actions";
import { call, put, takeEvery } from "redux-saga/effects";
import { getPokemonsWithDetailsAPI } from "../../api/pokemonsApi";

function* getPokemonsWithDetails() {
  try {
    const dataPokemonsWithDetails: [] = yield call(getPokemonsWithDetailsAPI);
    yield put(setPokemons(dataPokemonsWithDetails));
  } catch (error) {
    yield put({ type: SET_ERROR, payload: error });
  }
}

function* pokemonSaga() {
  yield takeEvery(GET_POKEMONS_WITH_DETAILS, getPokemonsWithDetails);
}

export default pokemonSaga;
