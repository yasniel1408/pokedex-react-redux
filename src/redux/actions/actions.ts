import axios from "axios";
import getPokemons from "../../api/getPokemons";
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

export const getPokemonsWithDetails = () => async (dispatch: any) => {
  try {
    let {
      data: { results },
    } = await getPokemons();

    dispatch(
      setPokemons(
        await Promise.all(results.map((pokemon: any) => axios.get(pokemon.url)))
      )
    );
  } catch (error) {
    dispatch(setError(error));
  }
};
