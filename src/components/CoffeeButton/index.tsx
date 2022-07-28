import React from "react";
import { StyleSheet, TouchableOpacityProps } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { ButtonCategory, TextButton } from "./styles";

interface CoffeeButtonProps extends TouchableOpacityProps {
  title: string;
  active?: boolean;
}

export function CoffeeButton({
  title,
  active = false,
  ...rest
}: CoffeeButtonProps) {
  return (
    <ButtonCategory style={active && styles.buttonActive} {...rest}>
      <TextButton>{title}</TextButton>
    </ButtonCategory>
  );
}

const styles = StyleSheet.create({
  buttonActive: {
    backgroundColor: "red",
  },
});
