
import React, { useState } from "react";

import { Form, Input, Textarea, Button } from  "../../../GlobalStyles"

import { useForm, useController, SubmitHandler } from "react-hook-form";

import axios, { AxiosResponse } from "axios";

import { Post, Inputs } from "../../typesdata/typesdata"

import { useApi } from "@/app/context/api.context";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  title: yup.string().required(),
  content: yup.string().required(),
});

function PostRegister() {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm<Inputs>({
        resolver: yupResolver(schema),
      });
    
      const { createPost } = useApi();
    
      const [title, setTitle] = useState("");
      const [content, setContent] = useState("");
    
      const onSubmit: SubmitHandler<Inputs> = async (data) => {
        console.log("data", data);
        createPost(data);
        reset({
          title: "",
          content: "",
        });
      };
    
  return (
    <div className="pt-20 pb-20 w-full flex">
      <div className="w-1/2">
        <form onSubmit={(event) => void handleSubmit(onSubmit)(event)}>
          <Input {...register("title")} placeholder="Título do Post" />
          <p>{errors.title?.message}</p>
          <Textarea {...register("content")} rows={10} placeholder="Texto" />
          <p>{errors.content?.message}</p>
          <Button type="submit">Salvar</Button>
        </form>
      </div>
    </div>
  )
}

export default PostRegister
