import React from 'react'

import tw from "tailwind-styled-components";

import Post from "../../components/Post/index"

function PostPage(id:string) {
  return (
    <>
       <Post id={id}/>
    </>
  )
}

export default PostPage