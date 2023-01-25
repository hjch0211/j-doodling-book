import { PaletteOptions } from "@mui/material";
import { color } from "../../constants/colors";

/**
 * @description
 * 일부러 color.js를 사용
 * 이 방법이 코드 재활용이 더 좋을 것같음
 */

export const configMuiPalette: PaletteOptions = {
  primary: {
    main: color.turquoise,
  },
  neutral: {
    main: "#64748B",
    contrastText: "#fff",
  },
  text: {
    primary: color.turquoise,
  },
};

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
