import React, { useState } from "react";
import { Image, ImageSourcePropType } from "react-native";
import {
  Container,
  Coffee,
  ImageCoffeeContent,
  ImageCoffee,
  FavoriteButton,
  Favorite,
  CoffeeName,
  Description,
  Footer,
  Price,
  ButtonAdd,
} from "./styles";

interface Props {
  src: ImageSourcePropType;
  title: string;
  description: string;
  price: string;
}

export function CardCoffee({ src, title, description, price }: Props) {
  const [favoriteList, setFavoriteList] = useState("#fff");

  function handleSelectFavorite() {
    setFavoriteList("#F00");
  }

  return (
    <Container>
      <Coffee>
        <ImageCoffeeContent>
          <ImageCoffee source={src} />
        </ImageCoffeeContent>
        <FavoriteButton onPress={handleSelectFavorite}>
          <Favorite name="favorite" colors={favoriteList} />
        </FavoriteButton>
        <CoffeeName>{title}</CoffeeName>
        <Description>{description}</Description>
        <Footer>
          <Price>{price}</Price>
          <ButtonAdd name="plus" />
        </Footer>
      </Coffee>
    </Container>
  );
}
