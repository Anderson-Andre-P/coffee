import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { FlatList } from "react-native";
import {
  TypeAmericano,
  TypeIrlandes,
  TypeMacchiato,
  TypeMochaccino,
  TypeLatte,
  TypeCafeComLeite,
  TypeArabe,
  TypeCapuccino,
  TypeHavaiano,
  TypeCubano,
  TypeExpresso,
  TypeExpressoCremoso,
  TypeCafeGelado,
  TypeChocolateQuente,
} from "../../images";

import { CardCoffee } from "../CardCoffee";
import { Shop } from "../ContainerCoffeeShop/styles";
import {
  Container,
  Categories,
  TitleCategory,
  Types,
  Category,
  Text,
} from "./styles";
import { CoffeeButton } from "../CoffeeButton";

interface TypesProps {
  key: string;
  title: string;
}

interface CoffeeProps {
  id: string;
  name: string;
  about: string;
  types: [string];
  ingredients: [string];
  preparation_mode: [string];
  photo: string;
}

export function Categorie() {
  // const [active, setActive] = useState(false);

  // const coffees = [
  //   { id: 1, name: "All" },
  //   { id: 2, name: "Americano" },
  //   { id: 3, name: "Express" },
  //   { id: 4, name: "With Milk" },
  //   { id: 5, name: "Abroad" },
  // ];

  // const [selectedTab, setSelectedTab] = useState(coffees[0].id);
  // const [selectedTabContent, setSelectedTabContent] = useState(1);

  // const isActive = (id: number) => id === selectedTab;

  // const handleSelectTabById = (id: number) => {
  //   setSelectedTab(id);
  //   setSelectedTabContent(id);
  // };

  const [types, setTypes] = useState<TypesProps[]>([]);
  const [coffee, setCoffee] = useState<CoffeeProps[]>([]);
  const [filteredCoffee, setFilteredCoffee] = useState<CoffeeProps[]>([]);
  const [typeSelected, setTypeSelected] = useState("all");

  async function fetchCoffee() {
    const { data } = await api.get(`coffees?_sort=name&_order=asc`);
  }

  function handleCoffeeSelected(coffee: string) {
    // set
  }

  useEffect(() => {
    async function fetchCoffee() {
      const { data } = await api.get("coffees_types?_sort=title&_order=asc");
      setTypes([
        {
          key: "all",
          title: "Todos",
        },
        ...data,
      ]);
    }

    fetchCoffee();
  }, []);

  useEffect(() => {
    fetchCoffee();
  }, []);

  return (
    <Container>
      <TitleCategory>Categories</TitleCategory>
      <Categories>
        <FlatList
          data={types}
          renderItem={({ item }) => (
            <CoffeeButton
              title={item.title}
              active={item.key === typeSelected}
              onPress={() => handleCoffeeSelected(item.key)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />

        {/* <Types>
          {coffees.map(({ id, name }) => (
            <Category
              isActive={active}
              key={id}
              onPress={() => handleSelectTabById(id)}
              style={{
                backgroundColor: isActive(id) ? "#92400E" : "rgba(0,0,0,0.2)",
              }}
            >
              <Text>{name}</Text>
            </Category>
          ))}
        </Types> */}

        {/* {selectedTabContent === 1 && (
          <Shop>
            <CardCoffee
              src={TypeAmericano}
              title="American Coffee"
              description="Withouted Suggar"
              price="$1.98"
            />
            <CardCoffee
              src={TypeArabe}
              title="Coffee type Árabe"
              description="Withouted Suggar"
              price="$2.32"
            />
            <CardCoffee
              src={TypeCafeComLeite}
              title="Coffee with milk"
              description="Withouted Suggar"
              price="$2.13"
            />
            <CardCoffee
              src={TypeCafeGelado}
              title="Cold coffee"
              description="Withouted Suggar"
              price="$1.16"
            />
            <CardCoffee
              src={TypeCapuccino}
              title="Cappuccino"
              description="Cappuccino"
              price="$3.98"
            />
            <CardCoffee
              src={TypeChocolateQuente}
              title="Coffee with choco..."
              description="Withouted Suggar"
              price="$3.60"
            />
            <CardCoffee
              src={TypeCubano}
              title="Cuban coffee"
              description="Withouted sugar"
              price="$1.56"
            />
            <CardCoffee
              src={TypeExpresso}
              title="Express"
              description="Withouted Suggar"
              price="$5.98"
            />
            <CardCoffee
              src={TypeExpressoCremoso}
              title="Creamy express"
              description="Withouted Suggar"
              price="$4.98"
            />
            <CardCoffee
              src={TypeHavaiano}
              title="Hawaiin coffee"
              description="Withouted Suggar"
              price="$6.98"
            />
            <CardCoffee
              src={TypeIrlandes}
              title="Irland coffee"
              description="Withouted Suggar"
              price="$5.98"
            />
            <CardCoffee
              src={TypeLatte}
              title="Latte coffee"
              description="Withouted Suggar"
              price="$2.98"
            />
            <CardCoffee
              src={TypeMacchiato}
              title="Macchiato coffee"
              description="Withouted Suggar"
              price="$1.98"
            />
            <CardCoffee
              src={TypeMochaccino}
              title="Mochaccino coffee"
              description="Withouted Suggar"
              price="$8.98"
            />
          </Shop>
        )}

        {selectedTabContent === 2 && (
          <Shop>
            <CardCoffee
              src={TypeAmericano}
              title="American Coffee"
              description="Withouted Suggar"
              price="$1.98"
            />
            <CardCoffee
              src={TypeMacchiato}
              title="Macchiato coffee"
              description="Withouted Suggar"
              price="$1.98"
            />
            <CardCoffee
              src={TypeMochaccino}
              title="Mochaccino coffee"
              description="Withouted Suggar"
              price="$8.98"
            />
            <CardCoffee
              src={TypeExpresso}
              title="Express"
              description="Withouted Suggar"
              price="$5.98"
            />
            <CardCoffee
              src={TypeExpressoCremoso}
              title="Creamy express"
              description="Withouted Suggar"
              price="$4.98"
            />
          </Shop>
        )}

        {selectedTabContent === 3 && (
          <Shop>
            <CardCoffee
              src={TypeExpresso}
              title="Express"
              description="Withouted Suggar"
              price="$5.98"
            />
            <CardCoffee
              src={TypeExpressoCremoso}
              title="Creamy express"
              description="Withouted Suggar"
              price="$4.98"
            />
          </Shop>
        )}

        {selectedTabContent === 4 && (
          <Shop>
            <CardCoffee
              src={TypeLatte}
              title="Latte coffee"
              description="Withouted Suggar"
              price="$2.98"
            />
            <CardCoffee
              src={TypeCafeComLeite}
              title="Coffee with milk"
              description="Withouted Suggar"
              price="$2.13"
            />
            <CardCoffee
              src={TypeExpressoCremoso}
              title="Creamy express"
              description="Withouted Suggar"
              price="$4.98"
            />
            <CardCoffee
              src={TypeCapuccino}
              title="Cappuccino"
              description="Cappuccino"
              price="$3.98"
            />
            <CardCoffee
              src={TypeChocolateQuente}
              title="Coffee with choco..."
              description="Withouted Suggar"
              price="$3.60"
            />
          </Shop>
        )}

        {selectedTabContent === 5 && (
          <Shop>
            <CardCoffee
              src={TypeArabe}
              title="Coffee type Árabe"
              description="Withouted Suggar"
              price="$2.32"
            />
            <CardCoffee
              src={TypeCubano}
              title="Cuban coffee"
              description="Withouted sugar"
              price="$1.56"
            />
            <CardCoffee
              src={TypeHavaiano}
              title="Hawaiin coffee"
              description="Withouted Suggar"
              price="$6.98"
            />
            <CardCoffee
              src={TypeIrlandes}
              title="Irland coffee"
              description="Withouted Suggar"
              price="$5.98"
            />
          </Shop>
        )} */}
      </Categories>
    </Container>
  );
}
