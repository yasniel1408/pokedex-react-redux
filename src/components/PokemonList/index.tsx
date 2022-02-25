import React, { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import getPokemons from "../../api/getPokemons";
import PokemonCard from "./PokemonCard";
import "./styles.css";

const PokemonList = () => {
  const pokemons = Array(20).fill({});

  useEffect(() => {
    const loadPokemons = async () => {
      let result = await getPokemons();
      console.log(result.data.results);
    };
    loadPokemons();
  }, []);

  return (
    <div className="wrapper">
      <Grid>
        {pokemons.map((pokemon, index) => {
          return <PokemonCard key={`pokemon-${index}`} />;
        })}
      </Grid>
    </div>
  );
};

export default PokemonList;
