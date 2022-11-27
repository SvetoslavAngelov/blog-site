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
                    <LinkButton 
                        Title="Go to page"
                        Subtitle="If you dare" />
                </TextWrapper>
            </ContentWrapper>
        </Wrapper>
    )
}

export default MainSection

const Wrapper = styled.div` 
    background: ${themes.lightMode.backgroundPrimary};
`
const ContentWrapper = styled.div`
    max-width: 1340px;
    margin: 0 auto;
    padding: 100px 100px;
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