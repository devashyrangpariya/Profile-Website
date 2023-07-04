import React from 'react'
import Navbar from "../components/Navbar";

// Styled
import styled from "styled-components";

export default function Portofio() {
  return (
    <>
    {/* <Navbar /> */}

    <Section id="Portofio">
        <Container>
          <Row>
            <SectionTitle>
              <H2>Portofio</H2>
            </SectionTitle>
          </Row>
        </Container>
      </Section>
    </>
  )
}


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
