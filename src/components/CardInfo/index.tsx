import React, { useState } from "react";
import { Modal } from "react-native";
import {
  Container,
  Box,
  Image,
  Content,
  Title,
  Info,
  Button,
  Text,
  ContentModal,
  TextModalView,
  TitleModal,
  InfoModal,
  ButtonModal,
} from "./styles";

export function CardInfo() {
  const [contentModalOpen, setContentModalOpen] = useState(false);

  function handleOpenModal() {
    setContentModalOpen(true);
  }

  function handleCloseModal() {
    setContentModalOpen(false);
  }

  return (
    <Container>
      <Box>
        <Image source={require("../../../assets/gray.png")} />
        <Content>
          {/* <TextView> */}
          <Title>About Coffees</Title>
          <Info>Cooffees are a most expansive income of last 10 years...</Info>
          {/* </TextView> */}
          <Button onPress={handleOpenModal}>
            <Text>View more</Text>
          </Button>
        </Content>
      </Box>

      <Modal
        visible={contentModalOpen}
        animationType="slide"
        transparent={false}
      >
        <ContentModal>
          <TextModalView>
            <TitleModal>About Coffees</TitleModal>
            <InfoModal>
              Coffee is a brewed drink prepared from roasted coffee beans, the
              seeds of berries from certain flowering plants in the Coffea
              genus. From the coffee fruit, the seeds are separated to produce a
              stable, raw product: unroasted green coffee. The seeds are then
              roasted, a process which transforms them into a consumable
              product: roasted coffee, which is ground into fine particles that
              are typically steeped in hot water before being filtered out,
              producing a cup of coffee.
              {"\n"} {"\n"}
              Coffee is darkly colored, bitter, slightly acidic and has a
              stimulating effect in humans, primarily due to its caffeine
              content. It is one of the most popular drinks in the world and can
              be prepared and presented in a variety of ways (e.g., espresso,
              French press, caffè latte, or already-brewed canned coffee). It is
              usually served hot, although chilled or iced coffee is common.
              Sugar, sugar substitutes, milk or cream are often used to lessen
              the bitter taste or enhance the flavor. It may be served with
              coffee cake or another sweet dessert, like doughnuts. A commercial
              establishment that sells prepared coffee beverages is known as a
              coffeehouse or coffee shop (not to be confused with Dutch
              coffeeshops selling cannabis). Clinical research indicates that
              moderate coffee consumption is benign or mildly beneficial as a
              stimulant in healthy adults, with continuing research on whether
              long-term consumption has positive or negative effects.
            </InfoModal>
          </TextModalView>

          <ButtonModal onPress={handleCloseModal}>
            <Text>Close page</Text>
          </ButtonModal>
        </ContentModal>
      </Modal>
    </Container>
  );
}
