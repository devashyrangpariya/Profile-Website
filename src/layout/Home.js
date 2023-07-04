import Home from "../pages/home";
import Navbar from "../components/Navbar";
import React from "react";
import styled from "styled-components";

export default function Main() {
  return (
    <>
      <Navbar />
      <Home />
      <Div>
        <p>@2023 Devashy</p>
        <p>Made With ❤️️ By Me.</p>
      </Div>
    </>
  );
}
const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1000px;
  height: 50px;
  margin: 0 400px 10px 400px;
  padding: 10px 150px 10px 150px;
  border-radius: 10px;
  background: #222222;
  p {
    color: #fff;
    font-size: 18px;
    font-weight: 700;
  }
`;
