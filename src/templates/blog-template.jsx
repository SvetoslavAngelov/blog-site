import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import Title from "../components/layout/Title"
import SubTitle from "../components/layout/SubTitle"
import Body from "../components/layout/Body"
import Date from "../components/layout/Date"
import Image from "../components/layout/Image"
import Group from "../components/layout/Group"

const shortcodes = { Link, Title, Body, SubTitle, Date, Image, Group }

export default function PageTemplate({data, children}) {

    return (
        <Layout>
            <Seo  title = {data.mdx.frontmatter.title} />
            <MDXProvider components = {shortcodes}>
                <Wrapper>
                    {children}
                </Wrapper>
            </MDXProvider>
        </Layout>
    )
}

const Wrapper = styled.div`
    display: flex; 
    flex-direction: column; 
    align-items: flex-start;

    gap: 10px;

    max-width: 1024px; 
`

export const query = graphql`
    query($id: String!) {
        mdx(id: {eq: $id}) {
            frontmatter {
                title
            }
        }
    }
`