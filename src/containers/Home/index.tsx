import Searcher from "../../components/Searcher";
import PokemonList from "../../components/PokemonList";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import getPokemons from "../../api/getPokemons";
import { setPokemons } from "../../redux/actions/actions";

function Home() {
  const dispatch = useDispatch();
  const pokemons = useSelector(({ pokemons }: { pokemons: [] }) => pokemons);

  useEffect(() => {
    const loadPokemons = async () => {
      let result = await getPokemons();
      dispatch(setPokemons(result.data.results));
    };
    loadPokemons();
  }, [dispatch]);

  return (
    <div className="Home">
      <Searcher />
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default Home;
