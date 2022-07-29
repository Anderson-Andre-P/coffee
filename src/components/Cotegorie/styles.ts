import styled from "styled-components/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

interface Props {
  isActive: boolean;
}

export const SuperContainer = styled.View`
  flex: 1;
  height: auto;
  background-color: ${({ theme }) => theme.colors.shape};
`;

export const Container = styled(GestureHandlerRootView)`
  background-color: ${({ theme }) => theme.colors.shape};
`;

export const Categories = styled.View`
  margin-bottom: 10px;
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
  contentContainerStyle: { paddingRight: 24 },
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
  min-width: 90px;
  justify-content: center;
  align-items: center;
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

export const CardsCoffee = styled.View`
  justify-content: center;
`;
