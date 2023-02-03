import React from "react";
import { Button, InputAdornment, IconButton } from "@mui/material";
import { useFormLogin } from "./hook";
import { InputControlled as Input } from "../../../../components/atom/InputControlled";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Empty } from "../../../../components/atom";

// [Todo] children 방지 방법 찾기

// 일단 로그인 폼 만들기
// 아이디 저장 기능 버튼 추가
// 아이디 찾기 비밀번호 찾기 회원가입 부분은 formfooter로 빼기
export const FormLogin = () => {
  const { reg, onSubmit, setValue } = useFormLogin();
  const [isMouseEnter, setIsMouseEnter] = React.useState(false);
  const [isMouseDown, setIsMouseDown] = React.useState(false);
  // [Todo] input에 clear 버튼 달기
  // [Todo] password 보기 버튼 달기
  // [Todo] MUI 자동 완성 UI 없애기
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
          onMouseEnter={() => setIsMouseEnter(true)}
          onMouseLeave={() => setIsMouseEnter(false)}
          InputProps={{
            endAdornment: isMouseEnter && (
              <InputAdornment position="end">
                <IconButton onClick={() => setValue(reg.email.name, "")}>
                  <HighlightOffIcon color="primary" />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Empty height="3rem" />
        <Input
          useControllerProps={reg.password}
          label="PASSWORD"
          type={isMouseDown ? "text" : "password"}
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onMouseDown={() => setIsMouseDown(true)}
                  onMouseUp={() => setIsMouseDown(false)}
                >
                  {isMouseDown ? (
                    <VisibilityIcon color="primary" />
                  ) : (
                    <VisibilityOffIcon color="primary" />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Empty height="3rem" />
        <Button variant="contained" type="submit" style={{ width: "30%" }}>
          Sign
        </Button>
      </form>
    </>
  );
};
