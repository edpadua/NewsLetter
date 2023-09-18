import React from "react";

import tw from "tailwind-styled-components";

import getSinglePost from "../../controllers/getSinglePost";

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

async function Post({ id }: Props) {
  const post = await getSinglePost(id);

  return (
    <PostCard>
      <PostHeader>
        <PostTitle>post.title</PostTitle>
      </PostHeader>
      <PostContent>
        <p>post.content</p>
      </PostContent>
    </PostCard>
  );
}

export default Post;
