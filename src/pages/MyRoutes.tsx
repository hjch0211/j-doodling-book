import { Route, Routes as ReactRoutes } from "react-router-dom";
import Main from "./Main";
import Three from "./Three";
import Fail from "./Fail";

export const MyRoutes = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<Main />} />
      <Route path="/three" element={<Three />} />
      <Route path="*" element={<Fail />} />
    </ReactRoutes>
  );
};
