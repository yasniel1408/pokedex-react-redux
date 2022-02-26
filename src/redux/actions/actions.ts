import { CLEAR_ERROR, SET_ERROR, SET_POKEMONS } from "./types";

export const setPokemons = (payload: any) => ({
  type: SET_POKEMONS,
  payload,
});

export const setError = (payload: any) => ({
  type: SET_ERROR,
  payload,
});

export const clearError = () => ({
  type: CLEAR_ERROR,
});
