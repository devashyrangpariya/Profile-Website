import React from "react";
import Navbar from "../components/Navbar";

// Styled
import styled from "styled-components";

// react icone
import { FaPhone, FaEnvelope, FaGlobeEurope } from "react-icons/fa";
import { BiMap } from "react-icons/Bi";

export default function contact() {
  return (
    <>
      <Navbar />

      <Section>
        <Container>
          <Row>
            <SectionTitle>
              <H2>Contact</H2>
            </SectionTitle>
          </Row>
          {/* <H3>Have you Any Questions ?</H3>
          <H4>I`M AT YOUR SERVICES</H4>

          <Row>
            <CntactInfoItem>
              <Icone>
                <FaPhone />
              </Icone>
              <h4>Call Us On</h4>
              <p>+91 3330545218</p>
            </CntactInfoItem>
            <CntactInfoItem>
              <Icone>
                <BiMap />
              </Icone>
              <h4>Call Us On</h4>
              <p>+91 3330545218</p>
            </CntactInfoItem>
            <CntactInfoItem>
              <Icone>
                <FaEnvelope />
              </Icone>
              <h4>Call Us On</h4>
              <p>+91 3330545218</p>
            </CntactInfoItem>
            <CntactInfoItem>
              <Icone>
                <FaGlobeEurope />
              </Icone>
              <h4>Call Us On</h4>
              <p>+91 3330545218</p>
            </CntactInfoItem>
          </Row> */}
          <H3>SEND ME AN EMAIL</H3>
          <H4>I`M VERY RESPOSTVE TO MESSAGES</H4>

          {/*  === Contact form ===   */}

          <Row>
            <ContactForm>
              <Row>
                <FormItem6>
                  <FormGroup>
                    <input type="text" placeholder="Name" />
                  </FormGroup>
                </FormItem6>
                <FormItem6>
                  <FormGroup>
                    <input type="email" placeholder="Email" />
                  </FormGroup>
                </FormItem6>
              </Row>

              <Row>
                <FormItem>
                  <FormGroup>
                    <input type="text" placeholder="Subject" />
                  </FormGroup>
                </FormItem>
              </Row>

              <Row>
                <FormItem>
                  <FormGroup>
                    <textarea placeholder="Message"></textarea>
                  </FormGroup>
                </FormItem>
              </Row>

              <Row>
                <FormItem>
                  <button type="submit">Send Message</button>
                </FormItem>
              </Row>
            </ContactForm>
          </Row>
        </Container>
      </Section>
    </>
  );
}

const FormGroup = styled.div`
  input {
    width: 100%;
    height: 50px;
    border-radius: 25px;
    background: var(--bg-black-100);
    border: 1px solid var(--bg-black-50);
    padding: 10px 25px;
    font-size: 16px;
    color: var(--text-black-700);
    transition: all 0.3s ease;
    :focus{

      box-shadow: 0 0 20px rgba(168, 168, 168, 0.074);
    }
  }

  textarea {
    width: 100%;
    height: 50px;
    border-radius: 25px;
    background: var(--bg-black-100);
    border: 1px solid var(--bg-black-50);
    padding: 10px 25px;
    font-size: 16px;
    color: var(--text-black-700);
    transition: all 0.3s ease;
    height: 140px;
  }

`;

const FormItem = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  flex: 0 0 100%;
  max-width: 100%;
  margin-bottom: 30px;
  button {
    font-size: 16px;
    font-weight: 500;
    padding: 12px 35px;
    color: #fff;
    border-radius: 40px;
    display: inline-block;
    white-space: nowrap;
    border: none;
    background: var(--skin-color);
    transition: all 0.3s ease;
    height: 50px;
    padding: 0 50px;
    :hover {
      transform: scale(1.05);
    }
  }
`;

const FormItem6 = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  flex: 0 0 50%;
  max-width: 50%;
  margin-bottom: 30px;
`;
const ContactForm = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  flex: 0 0 100%;
  max-width: 100%;
`;

const Icone = styled.div`
  display: inline-block;
  font-size: 25px;
  color: var(--skin-color);
`;

const CntactInfoItem = styled.div`
  flex: 0 0 25%;
  max-width: 25%;
  text-align: center;
  margin-bottom: 60px;
  padding-left: 15px;
  padding-right: 15px;
  h4 {
    font-size: 18px;
    font-weight: 700;
    color: var(--text-black-900);
    text-transform: capitalize;
    margin: 15px 0 5px;
  }
  p {
    font-size: 16px;
    line-height: 25px;
    color: var(--text-black-700);
    font-weight: 400;
  }
`;

const H4 = styled.h4`
  padding-left: 15px;
  padding-right: 15px;
  color: var(--text-black-900);
  text-align: center;
  font-size: 15px;
  margin-bottom: 60px;
`;

const H3 = styled.h3`
  padding-left: 15px;
  padding-right: 15px;
  color: var(--skin-color);
  text-align: center;
  font-size: 25px;
  margin-bottom: 20px;
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
