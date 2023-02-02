import React from "react"
import styled from "styled-components"

export default function ArticleCard() {

    return (
        <Wrapper>
            <div className="cardBack" />
            <div className="cardFront" />
        </ Wrapper>
    )
}

const Wrapper = styled.div`
    position: relative; 

    * {
        transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    :hover div {
        &.cardBack {
            transform: rotateY(20deg) rotateX(30deg);
            transform-origin: top left; 
        }
    }

    .cardFront {
    position: absolute; 
    top: 0px;
    left: 0px; 

    width: 360px;
    height: 420px; 

    background: #FFEADE;
    border: 0.5px solid rgba(255, 255, 255, 0.5);
    box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(20px);

    border-radius: 0px 60px 60px 60px;
    }

    .cardBack {
    position: absolute; 
    top: 0px;
    left: 0px; 

    width: 360px;
    height: 420px;

    background: #FBBC99;
    backdrop-filter: blur(20px);

    transform: rotateY(20deg) rotateX(20deg);
    transform-origin: top left; 

    border-radius: 0px 60px 60px 60px;
    }
`