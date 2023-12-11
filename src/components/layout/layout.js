import React from "react"
import styled from "styled-components"
import { GlobalStyle } from "../styles/GlobalStyle"
import Header from "./Header"
import Footer from "./Footer"
import "./layout.css"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
deckDeckGoHighlightElement();

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <main>{children}</main>
        <Footer />
      </ Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  display: flex; 
  flex-direction: column; 
  justify-content: space-between;
  align-items: center; 
  gap: 100px; 

  width: 100%;
  min-height: 100vh;
`