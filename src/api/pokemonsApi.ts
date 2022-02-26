import axiosInstance, { API } from "./conf";

const getPokemons = (limit = 151) => {
  const getPokeApi = axiosInstance.get(`${API}pokemon?limit=${limit}`);
  return getPokeApi;
};

export const getPokemonsWithDetailsAPI = () => async (dispatch: any) => {
  let {
    data: { results },
  } = await getPokemons();

  const data = await Promise.all(
    results.map((pokemon: any) => axiosInstance.get(pokemon.url))
  );
  console.log(data);
  return data;
};
