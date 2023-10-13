import React, { useState } from "react";

import { Form, Input, Textarea, Button } from "../../../GlobalStyles";

import { useForm, useController, SubmitHandler } from "react-hook-form";

import { User, InputsLogin } from "../../typesdata/typesdata";

import { useApi } from "@/app/context/api.context";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  email: yup.string().required().email("Email is invalid"),
  password: yup
    .string()
    .required(),
});

function LoginForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InputsLogin>({
    resolver: yupResolver(schema),
  });

  const { createUser } = useApi();

  const onSubmit: SubmitHandler<InputsLogin> = async (data) => {
   
    console.log("data", data);
       
        reset({
            email: "",
            password: "",
        });

   
  };

  return (
    <>
      <Form onSubmit={(event) => void handleSubmit(onSubmit)(event)}>
        <Input {...register("email")} placeholder="Digite o e-mail" />
        <p>{errors.email?.message}</p>
        <Input
          type="password"
          {...register("password")}
          placeholder="Digite a senha"
        />
        <p>{errors.password?.message}</p>

        <Button type="submit">Login</Button>
      </Form>
    </>
  );
}

export default LoginForm;
