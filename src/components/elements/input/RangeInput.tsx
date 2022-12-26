/** @jsxImportSource @emotion/react */
import { css as cssEmotion, Interpolation, Theme } from "@emotion/react";
import { color } from "../../contants/colors";

export interface RangeInputProps {
  step: number;
  min: number;
  max: number;
  css?: Interpolation<Theme>;
}

export const RangeInput = (props: RangeInputProps) => {
  const { step, min, max, css = "", ...rest } = props;

  return (
    <input type="range" step={step} min={min} max={max} css={[css, cssRangeInput]} {...rest} />
  );
};

const cssRangeInput = cssEmotion({
  WebkitAppearance: "none",
  width: "50%",
  maxWidth: "20rem",
  height: "0.2rem",

  backgroundColor: color.grey1,

  "::-webkit-slider-thumb": {
    WebkitAppearance: "none",
    width: "2rem",
    height: "2rem",
    backgroundColor: color.white,
    borderRadius: "20px",
  },
  cursor: "pointer",
});
