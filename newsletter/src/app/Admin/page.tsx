"use client";

import React, { useState } from "react";

import { Form, Input, Textarea, Button } from "../../GlobalStyles";

import { useForm, useController, SubmitHandler } from 'react-hook-form';

import axios, { AxiosResponse } from "axios";

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';

type Inputs = {
    title: string;
    content: string;
};

const schema = yup.object().shape({
    title: yup.string().required(),
    content: yup.string().required(),
    
})

function Admin() {

    const { register, handleSubmit, reset, formState: { errors } } = useForm<Inputs>({
        resolver: yupResolver(schema)
    });

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
        console.log("data",data);
        const date=new Date();
        const post={
           title:data.title,
           author:"José das Couves",
           content:data.content,
           thumbnail:"http://imagem",
           status: "published",
           date:"2023-09-21",
           createdAt: date,
           updatedAt: date,

        }
        console.log("Post",post);
        const response: AxiosResponse<Inputs> = await axios.post("api/posts/", JSON.stringify(post),
        {
            headers: { 'Content-Type': 'application/json' },
        
        });
        
      } catch (error) {
        console.log(error);
      }

}

  return (
    <div className="pt-20 pb-20 w-full flex">
      <div className="w-1/2">
        <form onSubmit={(event) =>
                void handleSubmit(onSubmit)(event)}>
          <Input {...register('title')}  placeholder="Título do Post" />
          <p>{errors.title?.message}</p>
          <Textarea {...register('content')} rows={10} placeholder="Texto" />
          <p>{errors.content?.message}</p>
          <Button type="submit">Salvar</Button>
        </form>
      </div>
    </div>
  );
}

export default Admin;
