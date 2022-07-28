import styled from "styled-components/native";

export const CoffeeCard = styled.TouchableOpacity`
  /* max-width: 45%; */
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 20px;
  padding: 0;
  align-items: center;
  margin: 10px;
`;

export const ImageCoffee = styled.Image`
  height: 120px;
  width: 120px;
`;

export const Title = styled.Text``;
