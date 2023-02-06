import { Link } from "gatsby"
import React, {useState} from "react"
import styled from "styled-components"
import { themes } from "../styles/ColorStyles"
import { BodyMain, H3 } from "../styles/TextStyles"
import MenuTooltip from "../tooltips/MenuTooltip"

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

    const [isOpen, setIsOpen] = useState(false)

    return (
        <Wrapper>
            <Link to="/">
                <Title>Svetlo</Title>
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
            <MenuWrapper>
                {socials.map((item, index) => (
                    <a href={item.link} key={index}>
                        <img src={item.icon} alt={item.title}/>
                        {item.title}
                    </ a>
                ))}
            </ MenuWrapper>
            < Contents src="/images/assets/Hamburger.svg" className = "Hamburger" onClick = {() => setIsOpen(!isOpen)}/>
            < MenuTooltip isOpen={isOpen}/> 
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

    @media (max-width: 768px) {
        display: none;
    }
`
const MenuText = styled(BodyMain)`
    color: ${themes.lightMode.textPrimary};

    :hover {
        text-decoration: underline;
    }
`
const Title = styled(H3)`

    color: ${themes.lightMode.textPrimary};
`
const Contents = styled.img`

    width: 48px; 
    height: 48px; 

    :hover {
        transform: scale(1.1);
        transition: 0.2s;
    }

    @media (min-width: 768px) {
        display: none;
    }
`