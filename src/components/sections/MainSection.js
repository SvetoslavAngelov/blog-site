import React from "react"
import styled from "styled-components"
import { themes } from "../styles/ColorStyles"
import { BodyMain, H1 } from "../styles/TextStyles"
import LinkButton from "../buttons/LinkButton"

function MainSection() {
    return (
        <Wrapper>
            <ContentWrapper>
                <TextWrapper>
                    <Title>Hi people</Title>
                    <Description>Welcome to my blog site under construction.</Description>
                    <LinkButton />
                </TextWrapper>
            </ContentWrapper>
        </Wrapper>
    )
}

export default MainSection

const Wrapper = styled.div` 
    
`
const ContentWrapper = styled.div`
    max-width: 1240px;
    margin: 0 auto;

    display: grid; 
    grid-template-columns: 360px auto;
`
const TextWrapper = styled.div`
    max-width: 360px;
    display: grid; 
    gap: 30px; 
`
const Title = styled(H1)`
    color: ${themes.lightMode.textSecondary};
`
const Description = styled(BodyMain)`
    color: ${themes.lightMode.textSecondary}
`