import React from "react";
import { Container, Header, ProfileAvatar, Icon } from "./styles";

export function Head() {
  return (
    <Container>
      <Header>
        <ProfileAvatar source={require("../../images/perfil.png")} />
        <Icon name="bell" />
      </Header>
    </Container>
  );
}
