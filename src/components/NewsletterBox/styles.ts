import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.shape};
`;

export const Content = styled.View`
  margin: 0 20px;
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.colors.shape_2};
  border-radius: 15px;
  padding: 20px;
`;

export const Title = styled.Text`
  color: white;
  font-weight: 700;
  font-size: 18px;
`;

export const Form = styled.View`
  flex: 1;
  width: 100%;
  padding: 0;
  justify-content: space-between;
`;

export const Fields = styled.View`
  flex-direction: row;
  align-items: flex-start;
`;

export const Button = styled(TouchableOpacity).attrs({
  activeOpacity: 0.7,
})`
  width: auto;
  height: 35px;
  padding: 5px 10px;
  font-size: 14px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  margin-left: 15px;
  margin-top: 10px;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-size: 16px;
`;
