import styled from "styled-components/native";

export const Container = styled.View``;

export const Shop = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  flex-direction: row;
  padding: 0 20px;
`;
