import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --primary-color: hsl(167deg 36% 54%);
        --primary-dark-blue: hsl(205deg 41% 21%);
        --primary-grayish-dark-blue: hsl(245deg 10% 22%);
        --secondary-background: hsl(0deg 0% 98%);
        --secondary-text-field: hsl(240deg 2% 92%);
        --secondary-error: hsl(0deg 90% 57%)
    }

    /*
    1. Use a more-intuitive box-sizing model.
    */
    *, *::before, *::after {
        box-sizing: border-box;
    }

    * {
        margin: 0;
    }

    html, body {
        height: 100%;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: 'Public Sans', sans-serif;
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
    }

    img, picture, video, canvas, svg {
        display: block;
        max-width: 100%;
    }

    input, button, textarea, select {
        font: inherit;
    }

    p, h1, h2, h3, h4, h5, h6 {
        overflow-wrap: break-word;
    }

    #root, #__next {
        isolation: isolate;
    }
`;

export default GlobalStyles;
