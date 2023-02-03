import { Route, Routes as ReactRoutes } from "react-router-dom";
import { Main } from "./Main";
import Three from "./Three";
import Fail from "./Fail";
import IdeaContest from "./IdeaContest";
import { VersatileForm } from "./VersatileForm";

export const MyRoutes = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<Main />} />
      <Route path="/three" element={<Three />} />
      <Route path="/idea-contest" element={<IdeaContest />} />
      <Route path="/versatile-form" element={<VersatileForm />} />
      <Route path="*" element={<Fail />} />
    </ReactRoutes>
  );
};
