import { BrowserRouter as Router } from "react-router-dom";
import { Global, css } from "@emotion/react";
import { MyRoutes } from "./pages/MyRoutes";
import { PageLayout } from "./pages/PageLayout";
import { color } from "./components/contants/colors";

// [!] Provider는 여기에 위치시키려 함
function App() {
  return (
    <Router>
      <Global
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
          body {
            background-color: ${color.bgGrey};
            color: ${color.textWhite};
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

