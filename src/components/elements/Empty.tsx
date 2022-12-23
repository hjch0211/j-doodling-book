import styled from "@emotion/styled";

type Props = {
  height: number;
  type?: "rem" | "px";
};

// [?] styled를 굳이 쓰는 느낌일까?
/**
 * @param height number
 * @param type "rem" | "px"
 */
export const Empty = styled.div<Props>((props) => ({
  height: `${props.height}${props.type ?? "px"}`,
}));
