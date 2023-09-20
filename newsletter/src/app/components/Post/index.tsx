'use client'

import React from "react";

import tw from "tailwind-styled-components";

import {Post} from "../../typesdata/typesdata";

import getSinglePost from "../../controllers/getSinglePost";

import { useState, useEffect } from "react";


const PostCard = tw.div`
    flex
    w-full 
    
`;

const PostHeader = tw.div`
     
    
`;

const PostTitle = tw.h1`
     
    
`;

const PostContent = tw.div`
     
    
`;


interface Props {
  id: string
} 

function Post({ id }: Props) {
  
  const [post, setPost]=useState<Post|null>(null);
  
  //const post = await getSinglePost(id);


  

  useEffect(() => {

    const getSinglePost= async (id:string) => {
      try {
        const response = await fetch(`http://localhost:3000/api/posts/${id}`, {
          cache: "no-store",
        });
        const post = await response.json();
        console.log("post",post.data);
        setPost(post);
      } catch (error) {
        console.log(error);
      }
    }
      getSinglePost(id);
      
   

  }, []);

  return (
    <PostCard>
      {/**<PostHeader>
        <PostTitle>{post.title}</PostTitle>
      </PostHeader>
      <PostContent>
        <p>{post.content}</p>
  </PostContent>**/}
    </PostCard>
  );
}

export default Post;
