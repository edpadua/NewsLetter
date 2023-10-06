import React from "react";

import { Post } from "@/app/typesdata/typesdata";

import tw from "tailwind-styled-components";

import { FaRegPenToSquare, FaRegTrashCan } from "react-icons/fa6";

import { useApi } from "@/app/context/api.context";

const PostAdminThumbContainer = tw.div`
 bg-white p-4 mb-4
`;

const PostAdminThumbTitle = tw.h1`
  font-bold text-lg
`;

const ButtonOne = tw.button`
bg-blue-700 text-white  hover:bg-blue-600  px-4 py-2 rounded-xl text-base
`;

type Props = {
    post: Post;
    index:number;
  };

  const PostAdminThumb: React.FC<Props> = ({post, index}) => {

    const {deletePost,getPostList} = useApi();

    const handleDelete = (e) => {
        e.preventDefault();
        deletePost(post._id,index);
      }

  return (
    <PostAdminThumbContainer>
      <div>
        <PostAdminThumbTitle>{post.title}</PostAdminThumbTitle>
        <div>
          {new Date(post.updatedAt).getDate()}/{new Date(post.updatedAt).getMonth()}/
          {new Date(post.updatedAt).getFullYear()} - {new Date(post.updatedAt).getHours()}
          :{new Date(post.updatedAt).getMinutes()}
        </div>
      </div>

      <div className="flex">
        <FaRegPenToSquare />
        <FaRegTrashCan style={{ cursor: "pointer" }} onClick={handleDelete}/>
      </div>
    </PostAdminThumbContainer>
  );
}

export default PostAdminThumb;
