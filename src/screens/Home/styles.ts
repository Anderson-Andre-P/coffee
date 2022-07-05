import styled from "styled-components/native";

export const Container = styled.ScrollView.attrs({
  vertical: true,
  showsVerticalScrollIndicator: false,
})`
  background-color: #333;
  flex: 1;
`;
