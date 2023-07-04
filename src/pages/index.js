import Head from "next/head";
import Main from "../layout/Home";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Home1>
        <Main />
      </Home1>
    </>
  );
}

const Home1 = styled.div`
  background-color: #151515;
  /* height: 100vh; */
`;
