import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  #root {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  html, body {
    background: #e9e9e9;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-weight: 300;
    font-size: 14px;
  }

  ul {
    list-style: none;
  }
`;
