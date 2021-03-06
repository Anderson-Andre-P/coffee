import React from "react";
import { Image, ImageSourcePropType } from "react-native";
import {
  Container,
  Coffee,
  ImageCoffee,
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
  return (
    <Container>
      <Coffee>
        <ImageCoffee source={src} />
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
