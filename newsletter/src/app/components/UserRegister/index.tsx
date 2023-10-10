import React, { useState } from "react";

import { Form, Input, Textarea, Button } from "../../../GlobalStyles";

import { useForm, useController, SubmitHandler } from "react-hook-form";

import { User, InputsUser } from "../../typesdata/typesdata";

import { useApi } from "@/app/context/api.context";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required().email("Email is invalid"),
  password: yup
    .string()
    .required()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})/,
      "Must Contain 6 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
});

function UserRegister() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InputsUser>({
    resolver: yupResolver(schema),
  });

  const { createUser } = useApi();

  const onSubmit: SubmitHandler<InputsUser> = async (data) => {
   
    console.log("data", data);
        createUser(data);
        reset({
            name: "",
            email: "",
            password: "",
        });

   
  };

  return (
    <>
      <Form onSubmit={(event) => void handleSubmit(onSubmit)(event)}>
        <Input {...register("name")} placeholder="Digite o nome" />
        <p>{errors.name?.message}</p>
        <Input {...register("email")} placeholder="Digite o e-mail" />
        <p>{errors.email?.message}</p>
        <Input
          type="password"
          {...register("password")}
          placeholder="Digite a senha"
        />
        <p>{errors.password?.message}</p>

        <Button type="submit">Cadastrar</Button>
      </Form>
    </>
  );
}

export default UserRegister;
