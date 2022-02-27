import axiosInstance, { API } from "./conf";

const getPokemons = (limit = 10) => {
  const getPokeApi = axiosInstance.get(`${API}pokemon?limit=${limit}`);
  return getPokeApi;
};

export const getPokemonsWithDetailsAPI = async (): Promise<any[]> => {
  let {
    data: { results },
  } = await getPokemons();

  const result = await Promise.all(
    results.map((pokemon: any) => axiosInstance.get(pokemon.url))
  );
  return result.map((pokemon: any) => pokemon.data);
};
