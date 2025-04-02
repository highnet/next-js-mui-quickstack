"use client";
import { createTheme, ThemeOptions } from "@mui/material/styles";
import { PaletteMode } from "@mui/material";

const getThemeOptions = (mode: PaletteMode): ThemeOptions => ({
  typography: {
    fontFamily: "var(--font-roboto)",
  },
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          background: {
            default: '#ffffff',
            paper: '#f5f5f5',
          },
        }
      : {
          background: {
            default: '#0a0a0a',
            paper: '#171717',
          },
        }),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: mode === 'light' ? '#ffffff' : '#0a0a0a',
          color: mode === 'light' ? '#171717' : '#ededed',
        },
      },
    },
  },
});

export const lightTheme = createTheme(getThemeOptions("light"));
export const darkTheme = createTheme(getThemeOptions("dark"));
