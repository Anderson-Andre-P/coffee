import { setStatusBarNetworkActivityIndicatorVisible } from "expo-status-bar";
import React, { useState } from "react";
import {
  Container,
  Header,
  ProfileAvatar,
  Icon,
  Content,
  Title,
  Search,
  InputSearch,
  Filter,
  Categories,
  TitleCategory,
  Category,
  Types,
  Shop,
  Coffee,
  ImageCoffee,
  CoffeeName,
  Description,
  Footer,
  Price,
  ButtonAdd,
  Text,
} from "./styles";

interface CoffeeTypeProps {
  key: string;
  name: "Cappuccino" | "Americano";
}

export function Home({ key, name }: CoffeeTypeProps) {
  const coffees = [
    "Cappuccino",
    "Americano",
    "Express",
    "With Milk",
    "Spanish",
  ];

  const [active, setActive] = useState(false);
  const [type, setType] = useState(coffees);

  function handlePress(key: string, type: any) {
    if (key === type) {
      setActive((state) => !active);
    }
  }

  return (
    <Container>
      <Header>
        <ProfileAvatar source={require("../../../assets/gray.png")} />
        <Icon name="bell" />
      </Header>

      <Content>
        <Title>Search Your {"\n"}Favourite Coffee</Title>
        <Search>
          <InputSearch
            placeholder="Find your coffee"
            placeholderTextColor="#afafaf"
          />
          <Filter name="sliders" />
        </Search>

        <Categories>
          <TitleCategory>Categories</TitleCategory>
          <Types>
            {coffees.map((index) => (
              <Category
                active={active}
                key={index}
                onPress={() => handlePress(key, type)}
              >
                <Text>{index}</Text>
              </Category>
            ))}
          </Types>
        </Categories>

        <Shop>
          <Coffee>
            <ImageCoffee source={require("../../../assets/gray.png")} />
            <CoffeeName>Cappuccino</CoffeeName>
            <Description>With Suggar</Description>
            <Footer>
              <Price>$4.98</Price>
              <ButtonAdd name="plus" />
            </Footer>
          </Coffee>
          <Coffee>
            <ImageCoffee source={require("../../../assets/gray.png")} />
            <CoffeeName>Cappuccino</CoffeeName>
            <Description>With Suggar</Description>
            <Footer>
              <Price>$4.98</Price>
              <ButtonAdd name="plus" />
            </Footer>
          </Coffee>
          <Coffee>
            <ImageCoffee source={require("../../../assets/gray.png")} />
            <CoffeeName>Cappuccino</CoffeeName>
            <Description>With Suggar</Description>
            <Footer>
              <Price>$4.98</Price>
              <ButtonAdd name="plus" />
            </Footer>
          </Coffee>
          <Coffee>
            <ImageCoffee source={require("../../../assets/gray.png")} />
            <CoffeeName>Cappuccino</CoffeeName>
            <Description>With Suggar</Description>
            <Footer>
              <Price>$4.98</Price>
              <ButtonAdd name="plus" />
            </Footer>
          </Coffee>
        </Shop>
      </Content>
    </Container>
  );
}
