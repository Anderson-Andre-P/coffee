import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};
  margin-top: 20px;
`;

export const Shop = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingRight: 16 },
})`
  flex-direction: row;
  padding: 20px 20px 0;
`;
