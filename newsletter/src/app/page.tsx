"use client"

import Image from "next/image";


import styled from 'styled-components';
import PostList from "./components/PostList";

const MeuComponente = styled.div`
color: purple;
`;

export default function Home() {
  return (
    <>
        <h2>Inicio</h2>
        <PostList/>
       
      
    </>
  );
}
