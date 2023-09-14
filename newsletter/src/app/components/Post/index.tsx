import React from 'react'

import tw from "tailwind-styled-components"

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

function Post() {
  return (
    <PostCard>
        <PostHeader>
             <PostTitle>Título</PostTitle>
        </PostHeader>
        <PostContent>
            
        </PostContent>
    </PostCard>
  )
}

export default Post
