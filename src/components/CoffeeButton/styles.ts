import { Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const ButtonCategory = styled.TouchableOpacity<TouchableOpacity>`
  background-color: ${({ theme }) => theme.colors.shape};
  width: auto;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  margin: 0 5px;
  padding: 0 10px;
`;

export const TextButton = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-weight: normal;
`;
