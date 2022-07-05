import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

export const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

export const Box = styled.View`
  flex-direction: row;
  width: 100%;
  background-color: gray;
  padding: 20px;
  border-radius: 15px;
`;

export const Image = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 15px;
  margin-right: 15px;
`;

export const Content = styled.View`
  flex: 1;
  flex-direction: column;
  width: auto;
`;

// export const TextView = styled.View`
//   margin-left: 15px;
//   max-width: 70%;
// `;

export const Title = styled.Text`
  font-weight: 700;
  color: #fff;
  font-size: 18px;
`;

export const Info = styled.Text`
  color: #fff;
  font-size: 14px;
`;

export const Button = styled.TouchableOpacity`
  background-color: orange;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 30px;
  border-radius: 7px;
  margin-top: 15px;
`;

export const Text = styled.Text`
  color: #fff;
  font-size: 14px;
`;

export const ContentModal = styled.View`
  background-color: gray;
  height: 100%;
  justify-content: space-between;
  padding-bottom: 20px;
`;

export const TextModalView = styled.View``;

export const TitleModal = styled.Text`
  text-align: center;
  font-weight: 700;
  color: #fff;
  font-size: 20px;
  margin: 10px 0;
`;

export const InfoModal = styled.Text`
  color: #fff;
  font-size: 15px;
  margin: 10px;
`;

export const ButtonModal = styled.TouchableOpacity`
  background-color: orange;
  align-items: center;
  justify-content: center;
  width: 30%;
  height: 40px;
  border-radius: 7px;
  margin-top: 25px;
  align-self: center;
`;
