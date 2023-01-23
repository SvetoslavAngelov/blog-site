import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"

const menuData = [
    {title: "Home", link: "index"}, 
    {title: "Blog", link: "404"}, 
    {title: "Projects", link: "404"}, 
    {title: "About", link: "404"}]

const socials = [
    {title: "", icon: "/images/icons/twitter.svg", link: "404"},
    {title: "", icon: "/images/icons/twitter.svg", link: "404"},
    {title: "", icon: "/images/icons/twitter.svg", link: "404"},
    {title: "", icon: "/images/icons/twitter.svg", link: "404"},
]

export default function Header() {
    return (
        <Wrapper>
            <Padding />
            <MenuWrapper>
                {menuData.map((item, index) => (
                    <Link to={item.link} key={index}>
                    {item.title}
                    </ Link>
                ))}
            </ MenuWrapper>
            <Padding />
            <MenuWrapper>
                {socials.map((item, index) => (
                    <Link to={item.link} key={index}>
                        <img src={item.icon} alt={item.title}/>
                        {item.title}
                    </ Link>
                ))}
            </ MenuWrapper>
        </ Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex; 
    flex-direction: row; 
    align-items: flex-start; 
    padding: 10px; 
    gap: 10px; 
    
    width: 1240px;
    height: 100px; 
`
const Padding = styled.div`
    width: 160px; 
`
const MenuWrapper = styled.div`
    display: flex;
    flex-direction: row; 
    align-items: flex-start; 

    padding: 10px;
    gap: 40px; 
`