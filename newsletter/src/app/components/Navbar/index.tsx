import React from "react";

import tw from "tailwind-styled-components";

import Link from "next/link";

import { FaRegNewspaper } from "react-icons/fa6";

const Nav = tw.nav`
    bg-slate-800
    top-0 
    left-0 
    right-0 
    w-full 
    h-20 
    pt-5
`;

const NavContainer = tw.div`
    px-16 
    flex 
    text-white
    flex-auto
    gap-4
`;

const MenuContainer = tw.div`
    flex gap-2 justify-center mt-2
`;

function Navbar() {
  return (
    <Nav>
      <NavContainer>
        <FaRegNewspaper style={{ fontSize: "40px", color: "#ffffff" }} />
        <MenuContainer>
          <Link href="/">Blog</Link>
          <Link href="/admin">Admin</Link>
        </MenuContainer>
      </NavContainer>
    </Nav>
  );
}

export default Navbar;
