import {
  CLEAR_ERROR,
  SET_ERROR,
  SET_FAVORITE,
  SET_POKEMONS,
  TOGGLE_LOADER,
} from "./../actions/types";
const initialState = {
  pokemons: [],
  error: "",
  loading: false,
};

const pokemonReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_POKEMONS:
      return { ...state, pokemons: action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload.message };
    case CLEAR_ERROR:
      return { ...state, error: "" };
    case TOGGLE_LOADER:
      return { ...state, loading: !state.loading };
    case SET_FAVORITE:
      const newArrPokes: any[] = state.pokemons;
      const index = newArrPokes.findIndex(({ id }) => id === action.payload);
      if (index >= 0) {
        newArrPokes[index].favorite = !newArrPokes[index].favorite;
      }
      return { ...state, pokemons: newArrPokes };
    default:
      return state;
  }
};

export default pokemonReducer;
