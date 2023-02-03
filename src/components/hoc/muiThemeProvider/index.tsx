import React from "react";
import { CssBaseline } from "@mui/material";
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

export const MuiThemeProvider = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>
    {/* css normalize */}
    <CssBaseline />
    {children}
  </ThemeProvider>
);
