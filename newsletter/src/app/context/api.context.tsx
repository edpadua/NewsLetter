"use client";

import {
  Post,
  User,
  ApiContextType,
  Inputs,
  InputsUser,
} from "../typesdata/typesdata";

import { createContext, useContext, useState, useEffect } from "react";

import axios, { AxiosResponse } from "axios";

const ApiContext = createContext<ApiContextType | null>(null);

export const ApiContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [postList, setPostList] = useState<Post[]>([]);

  const [userList, setUserList] = useState<User[]>([]);

  const [user, setUser] = useState<User | null>(null);

  const [post, setPost] = useState<Post | null>(null);

  const getPostList = async () => {
    const url = `api/posts/`;
    axios
      .get(url)
      .then((res) => {
        setPostList(res.data.posts);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPostList();
  }, []);

  const getSinglePost = (id: string) => {
    const url = `/api/posts/${id}`;
    axios
      .get(url)
      .then((res) => {
        setPost(res.data.post);
        console.log("res.data", res.data.post);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deletePost = async (id: string, index: number) => {
    const url = `/api/posts/${id}`;

    console.log("url", url);
    try {
      const newPostList = postList;
      const response = await axios.delete(url);
      console.log("index", index);
      newPostList.splice(index, 1);
      console.log("newPostList", newPostList);
      setPostList(newPostList);
      getPostList();
    } catch (error) {
      console.error(error);
    }
  };

  const createPost = async (data: Inputs) => {
    try {
      const date = new Date();
      const post = {
        title: data.title,
        author: "José das Couves",
        content: data.content,
        thumbnail: "http://imagem",
        status: "published",
        date: "2023-09-21",
        createdAt: date,
        updatedAt: date,
      };

      console.log("Post", post);
      const newPostList = postList;
      const url = "/api/posts/";
      const response: AxiosResponse<Post> = await axios.post(
        url,
        JSON.stringify(post),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log("Response", response.data);
      newPostList.push(response.data);
      setPostList(newPostList);
      getPostList();
    } catch (error) {
      console.error(error);
    }
  };

  const getUserList = async () => {
    const url = "api/users/";
    axios
      .get(url)
      .then((res) => {
        setUserList(res.data.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getSingleUser = (id: string) => {
    const url = `/api/users/${id}`;
    axios
      .get(url)
      .then((res) => {
        setUser(res.data.user);
        console.log("res.data", res.data.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteUser = async (id: string, index: number) => {
    const url = `/api/users/${id}`;

    console.log("url", url);
    try {
      const newUserList = userList;
      const response = await axios.delete(url);
      console.log("index", index);
      newUserList.splice(index, 1);
      console.log("newUserList", newUserList);
      setUserList(newUserList);
      getPostList();
    } catch (error) {
      console.error(error);
    }
  };

  const createUser = async (data: InputsUser) => {
    try {
      const user = {
        name: data.name,
        email: data.email,
        password: data.password,
        role: "admin",
      };

      console.log("User", user);
      const newUserList = userList;
      const url = "/api/users/";
      const response: AxiosResponse<User> = await axios.post(
        url,
        JSON.stringify(user),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log("Response", response.data);
      newUserList.push(response.data);
      setUserList(newUserList);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ApiContext.Provider
      value={{
        postList,
        post,
        setPostList,
        getPostList,
        getSinglePost,
        createPost,
        deletePost,
        userList,
        user,
        setUserList,
        getUserList,
        getSingleUser,
        createUser,
        deleteUser,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export const useApiContext = () => useContext(ApiContext);

export function useApi() {
  const context = useContext(ApiContext);
  if (context === null) {
    throw new Error("useApi must be used within a ApiContextProvider");
  }
  return context;
}
