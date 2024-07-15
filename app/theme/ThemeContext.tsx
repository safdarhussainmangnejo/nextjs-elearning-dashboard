'use client'
import { createTheme, ThemeProvider, useMediaQuery } from '@mui/material';
import { createContext, ReactNode, useContext, useMemo, useState } from 'react';

interface ThemeContextType {
  toggleTheme: () => void;
  themeMode: 'light' | 'dark';
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>(
    prefersDarkMode ? 'dark' : 'light'
  );

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeMode,
          ...(themeMode === 'light'
            ? {
                background: {
                  default: '#ffffff',
                  paper: '#ffffff',
                },
                text: {
                  primary: '#000000',
                  secondary: '#000000',
                },
              }
            : {
                background: {
                  default: '#1F2937',
                  paper: '#1F2937',
                },
                text: {
                  primary: '#ffffff',
                  secondary: '#ffffff',
                },
              }),
        },
      }),
    [themeMode]
  );

  return (
    <ThemeContext.Provider value={{ toggleTheme, themeMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeContextProvider');
  }
  return context;
};