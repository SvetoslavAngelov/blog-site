import React from "react"
import styled from "styled-components"
import { themes } from "../styles/ColorStyles"
import { BodyMain } from "../styles/TextStyles"

const socials = [
    {title: "", icon: "/images/logos/Twitter - Negative.svg", link: "404"},
    {title: "", icon: "/images/logos/LinkedIn - Negative.svg", link: "https://www.linkedin.com/in/svetoslavangelov86/"},
    {title: "", icon: "/images/logos/YouTube - Negative.svg", link: "404"},
    {title: "", icon: "/images/logos/Instagram - Negative.svg", link: "404"},
]

export default function Footer() {
    return (
        <Wrapper>
            <FooterText>
                {"Connect:"}
            </ FooterText>
            <MenuWrapper>
                {socials.map((item, index) => (
                    <a href={item.link} key={index}>
                        <img src={item.icon} alt={item.title}/>
                        {item.title}
                    </ a>
                ))}
            </ MenuWrapper>
        </ Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex; 
    flex-direction: row; 
    align-items: center; 
    width: 100%;
    padding: 10px; 

    padding: 50px 100px 50px; 

    background: ${themes.lightMode.backgroundSecondary};
`
const MenuWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    align-self: flex-end; 

    padding: 10px;
    gap: 40px; 
`

const FooterText = styled(BodyMain)`
    color: ${themes.lightMode.textPrimary};
`
