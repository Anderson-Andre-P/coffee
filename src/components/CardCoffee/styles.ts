import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

interface Props {
  colors: string;
}

export const Container = styled.View``;

export const Coffee = styled.View`
  height: auto;
  width: 190px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.shape_2};
  border-radius: 15px;
  justify-content: center;
  margin-right: 15px;
`;

export const ImageCoffeeContent = styled.View`
  width: 170px;
  height: 160px;
  align-items: center;
  justify-content: center;
  /* border-radius: 15px; */
`;

export const ImageCoffee = styled.Image``;

export const FavoriteButton = styled.TouchableOpacity`
  position: absolute;
  top: 16px;
  right: 16px;
`;

export const Favorite = styled(MaterialIcons)<Props>`
  font-size: 22px;
  color: ${({ colors }) => colors};
`;

export const CoffeeName = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text};
  font-weight: bold;
  margin: 5px 0;
`;

export const Description = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Price = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  font-size: 14px;
`;

export const ButtonAdd = styled(Feather)`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.shape};
  padding: 5px;
  border-radius: 15px;
`;
