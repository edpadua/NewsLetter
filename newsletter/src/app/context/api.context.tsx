"use client"

import {Post, ApiContextType} from "../typesdata/typesdata"

import { createContext, useContext, useState ,useEffect } from "react";

import axios from "axios";

const ApiContext = createContext<ApiContextType | null>(null);

export const ApiContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [postList, setPostList] = useState<Post[]>([]);

    const [post, setPost] = useState<Post | null>(null);
    
    const getPostList = async () => {
        const url = `api/posts/`;
        axios
          .get(url)
          .then((res) => {
            setPostList(res.data.posts);
            console.log("res.data", res.data.posts);
          })
          .catch((err) => {
            console.log(err);
          });
    }

    useEffect(() => {
        
        getPostList()
    }, [])


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

    return (
        <ApiContext.Provider value={{ postList, post, setPostList, getPostList, getSinglePost}}>
            {children}
        </ApiContext.Provider>

        
    )
};

export const useApiContext = () => useContext(ApiContext);

export function useApi() {
    const context = useContext(ApiContext)
    if (context === null) {
      throw new Error('useApi must be used within a ApiContextProvider')
    }
    return context
  }