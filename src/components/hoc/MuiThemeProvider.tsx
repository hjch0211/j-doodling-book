import React from "react";
import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material/styles";

const DEFAULT_BOX_MODEL = { margin: 0, padding: 0 };
const FULL_SIZE = { height: "100%", width: "100%" };

let theme = createTheme({
  typography: {
    subtitle1: {
      fontSize: 12,
    },
    body1: {
      fontWeight: 500,
      letterSpacing: "2px",
    },
    button: {},
  },
  palette: {
    primary: {
      main: "#D9D9D9",
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "*": { ...DEFAULT_BOX_MODEL },
        "html, body": { ...FULL_SIZE },
      },
    },
  },
});

// 타이포그래피를 반응형으로 만듦
theme = responsiveFontSizes(theme);

// TS에서는 "커스텀 프로퍼티"를 추가하려면 declation 필요
declare module "@mui/material/styles" {
  interface Palette {
    neutral: Palette["primary"];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    neutral?: PaletteOptions["primary"];
  }
}

// Update the Button's color prop options
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    neutral: true;
  }
}

const MuiThemeProvider = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default MuiThemeProvider;
