import { BrowserRouter as Router } from "react-router-dom";
import { MyRoutes } from "./pages/MyRoutes";

// [!] Provider는 여기에 위치시키려 함
function App() {
  return (
    <Router>
      <MyRoutes />
    </Router>
  );
}

export default App;

