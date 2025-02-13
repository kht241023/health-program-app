import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    body {
        color: #333;
        line-height: 1.6;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    h1, h2, h3 {
        color: #222;
    }

    button {
        background: linear-gradient(90deg, #007bff, #0056b3);
        color: white;
        padding: 10px 20px;
        border: none;
        cursor: pointer;
        transition: 0.3s;
        border-radius: 5px;
    }

    button:hover {
        opacity: 0.8;
    }

    #root {
        padding-top: 80px;
    }
`;

export default GlobalStyle;
