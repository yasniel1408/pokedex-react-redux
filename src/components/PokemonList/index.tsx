import { FC } from "react";
import { useSelector } from "react-redux";
import { Grid } from "semantic-ui-react";
import PokemonCard from "./PokemonCard";
import "./styles.css";

const PokemonList: FC<{}> = () => {
  const pokemons = useSelector(({ pokemons }: { pokemons: [] }) => pokemons);
  return (
    <div className="wrapper">
      <Grid>
        {pokemons.map((pokemon: any, index: number) => {
          return <PokemonCard {...pokemon} key={`pokemon-${index}`} />;
        })}
      </Grid>
    </div>
  );
};

export default PokemonList;
