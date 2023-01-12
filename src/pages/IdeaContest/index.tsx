import React from "react";
import MuiThemeProvider from "./MuiThemeProvider";
import { Empty, H1 } from "../../components/elements";
import { CommonLayout } from "../../components/CommonLayout";
import { Button } from "@mui/material";

function IdeaContest() {
  return (
    <MuiThemeProvider>
      <CommonLayout>
        <H1>IdeaContest</H1>
        <Button variant="outlined" color="secondary">
          확인
        </Button>
      </CommonLayout>
    </MuiThemeProvider>
  );
}

export default IdeaContest;
