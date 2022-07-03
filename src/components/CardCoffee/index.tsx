import React from "react";
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

export function CardCoffee() {
  return (
    <Container>
      <Coffee>
        <ImageCoffee source={require("../../../assets/gray.png")} />
        <CoffeeName>Cappuccino</CoffeeName>
        <Description>With Suggar</Description>
        <Footer>
          <Price>$4.98</Price>
          <ButtonAdd name="plus" />
        </Footer>
      </Coffee>
    </Container>
  );
}
