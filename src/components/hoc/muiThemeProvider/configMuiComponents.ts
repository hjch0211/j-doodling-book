import { Components } from "@mui/material";
import { color } from "../../constants/colors";

export const configMuiComponents: Components = {
  // default css setting
  MuiCssBaseline: {
    styleOverrides: {
      "html, body, #root": { height: "100%", width: "100%", backgroundColor: color.bgGrey },
    },
  },
};
