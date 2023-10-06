export type Post={
    _id: string;
    title: string;
    author: string;
    content: string;
    thumbnail: string;
    status: string;
    date: string;
    createdAt: Date;
    updatedAt: Date;
};

export type ApiContextType={
    post:Post | null;
    postList: Post[];
    setPostList(postList: Post[]):void;
    getPostList():void;
    getSinglePost(id:string):void;
    createPost(post:Inputs):void;
    deletePost(id:string,index:number):void;
  };


export type Inputs = {
    title: string;
    content: string;
};