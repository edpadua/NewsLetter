import React from 'react'

import { Post } from "@/app/typesdata/typesdata";

import tw from "tailwind-styled-components";

import { FaRegPenToSquare, FaRegTrashCan } from "react-icons/fa6";

const PostAdminThumbContainer = tw.div`
 bg-white p-4 mb-4
`;

const PostAdminThumbTitle = tw.h1`
  font-bold text-lg
`;

const ButtonOne = tw.button`
bg-blue-700 text-white  hover:bg-blue-600  px-4 py-2 rounded-xl text-base
`;




function PostAdminThumb({
    _id,
    title,
    author,
    content,
    thumbnail,
    status,
    date,
    createdAt,
    updatedAt
  }: Post) {
  return (
    <PostAdminThumbContainer>
      <div>
        <PostAdminThumbTitle>{title}</PostAdminThumbTitle>
        <div>{new Date(updatedAt).getDate()}/{new Date(updatedAt).getMonth()}/{new Date(updatedAt).getFullYear()} - {new Date(updatedAt).getHours()}:{new Date(updatedAt).getMinutes()}</div>
      </div>
      
      <div className="flex">
      <FaRegPenToSquare />
      <FaRegTrashCan/>
      </div>
    </PostAdminThumbContainer>
  )
}

export default PostAdminThumb
