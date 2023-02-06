import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { themes } from "../styles/ColorStyles"
import { BodyMain} from "../styles/TextStyles"

const menuData = [
    {title: "Home", link: "/"}, 
    {title: "Blog", link: "/blog"}, 
    {title: "Projects", link: "/404"}, 
    {title: "About", link: "/404"}]

export default function MenuTooltip(props) {

    const { isOpen } = props

    return  <Wrapper isOpen = {isOpen}>
                {menuData.map((item, index) => (
                    <Link to={item.link} key={index} >
                        <MenuText>
                            {item.title}
                        </ MenuText>                        
                    </ Link>
                ))}
            </ Wrapper>
}

const Wrapper = styled.div`
    
    position: absolute; 
    top: 100px; 
    right: 50px;

    display: flex; 
    flex-direction: column; 
    padding: 20px; 
    gap: 20px; 

    min-width: 150px;

    z-index: 1;
    
    display: ${props => (props.isOpen ? "block" : "none")};

    background: ${themes.lightMode.backgroundPrimary};
    box-shadow: 0px 0.5px 1px ${themes.lightMode.textPrimary};
`
const MenuText = styled(BodyMain)`
    color: ${themes.lightMode.textPrimary};

    :hover {
        text-decoration: underline;
    }
`