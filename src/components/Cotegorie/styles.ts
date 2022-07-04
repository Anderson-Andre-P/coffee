import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

interface Props {
  isActive: boolean;
}

export const Container = styled(GestureHandlerRootView)``;

export const Categories = styled.View`
  margin-bottom: 25px;
`;

export const TitleCategory = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: white;
  line-height: 32px;
  margin-bottom: 25px;
  padding: 0 20px;
`;

export const Types = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  flex-direction: row;
  padding: 0 20px;
`;

export const Category = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})<Props>`
  background-color: ${({ isActive }) => (isActive ? "orange" : "gray")};
  border-radius: 10px;
  margin-right: 10px;
  /* flex: 1; */
  /* width: 100%; */
`;

export const Text = styled.Text`
  height: 40px;
  padding: 10px;
  color: #fff;
`;

export const Separator = styled.View`
  height: 1px;
  width: 1px;
  background-color: red;
`;
