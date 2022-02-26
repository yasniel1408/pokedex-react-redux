import {
  CLEAR_ERROR,
  SET_ERROR,
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
    default:
      return state;
  }
};

export default pokemonReducer;
