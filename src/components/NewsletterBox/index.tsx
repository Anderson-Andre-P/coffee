import React, { useState } from "react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputForm } from "../InputForm";
import {
  Container,
  Content,
  Title,
  Form,
  Fields,
  Button,
  TextButton,
} from "./styles";
import { useForm } from "react-hook-form";
import { Alert } from "react-native";

export interface FormData {
  [name: string]: string;
}

const schema = Yup.object({
  name: Yup.string().required("E-mail é obrigatório"),
});

export function NewsletterBox() {
  const [email, setEmail] = useState("");
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  function handleSend(form: FormData) {
    if (!email) return Alert.alert("Digite um e=mail");

    // const data = {
    //   name: form.name,
    // };
  }

  return (
    <Container>
      <Content>
        <Title>Subscribe now!</Title>
        <Form>
          <Fields>
            <InputForm
              control={control}
              name="email"
              placeholder="Digite seu e-mail"
              autoCapitalize="none"
              autoCorrect={false}
              error={errors.name && errors.name.message}
            />
            <Button onPress={handleSubmit(handleSend)}>
              <TextButton>Enviar</TextButton>
            </Button>
          </Fields>
        </Form>
      </Content>
    </Container>
  );
}
