import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  background-color: #333;
  padding-top: 20px;
`;

export const Header = styled.View`
  flex-direction: row;
  width: 100%;
  height: 100px;
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
