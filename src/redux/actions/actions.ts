import {
  CLEAR_ERROR,
  GET_POKEMONS_WITH_DETAILS,
  SET_ERROR,
  SET_FAVORITE,
  SET_POKEMONS,
  TOGGLE_LOADER,
} from "./types";

export const setPokemons = (payload: any) => ({
  type: SET_POKEMONS,
  payload,
});

export const setError = (payload: any) => ({
  type: SET_ERROR,
  payload,
});

export const setFavorite = (payload: any) => ({
  type: SET_FAVORITE,
  payload,
});

export const clearError = () => ({
  type: CLEAR_ERROR,
});

export const toggleLoader = () => ({
  type: TOGGLE_LOADER,
});

export const fetchPokemonDetails = () => ({
  type: GET_POKEMONS_WITH_DETAILS,
});
