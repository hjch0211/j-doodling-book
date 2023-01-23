import React from "react";
import { useNavigate } from "react-router-dom";
import { Empty, H1 } from "../../components/elements";
import { CommonLayout } from "../../components/CommonLayout";

// three.js 강좌 들어서 Main을 꾸며보자
function Main() {
  const navigate = useNavigate();
  return (
    <CommonLayout>
      <Empty height="5rem" />
      <H1>Main</H1>
      <Empty height="5rem" />
      <button onClick={() => navigate("/design-system")}>Go to design-system</button>
      <Empty height="5rem" />
      <button onClick={() => navigate("/emotion-diary")}>emotion-diary</button>
      <Empty height="5rem" />
      <button onClick={() => navigate("/idea-contest")}>idea-contest</button>
    </CommonLayout>
  );
}

export default Main;
