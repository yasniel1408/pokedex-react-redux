import Searcher from "../../components/Searcher";
import PokemonList from "../../components/PokemonList";
import "./styles.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import { fetchPokemons } from "../../redux/slices/pokemon";

function Home() {
  const dispatch = useDispatch();
  const loading = useSelector(
    ({ pokemonReducer }: any) => pokemonReducer.loading
  );

  useEffect(() => {
    // dispatch(fetchPokemonDetails()); esto es con redux saga
    dispatch(fetchPokemons());
  }, [dispatch]);

  return (
    <div className="Home">
      {/* <Searcher /> */}
      {loading && <Loader />}
      <PokemonList />
    </div>
  );
}

export default Home;
