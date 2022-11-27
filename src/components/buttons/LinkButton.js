import React from "react"
import styled from "styled-components"
import { BodyMain } from "../styles/TextStyles"
import { themes } from "../styles/ColorStyles"
import { Link } from "gatsby"

export default function LinkButton(props) {
    return (
        <Link to="/page-2">
            <Wrapper>
                <Title>{props.Title || "Default"}</Title>
                <Subtitle>{props.Subtitle || "Default"}</ Subtitle>
            </ Wrapper>
        </ Link>
    )
}

const Wrapper = styled.div`
    width: 280px; 
    height: 70px;

    padding: 12px;
    
    background: linear-gradient(180deg, #FFFFFF 0%, #D9DFFF 100%);
    border-radius: 20px;
`
const Title = styled(BodyMain)`
    color: ${themes.lightMode.textSecondary};
`
const Subtitle = styled(BodyMain)`
    color: ${themes.lightMode.textSecondary}
`