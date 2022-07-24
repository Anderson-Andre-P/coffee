import React, { ReactComponentElement } from "react";
import { TypeArabe } from "../../images";
// import { image1, image2, image3 } from "../../images";
import { CardCoffee } from "../CardCoffee";
import { Container, Shop } from "./styles";

interface Props {
  id: number;
}

export function ContainerCoffeeShop({ id }: Props) {
  return [
    id === 1 && (
      <Container>
        <Shop>
          <CardCoffee
            src={TypeArabe}
            title="Cappuccino"
            description="With Suggar"
            price="$4.98"
          />
          <CardCoffee
            src={TypeArabe}
            title="Island"
            description="Without Suggar"
            price="$5.12"
          />
          <CardCoffee
            src={TypeArabe}
            title="American"
            description="With Milk"
            price="$6.56"
          />
        </Shop>
      </Container>
    ),
    id === 2 && (
      <Container>
        <Shop>
          <CardCoffee
            src={TypeArabe}
            title="Cappuccino"
            description="With Suggar"
            price="$4.98"
          />
        </Shop>
      </Container>
    ),
  ];
}
