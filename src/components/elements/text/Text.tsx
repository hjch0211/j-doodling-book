/** @jsxImportSource @emotion/react */
// [?] 근데 저거 일일 써줘야 하나?
import React from "react";
import { css } from "@emotion/react";

// [Todo]
// 폰트 크기 특정
// 색상 특정
// span, div 특정
// ellipsis 기능 넣기
// 굵기 특정
// \n나오면 자동으로 잘라주는 기능 넣기
// 텍스트 중간에 bold, 하이라이트 등도 지원해야 함
// [?] ref를 넣어야 할까? 이유는?

// [Todo] <T> 이거 어떤 원리인지 헷갈림
// [Todo] JSX.IntrinsicElements = "span" ...?

interface TextProps<Element extends keyof JSX.IntrinsicElements = "span" | "div"> {
  as?: Element;
  children: React.ReactNode;
}

export const Text = (props: TextProps) => {
  const { as: Component = "span", children } = props;
  return (
    <Component
      css={css({
        fontWeight: "lighter",
        fontSize: "0.9rem",
        letterSpacing: "1px",
      })}
    >
      {children}
    </Component>
  );
};
