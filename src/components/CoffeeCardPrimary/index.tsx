import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { CoffeeCard, ImageCoffee, Title } from "./styles";

interface CoffeeProps extends TouchableOpacityProps {
  data: {
    name: string;
    photo: string;
  };
}

export function CoffeeCardPrimary({ data, ...rest }: CoffeeProps) {
  return (
    <CoffeeCard {...rest}>
      <ImageCoffee source={{ uri: `${data.photo}` }} />
      <Title>{data.name}</Title>
    </CoffeeCard>
  );
}
