import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { themes } from "../styles/ColorStyles"
import { BodyMain, H3 } from "../styles/TextStyles"

const menuData = [
    {title: "Blog", link: "/blog"}, 
    {title: "Projects", link: "/projects"}, 
    {title: "About", link: "/aboutme"}
]

export default function Header() {

    return (
        <Wrapper>
            <Link to="/">
                <Title>Svetlo</Title>
                <Icon src="/images/assets/Profile.png" className = "home" />
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

    max-width: 46px; 
    max-height: 46px;

    object-fit: cover; 

    border-radius: 50%;

    @media (min-width: 769px) {
        display: none; 
    }
`