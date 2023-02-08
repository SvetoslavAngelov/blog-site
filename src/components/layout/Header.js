import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { themes } from "../styles/ColorStyles"
import { BodyMain, H3 } from "../styles/TextStyles"

const menuData = [
    {title: "Blog", link: "/blog"}, 
    {title: "Projects", link: "/404"}, 
    {title: "About", link: "/404"}
]

const socials = [
    {title: "", icon: "/images/logos/Twitter - Negative.svg", link: "404"},
    {title: "", icon: "/images/logos/LinkedIn - Negative.svg", link: "https://www.linkedin.com/in/svetoslavangelov86/"},
    {title: "", icon: "/images/logos/YouTube - Negative.svg", link: "404"},
    {title: "", icon: "/images/logos/Instagram - Negative.svg", link: "404"},
]

export default function Header() {

    return (
        <Wrapper>
            <Link to="/">
                <Title>Svetlo</Title>
                <Icon src="/images/assets/Home.svg" className = "home" />
            </ Link>
            <MenuWrapper>
                {menuData.map((item, index) => (
                    <Link to={item.link} key={index} >
                        <MenuText>
                            {item.title}
                        </ MenuText>                        
                    </ Link>
                ))}
            </ MenuWrapper>
            <SocialsWrapper>
                {socials.map((item, index) => (
                    <a href={item.link} key={index}>
                        <img src={item.icon} alt={item.title}/>
                        {item.title}
                    </ a>
                ))}
            </ SocialsWrapper>
        </ Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex; 
    flex-direction: row; 
    justify-content: space-between;
    align-items: center; 
    width: 100%;

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
    align-self: flex-end; 

    padding: 10px;
    gap: 40px; 
`
const MenuText = styled(BodyMain)`
    color: ${themes.lightMode.textPrimary};

    :hover {
        text-decoration: underline;
    }
`
const Title = styled(H3)`

    color: ${themes.lightMode.textPrimary};

    @media (max-width: 768px) {
        display: none; 
    }
`
const Icon = styled.img`

    width: 46px; 
    height: 46px;

    @media (min-width: 769px) {
        display: none; 
    }
`

const SocialsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    align-self: flex-end; 

    padding: 10px;
    gap: 40px; 

    @media (max-width: 768px) {
        display: none;
    }
`