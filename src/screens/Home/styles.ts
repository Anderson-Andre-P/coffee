import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

interface Props {
  active: boolean;
}

export const Container = styled.View`
  background-color: #333;
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  width: 100%;
  height: 113px;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export const ProfileAvatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 5px;
`;

export const Icon = styled(Feather)`
  font-size: 20px;
  color: white;
`;

export const Content = styled.View`
  /* padding: 0 20px; */
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: white;
  line-height: 32px;
  margin-bottom: 25px;
  padding: 0 20px;
`;

export const Search = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  max-width: 100%;
  margin-bottom: 25px;
  padding: 0 20px;
`;

export const InputSearch = styled.TextInput`
  color: #fff;
  flex: 1;
  background-color: gray;
  border-radius: 5px;
  padding: 5px 10px;
`;

export const Filter = styled(Feather)`
  color: #fff;
  font-size: 20px;
  background-color: orange;
  width: 40px;
  height: 40px;
  border-radius: 5px;
  padding: 10px;
  margin-left: 25px;
`;
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

export const Shop = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  flex-direction: row;
  padding: 0 20px;
`;

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
