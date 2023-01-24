import React from "react";
import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material/styles";
import { configMuiTypography } from "./configMuiTypography";
import { configMuiPalette } from "./configMuiPalette";
import { configMuiBreakpoints } from "./configMuiBreakpoints";
import { configMuiComponents } from "./configMuiComponents";

let theme = createTheme({
  typography: { ...configMuiTypography },
  palette: { ...configMuiPalette },
  breakpoints: { ...configMuiBreakpoints },
  components: { ...configMuiComponents },
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
