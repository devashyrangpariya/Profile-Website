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
          <HomeLink href="/" colors={router?.pathname === "/" ? "#fa5b0f"  : "#fff"}>
            Home
          </HomeLink>
          <HomeLink
            href="/about"
            colors={router?.pathname === "/about" ? "#fa5b0f" : "#fff"}
          >
            About
          </HomeLink>
          <HomeLink
            href="/services"
            colors={router?.pathname === "/services" ? "#fa5b0f" : "#fff"}
          >
            Services
          </HomeLink>
          {/* <HomeLink
            href="/portofio"
            colors={router?.pathname === "/portofio" ? "#fa5b0f" : "#fff"}
          >
            Portofio
          </HomeLink> */}
          <HomeLink
            href="/contact"
            colors={router?.pathname === "/contact" ? "#fa5b0f" : "#fff"}
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
    /* color: #000; */
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
  /* position: fixed; */
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
