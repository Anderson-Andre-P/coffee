import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View``;

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
