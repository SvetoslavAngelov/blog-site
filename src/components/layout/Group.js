import React from "react"
import styled from "styled-components"

export default function Group(props) {

    return (
        <Wrapper>{props.children}</ Wrapper>
    )
}

const Wrapper = styled.div` 
    display: grid;
    grid-template-columns: 390px auto; 
    justify-content: center; 

    width: 100%;

    gap: 20px 100px;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
    }
`