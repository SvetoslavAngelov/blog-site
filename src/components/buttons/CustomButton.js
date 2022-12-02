import React from "react"
import styled from "styled-components"
import { themes } from "../styles/ColorStyles"
import { Caption, MediumText } from "../styles/TextStyles"

export default function CustomButton() {
    return (
        <Wrapper>
            <Title>{"Contents"}</Title>
            <Separator />
            <Card>
                <Circle>
                    <Num>{"1"}</Num>
                </Circle>
                <Text>{"Start"}</Text>
            </Card>
        </ Wrapper>
    )
}

const Wrapper = styled.div`
    height: 124px;
    width: 300px;

    background: ${themes.lightMode.backgroundSecondary};

    display: flex;
    flex-direction: column; 
    align-items: flex-start; 

    border: 0.5px solid rgba(0,0,0,0.2);
    border-radius: 20px; 

    padding: 10px;
    gap: 10px; 
`
const Title = styled(Caption)`    
    height: 20px;
    width: 280px;

    text-transform: uppercase; 

    color: ${themes.lightMode.textSecondary};
`
const Separator = styled.div`
    height: 0.5px; 
    width: 280px; 

    background: ${themes.lightMode.textSecondary};
`
const Card = styled.div`
    height: 60px; 
    width: 280px;

    background: ${themes.lightMode.backgroundPrimary};

    border: 0.5px solid rgba(0, 207, 253, 0.2);
    border-radius: 20px; 

    display: flex; 
    flex-direction: row; 
    align-items: center; 

    padding: 10px; 
    gap: 10px; 
`
const Circle = styled.div`
    height: 36px;
    width: 36px;

    background: ${themes.lightMode.colorPrimary};

    border-radius: 100px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 10px;
    gap: 10px;
`
const Num = styled(MediumText)`
    height: 25px;
    width: 25px;

    color: #FFFFFF;

    display: flex;
    align-items: center;
    justify-content: center;
`
const Text = styled(MediumText)`
    height: 20px;

    color: ${themes.lightMode.textSecondary};
`