import React, { useState } from "react";
import { FlatList } from "react-native";
// import { Coffees } from "../../utils/Coffees";
import {
  Container,
  Categories,
  TitleCategory,
  Types,
  Category,
  Text,
  Separator,
} from "./styles";

// interface Category {
//   key: string;
//   name: string;
// }

// interface Props {
//   category: Category;
//   setCategory: (category: Category) => void;
// }

export function Categorie() {
  const [active, setActive] = useState(false);
  const [cat, setCat] = useState("");

  const coffees = [
    { id: 1, name: "Cappuccino" },
    { id: 2, name: "Americano" },
    { id: 3, name: "Express" },
    { id: 4, name: "With Milk" },
    { id: 5, name: "Spanish" },
    // "Cappuccino",
    // "Americano",
    // "Express",
    // "With Milk",
    // "Spanish",
  ];

  // function handlePress(category: Category) {
  //   setCategory(category);
  // }

  const [selectedTab, setSelectedTab] = useState(coffees[0].id);

  const isActive = (id: number) => id === selectedTab;

  const handleSelectTabById = (id: number) => {
    setSelectedTab(id);
  };

  return (
    <Container>
      <Categories>
        <TitleCategory>Categories</TitleCategory>
        <Types>
          {coffees.map(({ id, name }) => (
            <Category
              isActive={active}
              key={id}
              onPress={() => handleSelectTabById(id)}
              style={{
                backgroundColor: isActive(id) ? "orange" : "rgba(0,0,0,0.2)",
              }}
            >
              <Text>{name}</Text>
            </Category>
          ))}
        </Types>
        {/* <Types>
          <FlatList
            data={coffees}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => (
              <Category
                onPress={() => handlePress(item)}
                isActive={category.key === item.key}
              >
                <Text>{item.name}</Text>
              </Category>
            )}
            ItemSeparatorComponent={() => <Separator />}
          />
        </Types> */}
      </Categories>
    </Container>
  );
}
