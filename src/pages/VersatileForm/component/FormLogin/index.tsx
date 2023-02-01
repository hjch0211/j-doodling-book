import React from "react";
import { Button, InputAdornment, IconButton } from "@mui/material";
import { useFormLogin } from "./hook";
import { InputControlled as Input } from "../../../../components/atom/InputControlled";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { Empty } from "../../../../components/atom";

// [Todo] children 방지 방법 찾기

// 일단 로그인 폼 만들기
// 아이디 저장 기능 버튼 추가
// 아이디 찾기 비밀번호 찾기 회원가입 부분은 formfooter로 빼기
export const FormLogin = () => {
  const { reg, onSubmit } = useFormLogin();
  // [Todo] 유효성 검사 로직 만들기
  // [Todo] input에 clear 버튼 달기
  // [Todo] password 보기 버튼 달기
  // https://velog.io/@syoo970/react-hook-form%EA%B3%BC-MUI%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%9C-%EC%9E%AC%EC%82%AC%EC%9A%A9%EC%84%B1-%EC%9E%88%EB%8A%94-Input-%EA%B3%B5%ED%86%B5-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0TypeScript

  return (
    <>
      <form
        id="login"
        style={{
          width: "90%",
          maxWidth: "22rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        onSubmit={onSubmit}
      >
        <Input
          label="ID"
          type="email"
          useControllerProps={reg.email}
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onMouseDown={(e) => {
                    console.log(e.target);
                  }}
                >
                  <HighlightOffIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Empty height="3rem" />
        <Input useControllerProps={reg.password} label="PASSWORD" type="password" fullWidth />
        <Empty height="3rem" />
        <Button variant="contained" style={{ width: "30%" }}>
          Sign
        </Button>
      </form>
    </>
  );
};
