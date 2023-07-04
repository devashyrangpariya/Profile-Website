import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// styled
import styled from "styled-components";

export default function Navbar() {
  const router = useRouter();
  console.log("router", router?.pathname);

  return (
    <>
      <Header>
        <Logo>
          <Link href="/">
            <span>D</span>evashy
          </Link>
        </Logo>
        <Nav>
          <HomeLink
            href="/"
            colors={router?.pathname === "/" ? "#ec1839" : "#fff"}
          >
            Home
          </HomeLink>
          <HomeLink
            href="#About"
            // href="/About"
            colors={router?.pathname === "/About" ? "#ec1839" : "#fff"}
          >
            About
          </HomeLink>
          <HomeLink
            href="#Services"
            // href="/Services"
            colors={router?.pathname === "/Services" ? "#ec1839" : "#fff"}
          >
            Services
          </HomeLink>
          {/* <HomeLink
            href="#Portofio"
            href="/Portofio"
            colors={router?.pathname === "/Portofio" ? "#ec1839" : "#fff"}
          >
            Portofio
          </HomeLink> */}
          <HomeLink
            href="#Contact"
            // href="/Contact"
            colors={router?.pathname === "/Contact" ? "#ec1839" : "#fff"}
          >
            Contact
          </HomeLink>
        </Nav>
      </Header>
    </>
  );
}

const Nav = styled.nav`
  a {
    font-size: 1.7rem;
    margin-left: 4rem;
    transition: 0.3s;
  }
`;
const HomeLink = styled(Link)`
  color: ${({ colors }) => colors};
`;
const Logo = styled.div`
  font-size: 1.25rem;
  text-transform: capitalize;
  a {
    font-weight: 700;
    padding: 15px 20px;
    font-size: 30px;
    letter-spacing: 5px;
    color: var(--text-black-900);
  }
  span {
    font-family: "Clicker Script", cursive;
    font-size: 40px;
  }
`;
const Header = styled.header`
  top: 0;
  left: 0;
  width: 100%;
  padding: 2rem 9%;
  background: var(--bg-black-900);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
`;
