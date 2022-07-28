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

// import { CardCoffee } from "../CardCoffee";
import { Shop } from "../ContainerCoffeeShop/styles";
import {
  Container,
  Categories,
  TitleCategory,
  Types,
  Category,
  Text,
  CardsCoffee,
  SuperContainer,
} from "./styles";
// import { Load } from "../components/Load";
import { CoffeeButton } from "../CoffeeButton";
import { CoffeeCardPrimary } from "../CoffeeCardPrimary";

interface TypesProps {
  key: string;
  title: string;
}

interface CoffeeProps {
  id: number;
  name: string;
  about: string;
  types: [string];
  ingredients: [string];
  preparation_mode: [string];
  photo: string;
}

export function Categorie() {
  const [types, setTypes] = useState<TypesProps[]>([]);
  const [coffee, setCoffee] = useState<CoffeeProps[]>([]);
  const [filteredCoffee, setFilteredCoffee] = useState<CoffeeProps[]>([]);
  const [typeSelected, setTypeSelected] = useState("all");

  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const [loadedAll, setLoadedAll] = useState(false);

  async function fetchCoffee() {
    const { data } = await api.get(
      `coffees?_sort=name&_order=asc&_page=${page}&_limit=8`
    );

    if (!data) return setLoading(true);

    if (page > 1) {
      setCoffee((oldValue) => [...oldValue, ...data]);
      setFilteredCoffee((oldValue) => [...oldValue, ...data]);
    } else {
      setCoffee(data);
      setFilteredCoffee(data);
    }

    setLoading(false);
    setLoadingMore(false);
  }

  function handleCoffeeSelected(coffeeSelected: string) {
    setTypeSelected(coffeeSelected);

    if (coffeeSelected === "all") {
      return setFilteredCoffee(coffee);
    }

    const filtered = coffee.filter((coffees) =>
      coffees.types.includes(coffeeSelected)
    );

    setFilteredCoffee(filtered);
  }

  function handleFetchMore(distance: number) {
    if (distance < 1) {
      return;
    }

    setLoadingMore(true);
    setPage((oldValue) => oldValue + 1);
    fetchCoffee();
  }

  useEffect(() => {
    async function fetchTypes() {
      const { data } = await api.get("coffees_types?_sort=title&_order=asc");
      setTypes([
        {
          key: "all",
          title: "Todos",
        },
        ...data,
      ]);
    }

    fetchTypes();
  }, []);

  useEffect(() => {
    fetchCoffee();
  }, []);

  // if (loading) return <Load />;

  return (
    <SuperContainer>
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
          contentContainerStyle={{ paddingLeft: 20, paddingRight: 20 }}
        />
      </Categories>

      <CardsCoffee>
        <FlatList
          data={filteredCoffee}
          renderItem={({ item }) => <CoffeeCardPrimary data={item} />}
          horizontal
          showsHorizontalScrollIndicator={true}
          onEndReachedThreshold={0.1}
          onEndReached={({ distanceFromEnd }) =>
            handleFetchMore(distanceFromEnd)
          }
          contentContainerStyle={{ paddingLeft: 10, paddingRight: 10 }}
        />
      </CardsCoffee>
    </SuperContainer>
  );
}
