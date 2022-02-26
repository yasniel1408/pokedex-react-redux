import { FC } from "react";
import { Image, Label, Divider, Grid, Icon } from "semantic-ui-react";
import { FAV_COLOR, MAIN_COLOR } from "../../utils/constants";
import "./styles.css";

const PokemonCard: FC<{ name: string; data: any }> = ({
  name,
  data: {
    sprites: { front_default },
    types,
  },
}) => {
  return (
    <Grid.Column mobile={16} tablet={8} computer={4}>
      <div className="PokemonCard">
        <Icon name="favorite" color={FAV_COLOR} />
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
