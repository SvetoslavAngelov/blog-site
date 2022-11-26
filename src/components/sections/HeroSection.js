import React from "react"
import styled from "styled-components"
import { BodyMain, H1 } from "../styles/TextStyles"

function HeroSection() {
    return (
        <Wrapper>
            <ContentWrapper>
                <TextWrapper>
                    <Title>Hi people</Title>
                    <Description>Welcome to my blog site.</Description>
                </TextWrapper>
            </ContentWrapper>
        </Wrapper>
    )
}

export default HeroSection

const Wrapper = styled.div` 
    background: linear-gradient(180deg, #4316DB 0%, #9076E7 100%);
`
const ContentWrapper = styled.div`
    max-width: 380px;
    margin: 0 auto;
    padding: 200px 30px;
`
const TextWrapper = styled.div`
    max-width: 360px;
    display: grid; 
    gap: 30px; 
`
const Title = styled(H1)`
    color: white;
`
const Description = styled(BodyMain)``