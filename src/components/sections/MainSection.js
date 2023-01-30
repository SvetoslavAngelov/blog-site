import React from "react"
import styled from "styled-components"
import ArticleSummary from "../sections/ArticleSummary"

function MainSection() {
    return (
        <Wrapper>
            < ArticleSummary /> 
            < ArticleSummary /> 
        </Wrapper>
    )
}

export default MainSection

const Wrapper = styled.div` 
    display: flex; 
    flex-direction: row; 
    justify-content: space-between;
    align-content: center; 

    width: 100%; 
    padding: 10px; 
    gap: 100px;

`
