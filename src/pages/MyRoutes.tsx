import { Route, Routes as ReactRoutes } from "react-router-dom";
import Main from "./Main";
import Three from "./Three";
import Fail from "./Fail";
import DesignSystem from "./DesignSystem";
import EmotionDiary from "./EmotionDiary";
import IdeaContest from "./IdeaContest";

export const MyRoutes = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<Main />} />
      <Route path="/three" element={<Three />} />
      <Route path="/design-system" element={<DesignSystem />} />
      <Route path="/emotion-diary" element={<EmotionDiary />} />
      <Route path="/idea-contest" element={<IdeaContest />} />
      <Route path="*" element={<Fail />} />
    </ReactRoutes>
  );
};
