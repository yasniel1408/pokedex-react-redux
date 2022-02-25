import axiosInstance, { API } from "./conf";

const getPokemons = (limit = 151) => {
  const getPokeApi = axiosInstance.get(`${API}pokemon?limit=${limit}`);
  return getPokeApi;
};

export default getPokemons;
