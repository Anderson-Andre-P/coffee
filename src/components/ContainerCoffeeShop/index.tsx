import React from "react";
import { image1, image2, image3 } from "../../images";
import { CardCoffee } from "../CardCoffee";
import { Container, Shop } from "./styles";

export function ContainerCoffeeShop() {
  return (
    <Container>
      <Shop>
        <CardCoffee
          src={image1}
          title="Cappuccino"
          description="With Suggar"
          price="$4.98"
        />
        <CardCoffee
          src={image2}
          title="Island"
          description="Without Suggar"
          price="$5.12"
        />
        <CardCoffee
          src={image3}
          title="American"
          description="With Milk"
          price="$6.56"
        />
      </Shop>
    </Container>
  );
}
