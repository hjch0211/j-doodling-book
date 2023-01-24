import React from "react";
import { Button, Typography } from "@mui/material";
import { Empty } from "../../components/atom";

function IdeaContest() {
  return (
    <>
      <Empty height="3rem" />
      <Typography variant="h2" color="primary">
        Inno
      </Typography>
      <Empty height="3rem" />
      <Typography color="primary">과거의 산물을 해결해보고</Typography>
      <Typography color="primary">현시대의 문제를 해결해보세요.</Typography>
      <Empty height="3rem" />
      <Button variant="outlined" color="primary">
        확인
      </Button>
    </>
  );
}

export default IdeaContest;
