import Searcher from "../../components/Searcher";
import PokemonList from "../../components/PokemonList";
import "./styles.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonDetails } from "../../redux/actions/actions";
import Loader from "../../components/Loader";

function Home() {
  const dispatch = useDispatch();
  const loading = useSelector((state: any) => state.loading);

  useEffect(() => {
    dispatch(fetchPokemonDetails());
  }, [dispatch]);

  return (
    <div className="Home">
      <Searcher />
      {loading && <Loader />}
      <PokemonList />
    </div>
  );
}

export default Home;
