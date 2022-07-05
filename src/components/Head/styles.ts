import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};
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
  width: 45px;
  height: 45px;
  border-radius: 5px;
`;

export const Icon = styled(Feather)`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.text};
`;
