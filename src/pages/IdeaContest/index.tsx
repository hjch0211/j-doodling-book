import React from "react";
import MuiThemeProvider from "./MuiThemeProvider";
import { CommonLayout } from "../../components/CommonLayout";
import { Button, Typography } from "@mui/material";

function IdeaContest() {
  return (
    <MuiThemeProvider>
      <CommonLayout>
        <Typography variant="h1">Innovators</Typography>
        <Button variant="outlined" color="secondary">
          확인
        </Button>
      </CommonLayout>
    </MuiThemeProvider>
  );
}

export default IdeaContest;
