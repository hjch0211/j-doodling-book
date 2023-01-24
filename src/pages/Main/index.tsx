import React from "react";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Empty } from "../../components/atom";

export const Main = () => {
  const navigate = useNavigate();
  // [Todo] 화면에서 어떻게 보여줄까
  // [Todo] 일단 헤더 무조건 필요
  return (
    <>
      <Empty height="5rem" />
      <Typography variant="h1">Main</Typography>
      <Empty height="5rem" />
      <button onClick={() => navigate("/idea-contest")}>idea-contest</button>
      <Empty height="5rem" />
      <button onClick={() => navigate("/versatile-form")}>versatile-form</button>
    </>
  );
};
