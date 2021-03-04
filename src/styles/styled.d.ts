import 'styled-components';

interface Theme {
  title: string;
  colors: {
    box: string;
    background: string;
    text: string;
    title: string;
  };
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
