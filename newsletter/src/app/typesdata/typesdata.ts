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

export type User={
    _id: string;
    name: string;
    email: string;
    password: string;
    role:string;
};

export type ApiContextType={
    post:Post | null;
    postList: Post[];
    setPostList(postList: Post[]):void;
    getPostList():void;
    getSinglePost(id:string):void;
    createPost(post:Inputs):void;
    deletePost(id:string,index:number):void;
    user: User | null;
    userList: User[];
    setUserList(userList: User[]):void;
    getUserList():void;
    getSingleUser(id:string):void;
    createUser(user:InputsUser):void;
    deleteUser(id:string,index:number):void;
  };


export type Inputs = {
    title: string;
    content: string;
};


export type InputsUser = {
    name: string;
    email: string;
    password: string;
};