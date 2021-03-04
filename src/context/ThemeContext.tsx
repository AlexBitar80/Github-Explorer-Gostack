import React, { createContext, ReactNode } from 'react';
import {
  DefaultTheme,
  ThemeProvider as StyledComponentThemeProvider,
} from 'styled-components';
import usePersistedState from '../hooks/usePersistedState';

import DarkTheme from '../styles/themes/DarkTheme';
import LightTheme from '../styles/themes/LightTheme';

interface ThemeContextData {
  toggleTheme: () => void;
}

interface ThemeContextProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext({} as ThemeContextData);

export function ThemeProvider({ children }: ThemeContextProviderProps) {
  const [theme, setTheme] = usePersistedState<DefaultTheme>(
    '@GithubExplorer:theme',
    LightTheme,
  );

  function toggleTheme() {
    setTheme(theme.title === 'light' ? DarkTheme : LightTheme);
  }

  return (
    <ThemeContext.Provider
      value={{
        toggleTheme,
      }}
    >
      <StyledComponentThemeProvider theme={theme}>
        {children}
      </StyledComponentThemeProvider>
    </ThemeContext.Provider>
  );
}
