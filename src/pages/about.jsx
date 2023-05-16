import React from "react";
import Navbar from "../components/Navbar";

// Styled
import styled from "styled-components";

// Typewriter
import Typewriter from "typewriter-effect";

export default function About() {
  return (
    <>
      <Navbar />

      <Section>
        <Container>
          <Row>
            <SectionTitle>
              <H2>About me</H2>
            </SectionTitle>
          </Row>
          <Row>
            <AboutContent>
              <Row>
                <AboutText>
                  {/* <Span>
                    I`m Devashy Rangpariya
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
                  </Span> */}
                  <H3>
                    I`m Devashy Rangpariya <span>Frontend Developer</span>
                  </H3>

                  <P>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde, atque aliquam sint, officia ducimus nulla delectus
                    quia odit sunt vel quod eaque magnam laudantium mollitia
                    provident. Ducimus sint facere accusantium quam quos ea
                    temporibus laudantium maxime facilis unde quia veniam nihil
                    est blanditiis maiores sapiente sunt suscipit rerum
                    explicabo obcaecati, adipisci dolore consequatur
                    praesentium. Quos.
                  </P>
                </AboutText>
              </Row>
            </AboutContent>
          </Row>
          <Row>
            <PersonalInfo>
              <Row>
                <InfoItem>
                  <InfoItemP>
                    Birthday : <span>6 oct 2006</span>
                  </InfoItemP>
                </InfoItem>
                <InfoItem>
                  <InfoItemP>
                    Age : <span>17</span>
                  </InfoItemP>
                </InfoItem>
                <InfoItem>
                  <InfoItemP>
                    Website : <span>https://devashy.com.in</span>
                  </InfoItemP>
                </InfoItem>
                <InfoItem>
                  <InfoItemP>
                    Email : <span>info@gamil.com</span>
                  </InfoItemP>
                </InfoItem>
                <InfoItem>
                  <InfoItemP>
                    Degree : <span>Computer Engineering</span>
                  </InfoItemP>
                </InfoItem>
                <InfoItem>
                  <InfoItemP>
                    Phone : <span>+91 678 456 2345</span>
                  </InfoItemP>
                </InfoItem>
                <InfoItem>
                  <InfoItemP>
                    City : <span>Ahmedabad</span>
                  </InfoItemP>
                </InfoItem>
                <InfoItem>
                  <InfoItemP>
                    Freelnace : <span>Available</span>
                  </InfoItemP>
                </InfoItem>
                {/* <Row>
                  <Button>
                    <a href="devashy" download="devashy.png">
                      Download CV
                    </a>
                  </Button> 
                </Row> */}
              </Row>
            </PersonalInfo>
             <Skills>
              <Row>
                <SkillItem>
                  <H5>HTML</H5>
                  <Progress>
                    <ProgressIn ></ProgressIn>
                    <SkillPercent>96%</SkillPercent>
                  </Progress>
                </SkillItem>
                <SkillItem>
                  <H5>CSS</H5>
                  <Progress>
                    <ProgressIn ></ProgressIn>
                    <SkillPercent>90%</SkillPercent>
                  </Progress>
                </SkillItem>
                <SkillItem>
                  <H5>JS</H5>
                  <Progress>
                    <ProgressIn></ProgressIn>
                    <SkillPercent>50%</SkillPercent>
                  </Progress>
                </SkillItem>
                <SkillItem>
                  <H5>React Js</H5>
                  <Progress>
                    <ProgressIn></ProgressIn>
                    <SkillPercent>75%</SkillPercent>
                  </Progress>
                </SkillItem>
              </Row>
            </Skills>
          </Row>
        </Container>
      </Section>
    </>
  );
}
const SkillPercent = styled.div`
    position: absolute;
    right: 0;
    color: var(--text-black-900);
    top: -40px;
    font-weight: 400;
    line-height: 40px;
`;
const ProgressIn = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  border-radius: 4px;
  background-color: var(--skin-color);
`;
const Progress = styled.div`
  background-color: var(--bg-black-50);
  height: 7px;
  border-radius: 4px;
  width: 100%;
  position: relative;
`;
const H5 = styled.h5`
  line-height: 40px;
  font-weight: 600;
  font-size: 16px;
  color: var(--text-black-900);
  text-transform: capitalize;
`;
const SkillItem = styled.div`
  flex: 0 0 100%;
  max-width: 100%;
  margin-bottom: 25px;
  padding-left: 15px;
  padding-right: 15px;
`;
const Skills = styled.div`
  flex: 0 0 40%;
  max-width: 40%;
  margin-top: 40px;
  padding-left: 15px;
  padding-right: 15px;
`;

const InfoItemP = styled.p`
  font-weight: 600;
  padding: 10px 0;
  font-size: 16px;
  color: var(--text-black-900);
  border-bottom: 1px solid var(--bg-black-50);
  span {
    font-weight: 400;
    color: var(--text-black-700);
    margin-left: 4px;
    display: inline-block;
  }
`;
const InfoItem = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  padding-left: 15px;
  padding-right: 15px;
`;
const PersonalInfo = styled.div`
  flex: 0 0 60%;
  max-width: 60%;
  margin-top: 40px;
  padding-left: 15px;
  padding-right: 15px;
`;
const P = styled.p`
  font-size: 16px;
  line-height: 25px;
  color: var(--text-black-900);
`;
const H3 = styled.h3`
  font-size: 24px;
  margin-bottom: 15px;
  font-weight: 700;
  color: var(--text-black-900);
  span {
    color: var(--skin-color);
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

const AboutText = styled.div`
  flex: 0 0 100%;
  max-width: 100%;
  padding-left: 15px;
  padding-right: 15px;
`;
const AboutContent = styled.div`
  flex: 0 0 100%;
  max-width: 100%;
  padding-left: 15px;
  padding-right: 15px;
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
  padding-left: 15px;
  padding-right: 15px;
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
  /* overflow: hidden; */
`;
