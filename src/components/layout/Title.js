import React from "react"
import styled from "styled-components"
import { H2 } from "../styles/TextStyles"
import { themes } from "../styles/ColorStyles"

export default function Title(props) {

    return (
        <div>
            <Style>{props.children}</ Style>
        </div>
    )
}

const Style = styled(H2)`
    max-width: 1024px; 
    color: ${themes.lightMode.textPrimary};
    padding-top: 20px;
    padding-bottom: 50px; 

    @media (max-width: 1024) {
        max-width: 380px;
        padding: 10px; 
    }

    @media (max-width: 420px) {
        max-width: 380px;
        padding: 10px; 
    }
`