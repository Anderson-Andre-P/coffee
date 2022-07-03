import React from "react";
import { CardCoffee } from "../CardCoffee";
import { Container, Shop } from "./styles";

export function ContainerCoffeeShop() {
  return (
    <Container>
      <Shop>
        <CardCoffee />
        <CardCoffee />
        <CardCoffee />
        <CardCoffee />
      </Shop>
    </Container>
  );
}
