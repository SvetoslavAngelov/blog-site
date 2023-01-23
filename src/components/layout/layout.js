import React from "react"
import styled from "styled-components"
import { GlobalStyle } from "../styles/GlobalStyle"
import Header from "./Header"
import "./layout.css"

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <main>{children}</main>
      </ Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  display: flex; 
  flex-direction: column; 
  align-items: flex-start; 
  padding: 100px; 
  gap: 100px; 

  width: 1440px; 
`