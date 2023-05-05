import styled from "styled-components";


export const Container = styled.div`
    width: 343px;
    padding: 40px 24px 64px;
    background-color: #313A48;
    border-radius: 10px;

`

export const AdviceId = styled.p`
    text-align: center;
    font-size: 11px;
    line-height: 15.03px;
    letter-spacing: 3.46px;
    color: #53FFAA;
`

export const AdviceTxt = styled(AdviceId)`
    font-size: 24px;
    line-height: 32.78px;
    letter-spacing: -0.26px;
    color: #CEE3E9;
    margin-top: 24px;
`

export const Divider = styled.img`
    margin-top: 24px;
`

export const DiceButt = styled.div`
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background-color: #53FFAA;
    margin: -32px auto 0px;
    display: flex;
    justify-content: center;
    align-items: center;
`