import React, { useEffect } from "react";
import Link from "next/link";

import Navbar from "../components/Navbar";
import devashy from "../../public/favicon.ico";

// Styled
import styled from "styled-components";

// Typewriter
import Typewriter from "typewriter-effect";

// react icone
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/Ai";

export default function home() {
  return (
    <>
      <Section>
        <HomeInfo>
          <H3>
            Hello, my name is <span>Devashy Rangpariya</span>
          </H3>
          <Span>
            I' m a
            <span>
              <Typewriter
                options={{
                  strings: [
                    "Frontend Developer",
                    "Web Designer",
                    "UI/UX Designer",
                    "Next js Developer",
                    "React js Developer",
                  ],
                  autoStart: true,
                  loop: true,
                  typeSpeed: 150,
                  backSpeed: 150,
                }}
              />
            </span>
          </Span>
          <P>
            I' m a web Desingner with extensive experience for over 1 years. My
            expertise is to create and website design,graphic design,and many
            more...
          </P>
          <SocialMedia>
            <a href="https://www.facebook.com/?react=AQB_qXzu7fQmv03WO9E">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <AiFillInstagram />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
          </SocialMedia>
          <Button>
            <a href={devashy} download="devashy">
              Download CV
            </a>
          </Button>
        </HomeInfo>

        <HomeImg>
          <img src="/devashy.png" alt="devashy" />
        </HomeImg>
      </Section>
    </>
  );
}

const Button = styled.button`
  display: inline-block;
  padding: 1rem 2.8rem;
  background: var(--skin-color);
  border-radius: 4rem;
  a {
    font-size: 1.6rem;
    letter-spacing: 0.1rem;
    font-weight: 600;
    color: #fff;
  }
`;
const Span = styled.span`
  display: flex;
  font-size: 28px;
  margin: 15px 0;
  /* justify-content: ; */
  span {
    padding: 0 0 0 0.19rem;
    color: var(--skin-color);
  }
`;
const HomeImg = styled.div`
  flex: 0 0 40%;
  max-width: 40%;
  text-align: center;
  position: relative;
`;
const SocialMedia = styled.div`
  a {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 4rem;
    background: transparent;
    border: 1px solid var(--skin-color);
    border-radius: 50%;
    font-size: 2rem;
    color: var(--skin-color);
    margin: 3rem 1.5rem 3rem 0;
    /* transition: .5s ; */
  }
  a:hover {
    background: var(--skin-color);
    color: #fff;
    box-shadow: 0 0 1rem #671521;
  }
`;
const P = styled.p`
font-size: 20px;
  color: var(--text-black-900);
`;
const H3 = styled.h3`
  font-size: 28px;
  margin: 15px 0;
  span {
    /* padding: 0 0 0 2px; */
    font-size: 30px;
    font-weight: 700;
    color: var(--skin-color);
    font-family: "Clicker Script", cursive;
  }
`;

const HomeInfo = styled.div`
  flex: 0 0 60%;
  max-width: 60%;
  margin-top: 200px;
`;
const Section = styled.section`
  display: flex;
  padding: 2rem 9%;
  font-family: "Times New Roman", Times, serif;
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-black-900);
  background: var(--bg-black-900);
`;
