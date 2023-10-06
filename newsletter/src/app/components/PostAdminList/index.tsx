"use client";

import React, { useState, useEffect, useMemo } from "react";

import { Post } from "../../typesdata/typesdata";

import { useApi } from "@/app/context/api.context";

import PostAdminThumb from "../PostAdminThumb";

import tw from "tailwind-styled-components";

const List = tw.div`
grid grid-cols-1  w-full container gap-4 mt-16 
`;

function PostAdminList() {
    const [posts, setPostList] = useState<Post[]>([]);

    const {postList,getPostList} = useApi();

    useEffect(() => {

        getPostList();
      }, []);

  return (
    <List>
      {postList ? (
        postList.map((post: Post, index) => 

            <PostAdminThumb key={index} post={post} index={index}/>
       )
      ) : (
        <p>Não encontrados</p>
      )}
    </List>
  )
}

export default PostAdminList
