import React from "react";

import PostThumb from "../PostThumb";

function PostList() {
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
