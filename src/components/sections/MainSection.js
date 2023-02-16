import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import ArticleSummary from "../sections/ArticleSummary"

function MainSection() {

    const data = useStaticQuery(graphql`
        query {
            allMdx {
                nodes {
                    frontmatter {
                        date, 
                        slug
                    }
                }
            }
        }
    `);

    const nodes = data.allMdx.nodes.map((node) => 
        <ArticleSummary 
            date = {node.frontmatter.date}
            title = {node.frontmatter.slug} />
    )

    return (
        <Wrapper>
            {nodes}
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
