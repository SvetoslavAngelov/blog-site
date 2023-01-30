import React from "react"
import styled from "styled-components"
import { themes } from "../styles/ColorStyles"
import { BodyIntro, Caption } from "../styles/TextStyles"

export default function ArticleSummary({date = "26/01/2023", title = "Title"}) {
    return (
        <Wrapper>
            <Card> 
                <Title>
                    {title}
                </ Title>
                <Date>
                    {date}
                </ Date>
            </ Card>
        </Wrapper>
    )
}

const Wrapper = styled.div`

`
const Card = styled.div`
    display: flex; 
    flex-direction: column; 
    align-items: flex-start; 

    padding: 10px; 
    gap: 10px; 

    width: 340px;
    height: 400px; 

    background: #f4fbff; 
    box-shadow: 0.5px 1px 2px rgba(0, 0, 0, 0.25);

    border-radius: 20px; 
`

const Date = styled(Caption)`
    color: ${themes.lightMode.textSecondary};
`

const Title = styled(BodyIntro)`
    color: ${themes.lightMode.textSecondary};
`