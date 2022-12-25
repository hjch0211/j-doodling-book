import React from "react";
import { useNavigate } from "react-router-dom";
import { Empty } from "../../components/elements/Empty";

// three.js 강좌 들어서 Main을 꾸며보자
function Main() {
  const navigate = useNavigate();
  return (
    <>
      <Empty height="5rem" />
      <button>Main</button>
      <div>Main</div>
    </>
  );
}

export default Main;
