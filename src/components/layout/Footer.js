import React from "react"
import styled from "styled-components"
import { themes } from "../styles/ColorStyles"

const socials = [
    {title: "", icon: "/images/logos/Twitter - Negative.svg", link: "404"},
    {title: "", icon: "/images/logos/LinkedIn - Negative.svg", link: "https://www.linkedin.com/in/svetoslavangelov86/"},
    {title: "", icon: "/images/logos/YouTube - Negative.svg", link: "404"},
    {title: "", icon: "/images/logos/Instagram - Negative.svg", link: "404"},
]

export default function Footer() {
    return (
        <Wrapper>
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
    justify-content: center;
    width: 100%;
    padding: 40px; 

    padding: 50px 100px 50px; 

    background: ${themes.lightMode.backgroundSecondary};

    @media (max-width: 420px) {
        padding: 50px 20px 50px;
    }
`
const MenuWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    align-self: center; 

    padding: 40px;
    gap: 40px; 
`