"use client";

import React, { useState, useEffect } from "react";
import PostThumb from "../PostThumb";

import { Post } from "../../typesdata/typesdata";

import { useApi } from "@/app/context/api.context";

import axios, { AxiosResponse } from "axios";

import tw from "tailwind-styled-components";

const List = tw.div`
grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full container gap-4 mt-16 
`;

function PostList() {
  const [posts, setPostList] = useState<Post[]>([]);

  const {postList,getPostList} = useApi();

  useEffect(() => {
    

    getPostList();
  }, []);

  return (
    <List>
      {postList ? (
        postList.map((post: Post, index) => <PostThumb key={index} {...post} />)
      ) : (
        <p>Não encontrados</p>
      )}
    </List>
  );
}

export default PostList;
