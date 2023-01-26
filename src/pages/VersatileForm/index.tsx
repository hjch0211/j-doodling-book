import React from "react";
import { LayoutAlignCenter } from "../../components/template";
import { FormLogin } from "./component/FormLogin";
import { Empty } from "../../components/atom";
import { Typography } from "@mui/material";

export const VersatileForm = () => {
  // [Todo] 간단한 입력 폼 만들기
  // 다양한 경우의 수를 생각해서 구현해보자
  // 1. 매 입력마다 유효성 검사 + 제출 시 유효성 검사

  // pathname에 따라 단계 설정?
  return (
    <>
      <Typography variant="h4" component="h1">
        Versatile form
      </Typography>
      <Empty height="3rem" />
      <LayoutAlignCenter id="login-section">
        <Typography variant="h2">Sign</Typography>
        <Empty height="3rem" />
        <FormLogin />
      </LayoutAlignCenter>
    </>
  );
};
