import Searcher from "../../components/Searcher";
import PokemonList from "../../components/PokemonList";
import "./styles.css";
import { useEffect } from "react";
import { getPokemonsWithDetails } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemonsWithDetails());
  }, [dispatch]);

  return (
    <div className="Home">
      <Searcher />
      <PokemonList />
    </div>
  );
}

export default Home;
