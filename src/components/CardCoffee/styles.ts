import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View``;

export const Coffee = styled.View`
  height: auto;
  width: 180px;
  padding: 10px;
  background-color: gray;
  border-radius: 15px;
  justify-content: center;
  margin-right: 15px;
`;

export const ImageCoffee = styled.Image`
  width: 160px;
  height: 160px;
  border-radius: 15px;
`;

export const CoffeeName = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  margin: 5px 0;
`;

export const Description = styled.Text`
  font-size: 12px;
  color: #ddd;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Price = styled.Text`
  color: #fff;
  font-weight: 500;
  font-size: 14px;
`;

export const ButtonAdd = styled(Feather)`
  font-size: 20px;
  color: #fff;
  background-color: orange;
  padding: 5px;
  border-radius: 15px;
`;
