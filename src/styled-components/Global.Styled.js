import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        font-family: 'Manrope', sans-serif;
        font-weight: 800;
    }

    body {
        height: 100vh;
        background-color: #202733;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`