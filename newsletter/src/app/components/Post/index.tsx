"use client";

import React from "react";

import tw from "tailwind-styled-components";

import { Post } from "../../typesdata/typesdata";

import { useApi } from "@/app/context/api.context";

import { useState, useEffect } from "react";

import axios, { AxiosResponse } from "axios";

const PostCard = tw.div`
   
    w-full 
    
`;

const PostHeader = tw.div`
     py-6 text-slate-800 font-semibold
    
`;

const PostDate = tw.h2`
     
    
`;

const PostAuthor = tw.h2`
     
    
`;

const PostTitle = tw.h1`
     
font-bold text-3xl pb-4
`;

const PostContent = tw.div`

    
`;

interface Props {
  id: string;
}

function Post({ id }: Props) {
  

  const {post,getSinglePost} = useApi();

  useEffect(() => {
    
    getSinglePost(id);
  }, []);

  if (post) {
    return (
      <PostCard>
        <PostHeader>
          <PostTitle>{post.title}</PostTitle>
          <PostDate>{new Date(post.date).toLocaleDateString()}</PostDate>
          <PostAuthor>Por: {post.author}</PostAuthor>
        </PostHeader>
        <PostContent>
          <p>{post.content}</p>
        </PostContent>
      </PostCard>
    );
  } else {
    return <></>;
  }
}

export default Post;
