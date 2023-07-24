import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import ArticleSummary from "../sections/ArticleSummary"

function MainSection() {

    const data = useStaticQuery(graphql`
        query {
            allMdx (filter: {frontmatter: {slug: {nin: "/aboutme"}}}){
                nodes {
                    frontmatter {
                        date,
                        title, 
                        slug,
                        featuredImage,
                        description
                    }
                }
            }
        }
    `);

    const nodes = data.allMdx.nodes.map((node) => 
        <Link to= {node.frontmatter.slug}>
            <ArticleSummary 
                date = {node.frontmatter.date}
                title = {node.frontmatter.title}
                text = {node.frontmatter.description}
                img = {node.frontmatter.featuredImage} />
        </Link>
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
