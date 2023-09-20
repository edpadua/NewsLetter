import React, {useState, useEffect} from "react";

import PostThumb from "../PostThumb";

import {Post} from "../../typesdata/typesdata";

function PostList() {

  const [postList, setPostList]=useState<Post[]|null>(null);


  useEffect(() => {

    const getPostList= async () => {
      try {
        const response = await fetch('http://localhost:3000/api/posts/', {
          cache: "no-store",
        });
        const postList = await response.json();
        console.log("postList",response);
        setPostList(postList);
      } catch (error) {
        console.log(error);
      }
    }
    getPostList();
      
   

  }, []);


  return (
    <div className="flex">
      <div className="w-1/3">
        <PostThumb />
      </div>
      <div className="w-1/3">
        <PostThumb />
      </div>
      <div className="w-1/3">
        <PostThumb />
      </div>
    </div>
  );
}

export default PostList;
