import React from "react";
import { TextField, Button } from "@mui/material";
import { Empty } from "../../../components/atom";

// [Todo] children 방지 방법 찾기

// 일단 로그인 폼 만들기
// 아이디 저장 기능 버튼 추가
// 아이디 찾기 비밀번호 찾기 회원가입 부분은 formfooter로 빼기
export const FormLogin = () => {
  // [Todo] 유효성 검사 로직 만들기
  // [Todo] input에 clear 버튼 달기
  return (
    <>
      <form
        style={{
          width: "80%",
          maxWidth: "28rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TextField label="ID" fullWidth />
        <Empty height="3rem" />
        <TextField label="PASSWORD" type="password" fullWidth />
        <Empty height="3rem" />
        <Button variant="contained" style={{ width: "30%" }}>
          Sign
        </Button>
      </form>
    </>
  );
};
