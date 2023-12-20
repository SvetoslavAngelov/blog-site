import React from "react"
import styled from "styled-components"
import '@deckdeckgo/highlight-code';

export default function CodeBlock({ code }) {
    return (
        <Wrapper>
            <deckgo-highlight-code>
                <code slot="code">{code}</code>
            </deckgo-highlight-code>
        </Wrapper>
    )
}

const Wrapper = styled.div` 
    width: 100%;
    gap: 20px 100px;

    @media (max-width: 420px) {
        max-width: 390px; 
    }
`