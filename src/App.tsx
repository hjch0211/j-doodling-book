import { BrowserRouter as Router } from "react-router-dom";
import { Global as DefaultCssSetting, css } from "@emotion/react";
import { MyRoutes } from "./pages/MyRoutes";
import { PageLayout } from "./pages/PageLayout";

// [!] Provider는 여기에 위치시키려 함
// 프로바이더가 많아진다면, 프로바이더 폴더를 따로 만들어보기
function App() {
  return (
    <Router>
      {/* [Todo] 얘도 MUI로 변경할 것 */}
      <DefaultCssSetting
        styles={css`
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-size: 1rem;
            font-weight: normal;
            margin: 0;
          }
          html,
          body,
          #root {
            margin: 0;
            padding: 0;
            height: 100%;
          }
        `}
      />
      <PageLayout>
        <MyRoutes />
      </PageLayout>
    </Router>
  );
}

export default App;
