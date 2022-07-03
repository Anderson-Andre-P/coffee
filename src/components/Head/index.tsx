import React from "react";
import { Container, Header, ProfileAvatar, Icon } from "./styles";

export function Head() {
  return (
    <Container>
      <Header>
        <ProfileAvatar source={require("../../../assets/gray.png")} />
        <Icon name="bell" />
      </Header>
    </Container>
  );
}
