import React from "react"
import styled from "styled-components"
import { BodyMain } from "../styles/TextStyles"
import { themes } from "../styles/ColorStyles"

export default function Body(props) {

    return (
        <div>
            <Style>{props.children}</ Style>
        </div>
    )
}

const Style = styled(BodyMain)`
    text-indent: 25px;
    max-width: 1024px; 
    color: ${themes.lightMode.textPrimary};

    @media (max-width: 1024) {
        max-width: 380px;
        padding: 10px; 
    }

    @media (max-width: 420px) {
        max-width: 380px;
        padding: 10px; 
    }
`