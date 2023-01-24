import { Components } from "@mui/material";

export const configMuiComponents: Components = {
  MuiCssBaseline: {
    styleOverrides: {
      "*": { margin: 0, padding: 0 },
      "html, body, #root": { height: "100%", width: "100%" },
    },
  },
};
