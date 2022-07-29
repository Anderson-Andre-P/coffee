import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export const CoffeeCard = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})<TouchableOpacity>`
  /* max-width: 45%; */
  background-color: ${({ theme }) => theme.colors.shape_2};
  border-radius: 20px;
  padding: 0;
  /* align-items: center; */
  margin: 0 10px;
  padding: 15px 10px;
`;

export const ImageCoffee = styled.Image`
  height: 120px;
  width: 120px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  text-align: center;
  padding-top: 10px;
`;
