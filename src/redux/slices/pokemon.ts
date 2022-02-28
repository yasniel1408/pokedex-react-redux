import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPokemonsWithDetailsAPI } from "../../api/pokemonsApi";

const initialState = {
  pokemons: [],
  error: "",
  loading: false,
};

export const fetchPokemons = createAsyncThunk(
  "pokemon/fetchPokemons",
  async (_, { dispatch }) => {
    try {
      dispatch(toggleLoading());
      const pokemonsWithDetails = await getPokemonsWithDetailsAPI();
      dispatch(setPokemons(pokemonsWithDetails));
      dispatch(toggleLoading());
    } catch (err) {
      dispatch(setError({ error: err, message: "Error fetching pokemons" }));
      dispatch(toggleLoading());
    }
  }
);

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
    },
    setFavorite: (state, action) => {
      const newArrPokes: any[] = state.pokemons;
      const index = newArrPokes.findIndex(
        ({ id }: { id: number }) => id === action.payload
      );
      if (index >= 0) {
        newArrPokes[index].favorite = !newArrPokes[index].favorite;
      }
    },
    setError: (state, action) => {
      state.error = action.payload.message;
    },
    clearError: (state) => {
      state.error = "";
    },
    toggleLoading: (state) => {
      state.loading = !state.loading;
    },
  },
});

export const { setPokemons, setFavorite, setError, clearError, toggleLoading } =
  pokemonSlice.actions;

export default pokemonSlice.reducer;
