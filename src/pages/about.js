import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import { themes } from "../components/styles/ColorStyles"
import { BodyIntro, MediumText } from "../components/styles/TextStyles"
import Content from "../components/sections/Content"

export default function About() {

    return (
        <Layout>
        <Seo title="Blog" />
        <Wrapper>
            <Content />
            <Title>About me</ Title>
            <Image src="/images/assets/PlaceHolder.png" className = "placeholder"/>
            <Text src="/text/aboutMe.md" className="aboutMe"/>
        </ Wrapper>
        <Link to="/">Back to Home</Link>
      </Layout>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start; 

    gap: 10px;

    background: ${themes.lightMode.backgroundPrimary};
`
const Image = styled.img`
    max-width: 460px; 
    height: 360px;

    object-fit: cover; 
    
    @media (max-width: 420px) {
        max-width: 390px; 
    }
`
const Title = styled(BodyIntro)`
    max-width: 460px; 
    color: ${themes.lightMode.textSecondary};

    @media (max-width: 1024) {
        max-width: 380px;
        padding: 10px; 
    }

    @media (max-width: 420px) {
        max-width: 380px;
        padding: 10px; 
    }
`
const Text = styled(MediumText)`
    max-width: 460px; 
    color: ${themes.lightMode.textSecondary};

    @media (max-width: 1024) {
        max-width: 380px;
        padding: 10px; 
    }

    @media (max-width: 420px) {
        max-width: 380px;
        padding: 10px; 
    }
`