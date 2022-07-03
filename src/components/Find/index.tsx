import React from "react";
import { Container, Search, InputSearch, Filter, Title } from "./styles";

export function Find() {
  return (
    <Container>
      <Title>Search Your {"\n"}Favourite Coffee</Title>

      <Search>
        <InputSearch
          placeholder="Find your coffee"
          placeholderTextColor="#afafaf"
        />
        <Filter name="sliders" />
      </Search>
    </Container>
  );
}
