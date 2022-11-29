import React from "react"
import styled from "styled-components"
import { BodyMain, SmallText } from "../styles/TextStyles"
import { themes } from "../styles/ColorStyles"
import { Link } from "gatsby"

export default function LinkButton(props) {
    return (
        <Link to="/page-2">
            <Wrapper>
                <IconWrapper>
                    <Icon src="src/images/icons/credit.svg" />
                    <Ring src="/src/images/icons/icon-ring.svg"/>
                </IconWrapper>
                <TextWrapper>
                    <Title>{props.Title || "Default"}</Title>
                    <Subtitle>{props.Subtitle || "Default"}</ Subtitle>
                </ TextWrapper>
            </ Wrapper>
        </ Link>
    )
}

const Wrapper = styled.div`
    width: 280px; 
    height: 70px;

    padding: 12px;
    
    background: linear-gradient(180deg, #FFFFFF 0%, #D9DFFF 100%);
    border-radius: 20px;

    display: grid; 
    grid-template-columns: 50px auto; 

    align-items: center;
    gap: 20px;
`
const TextWrapper = styled.div`
    display: grid; 
    gap: 4px;
`
const Title = styled(BodyMain)`
    color: ${themes.lightMode.textSecondary};
`
const Subtitle = styled(SmallText)`
    color: ${themes.lightMode.textSecondary}
`
const IconWrapper = styled.div`
    width: 45px;
    height: 45px; 
    background: ${themes.lightMode.backgroundSecondary};
    border-radius: 50%;
    display: grid; 
    // justify = horizontal
    justify-content: center;

    // align = vertical
    align-content: center;
`

const Icon = styled.img`
    width: 30px;
    height: 30px; 
`
const Ring = styled.img`

`