import Home from "../pages/home";
import Navbar from "../components/Navbar";
import React from "react";
import styled from "styled-components";
import About from "@/pages/about";

export default function Main() {
  return (
    <>
    <Navbar />
    <Home/>
    {/* <About /> */}
    </>
  );
}
