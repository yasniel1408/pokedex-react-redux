import { FC } from "react";
import { useSelector } from "react-redux";
import { Grid } from "semantic-ui-react";
import PokemonCard from "./PokemonCard";
import "./styles.css";

const PokemonList: FC<{}> = () => {
  const pokemons = useSelector(
    ({ pokemonReducer }: any) => pokemonReducer.pokemons
  );

  return (
    <div className="wrapper">
      <Grid>
        {pokemons.map((pokemon: any) => (
          <PokemonCard {...pokemon} key={pokemon.id} />
        ))}
      </Grid>
    </div>
  );
};

export default PokemonList;
