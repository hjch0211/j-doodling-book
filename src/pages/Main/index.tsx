import React from "react";
import { useNavigate } from "react-router-dom";
import { Empty, H1 } from "../../components/elements";

// three.js 강좌 들어서 Main을 꾸며보자
function Main() {
  const navigate = useNavigate();
  return (
    <>
      <Empty height="5rem" />
      <H1>Main</H1>
      <button onClick={() => navigate("/design-system")}>Go to design-system</button>
      <button onClick={() => navigate("/emotion-diary")}>emotion-diary</button>
    </>
  );
}

export default Main;
