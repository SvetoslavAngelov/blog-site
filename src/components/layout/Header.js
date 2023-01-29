import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { themes } from "../styles/ColorStyles"
import { BodyMain, H3 } from "../styles/TextStyles"

const menuData = [
    {title: "Home", link: "/"}, 
    {title: "Blog", link: "/blog"}, 
    {title: "Projects", link: "/404"}, 
    {title: "About", link: "/404"}]

const socials = [
    {title: "", icon: "/images/logos/Twitter - Negative.svg", link: "404"},
    {title: "", icon: "/images/logos/LinkedIn - Negative.svg", link: "https://www.linkedin.com/in/svetoslavangelov86/"},
    {title: "", icon: "/images/logos/YouTube - Negative.svg", link: "404"},
    {title: "", icon: "/images/logos/Instagram - Negative.svg", link: "404"},
]

export default function Header() {

    return (
        <Wrapper>
            <Title>Svetlo</Title>
            <MenuWrapper>
                {menuData.map((item, index) => (
                    <Link to={item.link} key={index} >
                        <MenuText>
                            {item.title}
                        </ MenuText>                        
                    </ Link>
                ))}
            </ MenuWrapper>
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
    justify-content: space-between;
    align-items: center; 
    width: 100%;
    padding: 10px; 

    max-height: 100px; 
`
const MenuWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    align-self: flex-end; 

    height: 80px;
    padding: 10px;
    gap: 40px; 
`
const MenuText = styled(BodyMain)`
    color: ${themes.lightMode.textSecondary};

    :hover {
        text-decoration: underline;
    }
`
const Title = styled(H3)`
    display: flex;
    flex-direction: row;
    align-items: center; 

    height: 80px;
    color: ${themes.lightMode.textSecondary};
`