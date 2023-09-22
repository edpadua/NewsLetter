"use client";

import React, { useState, useEffect } from "react";
import PostThumb from "../PostThumb";

import { Post } from "../../typesdata/typesdata";

import axios, { AxiosResponse } from "axios";

import tw from "tailwind-styled-components";

const List = tw.div`
grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full container gap-2 mt-16 
`;

function PostList() {
  const [posts, setPostList] = useState<Post[]>([]);

  useEffect(() => {
    const getPostList = () => {
      const url = "http://localhost:3000/api/posts/";
      axios
        .get(url)
        .then((res) => {
          setPostList(res.data.posts);
          console.log("res.data", res.data.posts);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getPostList();
  }, []);

  return (
    <List>
      {posts ? (
        posts.map((post: Post, index) => <PostThumb key={index} {...post} />)
      ) : (
        <p>Não encontrados</p>
      )}
    </List>
  );
}

export default PostList;
