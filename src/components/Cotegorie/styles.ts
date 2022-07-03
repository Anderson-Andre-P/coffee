import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

interface Props {
  active: boolean;
}

export const Container = styled.View``;

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
  padding: 0 20px;

  flex-direction: row;
`;

export const Text = styled.Text`
  color: #fff;
`;

export const Category = styled(TouchableOpacity).attrs({
  activeOpacity: 0.7,
})<Props>`
  margin-right: 10px;
  height: 40px;
  background-color: ${({ active }) => (active === true ? "orange" : "gray")};
  padding: 10px;
  border-radius: 10px;
`;
