import React from "react"
import styled from "styled-components"
import ArticleSummary from "../sections/ArticleSummary"

function MainSection() {
    return (
        <Wrapper>
            < ArticleSummary date="09/09/2023" title="Exciting article"/> 
            < ArticleSummary date="09/09/2023" title="Exciting article"/>
            < ArticleSummary date="09/09/2023" title="Exciting article"/>
            < ArticleSummary date="09/09/2023" title="Exciting article"/>
        </Wrapper>
    )
}

export default MainSection

const Wrapper = styled.div` 
    display: grid;
    grid-template-columns: 390px auto; 
    justify-content: center; 

    width: 100%;

    gap: 100px 200px;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
    }
`
