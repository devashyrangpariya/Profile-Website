import React from "react";
import Navbar from "../components/Navbar";

// Styled
import styled from "styled-components";

import {
  FaMobileAlt,
  FaLaptopCode,
  FaPalette,
  FaSearch,
  FaBullhorn,
} from "react-icons/fa";
import { FiCode } from "react-icons/fi";

export default function Services() {
  return (
    <>
      {/* <Navbar /> */}
      <Section id="Services">
        <Container>
          <Row>
            <SectionTitle>
              <H2>Services</H2>
            </SectionTitle>
          </Row>
          <Row>
            <ServicesItem>
              <ServicesItemInner>
                <Icone>
                  <FaMobileAlt />
                </Icone>
                <H4>Web Design</H4>
                <P>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  quis velit odio!
                </P>
              </ServicesItemInner>
            </ServicesItem>

            <ServicesItem>
              <ServicesItemInner>
                <Icone>
                  <FaLaptopCode />
                </Icone>
                <H4>Web Design</H4>
                <P>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  quis velit odio!
                </P>
              </ServicesItemInner>
            </ServicesItem>

            <ServicesItem>
              <ServicesItemInner>
                <Icone>
                  <FaPalette />
                </Icone>
                <H4>Web Design</H4>
                <P>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  quis velit odio!
                </P>
              </ServicesItemInner>
            </ServicesItem>

            <ServicesItem>
              <ServicesItemInner>
                <Icone>
                  <FiCode />
                </Icone>
                <H4>Web Design</H4>
                <P>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  quis velit odio!
                </P>
              </ServicesItemInner>
            </ServicesItem>

            <ServicesItem>
              <ServicesItemInner>
                <Icone>
                  <FaSearch />
                </Icone>
                <H4>Web Design</H4>
                <P>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  quis velit odio!
                </P>
              </ServicesItemInner>
            </ServicesItem>

            <ServicesItem>
              <ServicesItemInner>
                <Icone>
                  <FaBullhorn />
                </Icone>
                <H4>Web Design</H4>
                <P>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  quis velit odio!
                </P>
              </ServicesItemInner>
            </ServicesItem>
          </Row>
        </Container>
      </Section>
    </>
  );
}

const P = styled.p`
  font-size: 16px;
  color: var(--text-black-700);
  line-height: 25px;
`;
const H4 = styled.h4`
  font-size: 18px;
  margin-bottom: 15px;
  color: var(--text-black-900);
  font-weight: 700;
  text-transform: capitalize;
`;
const Icone = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  display: block;
  margin: 0 auto 30px;
  text-align: center;
  transition: all 0.3s ease;
  font-size: 40px;
  line-height: 60px;
  color: var(--skin-color);
  transition: all 0.3s ease;
  :hover {
    background: var(--skin-color);
    font-size: 25px;
    color: #ffffff;
  }
`;
const ServicesItemInner = styled.div`
  background-color: var(--bg-black-100);
  border: 1px solid var(--bg-black-50);
  border-radius: 10px;
  padding: 30px 15px;
  text-align: center;
  transition: all 0.3s ease;
  :hover {
    box-shadow: 0 0 20px rgb(255 255 255 / 15%);
  }
`;
const ServicesItem = styled.div`
  flex: 0 0 33.33%;
  max-width: 33.33%;
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 30px;
`;

const H2 = styled.h2`
  font-size: 40px;
  color: var(--text-black-900);
  font-weight: 700;
  position: relative;
  ::before {
    content: "";
    height: 4px;
    width: 50px;
    background-color: var(--skin-color);
    position: absolute;
    top: 100%;
    left: 0;
  }
  ::after {
    content: "";
    height: 4px;
    width: 25px;
    background-color: var(--skin-color);
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: 8px;
  }
`;
const SectionTitle = styled.div`
  flex: 0 0 100%;
  max-width: 100%;
  margin-bottom: 60px;
`;
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-left: -15px;
  padding-right: -15px;
  position: relative;
`;
const Container = styled.div`
  padding-bottom: 40px;
  max-width: 1550px;
  width: 100%;
  margin: auto;
`;
const Section = styled.section`
  display: flex;
  padding: 2rem 9%;
  font-family: "Times New Roman", Times, serif;
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-black-900);
  background: var(--bg-black-900);
  height: 100vh;
`;
