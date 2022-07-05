import styled from "styled-components/native";

export const Container = styled.View``;

export const Shop = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingRight: 16 },
})`
  flex-direction: row;
  padding: 0 20px;
`;
