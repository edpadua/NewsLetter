import React from "react";

import { Post } from "@/app/typesdata/typesdata";

import tw from "tailwind-styled-components";

const PostThumbContainer = tw.div`
m-4
`;

const PostThumbTitle = tw.h1`
  font-bold text-lg
`;

const ButtonOne = tw.button`
bg-blue-700 text-white  hover:bg-blue-600  px-4 py-2 rounded-xl text-base
`;

const PostSample = tw.p`
text-base
`;

const PostSampleContainer = tw.div`
pb-4
`;





import { Button } from "@/GlobalStyles";

function PostThumb({
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
    <PostThumbContainer>
      <div>
        <PostThumbTitle>{title}</PostThumbTitle>
      </div>
      <PostSampleContainer>
        <PostSample>{content}
        </PostSample>
      </PostSampleContainer>
      <div>
        <ButtonOne>Ler mais</ButtonOne>
      </div>
    </PostThumbContainer>
  );
}

export default PostThumb;
