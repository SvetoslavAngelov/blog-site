import React from "react"
import styled from "styled-components"
import ArticleSummary from "../sections/ArticleSummary"
import ArticleCard from "../animations/ArticleCard"

function MainSection() {
    return (
        <Wrapper>
            < ArticleSummary date="09/09/2023" title="Exciting article"/> 
            < ArticleCard />
        </Wrapper>
    )
}

export default MainSection

const Wrapper = styled.div` 
    display: flex;
    flex-direction: row; 
    align-items: center;
    flex-wrap: wrap;

    width: 100%;

    padding: 10px; 
    gap: 100px;

    @media (min-width: 768px) {
        flex-wrap: nowrap;
    }
`
