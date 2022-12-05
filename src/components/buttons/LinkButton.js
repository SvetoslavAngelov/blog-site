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
                    <Icon src="/images/icons/credit.svg" className = "icon" />
                    <Ring src="/images/icons/icon-ring.svg" />
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
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 
    0px 20px 40px rgba(23, 0, 102, 0.2), 
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);

    border-radius: 20px;

    display: grid; 
    grid-template-columns: 50px auto; 

    align-items: center;
    gap: 20px;
    
    // apply transition to all child elements, including the parent
    *, & {
        transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1); 
    }

    :hover {
        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 
        0px 30px 60px rgba(23, 0, 102, 0.5), 
        inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);

        transform: translateY(-3px);

        .icon {
            transform: scale(1.2)
        }
    }
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
    background: ${themes.lightMode.colorPrimary};
    border-radius: 50%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    position: relative; 

    ${Wrapper}:hover & {
        filter: hue-rotate(10deg) brightness(150%) saturate(120%);
    }
`
const Icon = styled.img`
    width: 30px;
    height: 30px; 
`
const Ring = styled.img`
    position: absolute; 
    top: -15px; 
    left: -16px; 

    ${Wrapper}:hover &{
        transform: rotate(30deg) scale(1.2) translate(1px, 1px);
    }
`