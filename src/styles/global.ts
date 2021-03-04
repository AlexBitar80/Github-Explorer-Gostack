import { createGlobalStyle } from 'styled-components';

import GithubBackgroundDark from '../assets/Github-dark.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props =>
      props.theme.colors
        .background} url(${GithubBackgroundDark}) no-repeat 70% top;
    --web-kit-font-smooth: antialiased;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  button {
    cursor: pointer;
  }
`;
