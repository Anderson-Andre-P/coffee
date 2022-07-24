import React from "react";
import { CardInfo } from "../../components/CardInfo";
import { Categorie } from "../../components/Cotegorie";
import { Find } from "../../components/Find";
import { Head } from "../../components/Head";
import { NewsletterBox } from "../../components/NewsletterBox";
import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <Head />
      <Find />
      <Categorie />
      <CardInfo />
      <NewsletterBox />
    </Container>
  );
}
