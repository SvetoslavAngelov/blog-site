import React from "react"
import styled from "styled-components"
import { Caption } from "../styles/TextStyles"
import { themes } from "../styles/ColorStyles"

export default function Image({src = "/images/assets/Profile.png", alt = "Image Name", desc = "Default"}) {

    return (
        <Wrapper>
            <Img src={src} alt={alt} />
            <Style>{desc}</Style>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  display: flex; 
  flex-direction: column; 
  justify-content: space-between;
  align-items: center; 
`

const Img = styled.img`
    max-width: 460px; 

    object-fit: cover; 
    
    @media (max-width: 420px) {
        max-width: 390px; 
    }
`

const Style = styled(Caption)`
    max-width: 460px; 
    color: ${themes.lightMode.textPrimary};

    @media (max-width: 420px) {
        max-width: 380px;
        padding: 10px; 
    }
`