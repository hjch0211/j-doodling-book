import { BrowserRouter as Router } from "react-router-dom";
import { MuiThemeProvider } from "./components/hoc";
import { MyRoutes } from "./pages/MyRoutes";

function App() {
  return (
    <Router>
      <MuiThemeProvider>
        <MyRoutes />
      </MuiThemeProvider>
    </Router>
  );
}

export default App;
