import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Image, Label, Divider, Grid, Icon } from "semantic-ui-react";
import { setFavorite } from "../../redux/actions/actions";
import {
  DEFAULT_FAV_COLOR,
  FAV_COLOR,
  MAIN_COLOR,
} from "../../utils/constants";
import "./styles.css";

const PokemonCard: FC<{
  name: string;
  id: number;
  favorite: boolean;
  types: [];
  sprites: any;
}> = ({ name, id, sprites: { front_default }, types, favorite }) => {
  const dispatch = useDispatch();

  const handleFavorite = () => {
    dispatch(setFavorite(id));
  };

  const color = !!favorite ? FAV_COLOR : DEFAULT_FAV_COLOR;

  return (
    <Grid.Column mobile={16} tablet={8} computer={4}>
      <div className="PokemonCard">
        <button
          className="PokemonCard-favorite"
          onClick={() => handleFavorite()}
        >
          <Icon name="favorite" color={color} />
        </button>
        <Image centered src={front_default} size="small" />
        <h2 className="PokemonCard-title">{name}</h2>
        <Divider />
        {types?.map((type: any) => (
          <Label key={type.type.name} color={MAIN_COLOR}>
            {type.type.name}
          </Label>
        ))}
      </div>
    </Grid.Column>
  );
};

export default PokemonCard;
