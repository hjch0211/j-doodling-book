import React from "react";
import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material/styles";

// TS에서는 커스텀 프로퍼티를 추가하려면 declation 필요
let theme = createTheme({
  typography: {
    subtitle1: {
      fontSize: 12,
    },
    body1: {
      fontWeight: 500,
    },
    button: {
      fontStyle: "italic",
    },
  },
  palette: {
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
});

// 간단하게 타이포그래피 반응형으로 만들 수 있는 듯
theme = responsiveFontSizes(theme);

// 너무 귀찮아질 듯?
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

const MuiThemeProvider = (children: React.ReactNode) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default MuiThemeProvider;
