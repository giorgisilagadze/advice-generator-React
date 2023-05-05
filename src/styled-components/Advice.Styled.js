import styled from "styled-components";


export const Container = styled.div`
    width: 343px;
    padding: 40px 24px 64px;
    background-color: #313A48;
    border-radius: 10px;

    @media(min-width: 1440px) {
        width: 540px;
        padding: 48px 48px 72px;
        border-radius: 15px;
    }

`

export const AdviceId = styled.p`
    text-align: center;
    font-size: 11px;
    line-height: 15.03px;
    letter-spacing: 3.46px;
    color: #53FFAA;

    @media(min-width: 1440px) {
        font-size: 13px;
        line-height: 17.76px;
        letter-spacing: 4.09px;
    }
`

export const AdviceTxt = styled(AdviceId)`
    font-size: 24px;
    line-height: 32.78px;
    letter-spacing: -0.26px;
    color: #CEE3E9;
    margin-top: 24px;

    @media(min-width: 1440px) {
        font-size: 28px;
        line-height: 38.25px;
        letter-spacing: -0.3px;
    }
`

export const Divider = styled.img`
    margin-top: 24px;

    @media(min-width: 1440px) {
        width: 444px;
        margin-top: 40px;
    }
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

    @media(min-width: 1440px) {
        cursor: grab;

        &:hover {
            box-shadow: 0px 0px 40px #53FFAA;
        }
    }
`