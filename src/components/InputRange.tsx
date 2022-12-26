/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { H3 } from "./elements";
// InputRange 만들기

const InputMargin = "1rem";

interface InputRangeProps {
  labelName?: string;
  labelPostion?: "top" | "right" | "bottom" | "left";
  step: number;
  min: number;
  max: number;
}

export const InputRange = (props: InputRangeProps) => {
  const { labelName, labelPostion = "left", step, min, max } = props;

  if (!labelName) return <input type="range" />;
  else
    return (
      <label css={cssLabel[labelPostion]}>
        <H3>{labelName}</H3>
        <Range css={cssInput[labelPostion]} step={step} min={min} max={max} type="range" />
      </label>
    );
};

const cssLabel = {
  top: css({ display: "flex", flexDirection: "column", alignItems: "center" }),
  right: css({ display: "flex", flexDirection: "row-reverse", alignItems: "baseline" }),
  bottom: css({ display: "flex", flexDirection: "column-reverse", alignItems: "center" }),
  left: css({ display: "flex", alignItems: "baseline" }),
};

const cssInput = {
  top: css({ marginTop: InputMargin }),
  right: css({ marginRight: InputMargin }),
  bottom: css({ marginBottom: InputMargin }),
  left: css({ marginLeft: InputMargin }),
};

const Range = styled.input({
  width: "100%",
});
