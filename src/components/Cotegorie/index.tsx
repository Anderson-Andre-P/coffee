import React, { useState } from "react";
import {
  Container,
  Categories,
  TitleCategory,
  Types,
  Category,
  Text,
} from "./styles";

export function Categorie() {
  const coffees = [
    "Cappuccino",
    "Americano",
    "Express",
    "With Milk",
    "Spanish",
  ];

  const [active, setActive] = useState(false);
  const [type, setType] = useState(coffees);

  function handlePress(key: string, type: any) {
    if (key === type) {
      setActive((state) => !active);
    }
  }

  return (
    <Container>
      <Categories>
        <TitleCategory>Categories</TitleCategory>
        <Types>
          {coffees.map((index) => (
            <Category
              active={active}
              key={index}
              onPress={() => handlePress(index, type)}
            >
              <Text>{index}</Text>
            </Category>
          ))}
        </Types>
      </Categories>
    </Container>
  );
}
