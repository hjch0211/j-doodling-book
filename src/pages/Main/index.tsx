import React from "react";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Empty } from "../../components/atom";

export const Main = () => {
  const navigate = useNavigate();
  return (
    <>
      <Empty height="5rem" />
      <Typography variant="h1">Main</Typography>
      <Empty height="5rem" />
      <button onClick={() => navigate("/design-system")}>Go to design-system</button>
      <Empty height="5rem" />
      <button onClick={() => navigate("/emotion-diary")}>emotion-diary</button>
      <Empty height="5rem" />
      <button onClick={() => navigate("/idea-contest")}>idea-contest</button>
    </>
  );
};
