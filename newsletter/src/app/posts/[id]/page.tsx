import React from 'react'

import tw from "tailwind-styled-components";

import Post from "../../components/Post/index"

function PostPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <>
       <Post id={params.id}/>
    </>
  )
}

export default PostPage