import React from "react"
import styled from "styled-components"
import { themes } from "../styles/ColorStyles"
import { BodyIntro, Caption, MediumText } from "../styles/TextStyles"

export default function ArticleSummary(
    {date = "26/01/2023", 
        title = "Title", 
        text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        img = "/images/assets/Profile.png"
    }) {
    return (
        <Wrapper>
            <Image src={img} className = "headline"/>
            <Title>
                {title}
            </ Title>
            <Date>
                {date}
            </ Date>
            <Text>
                {text}
            </ Text>
        </Wrapper>
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
const Date = styled(Caption)`
    max-width: 460px; 
    color: ${themes.lightMode.textSecondary};

    @media (max-width: 1024px) {
        max-width: 380px;
        padding: 10px; 
    }

    @media (max-width: 420px) {
        max-width: 380px;
        padding: 10px; 
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