"use client"

import Image from "next/image";


import styled from 'styled-components';
import PostList from "./components/PostList";

const MeuComponente = styled.div`
color: purple;
`;

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h2>Inicio</h2>
        <PostList/>
       
      
    </main>
  );
}
