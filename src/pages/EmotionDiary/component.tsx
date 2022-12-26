/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Text } from "../../components/elements";
import { RangeInput, RangeInputProps } from "../../components/elements";

interface InputRangeProps extends RangeInputProps {}

const EDRange = (props: InputRangeProps) => {
  const { step, min, max } = props;

  return (
    <label
      css={css({ display: "flex", width: "80%", justifyContent: "center", alignItems: "center" })}
    >
      <Text>매우 아님</Text>
      <RangeInput css={css({ margin: "0 1rem" })} step={step} min={min} max={max} />
      <Text>매우 맞음</Text>
    </label>
  );
};

// [Todo] common Layout으로 빼도 좋을 듯
const Layout = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
});

export const styledEmotionDiary = {
  Layout,
  EDRange,
};
