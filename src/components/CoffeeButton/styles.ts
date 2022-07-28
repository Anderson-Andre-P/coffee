import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const ButtonCategory = styled.TouchableOpacity<TouchableOpacity>`
  background-color: ${({ theme }) => theme.colors.shape};
  width: 76px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  margin: 0 5px;
`;

export const TextButton = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: normal;
`;
