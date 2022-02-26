import { CLEAR_ERROR, SET_ERROR, SET_POKEMONS } from "./../actions/types";
const initialState = {
  pokemons: [],
  error: "",
};

export const pokemonReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_POKEMONS:
      return { ...state, list: action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload.message };
    case CLEAR_ERROR:
      return { ...state, error: "" };
    default:
      return state;
  }
};
export default pokemonReducer;
