import React from "react";

import tw from "tailwind-styled-components";

import Link from "next/link";

const Nav = tw.nav`
    bg-slate-800
    top-0 
    left-0 
    right-0 
    w-full 
    h-20 
    pt-6
`;

const NavContainer = tw.div`
    px-16 
    flex 
    text-white
    flex-auto
`;

function Navbar() {
  return (
    <Nav>
      <NavContainer>
        <Link href="/">Blog</Link>
        <Link href="/admin">Admin</Link>
      </NavContainer>
    </Nav>
  );
}

export default Navbar;
