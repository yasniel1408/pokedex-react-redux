import Searcher from "../../components/Searcher";
import PokemonList from "../../components/PokemonList";
import "./styles.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPokemonDetails } from "../../redux/actions/actions";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonDetails());
  }, [dispatch]);

  return (
    <div className="Home">
      <Searcher />
      <PokemonList />
    </div>
  );
}

export default Home;
