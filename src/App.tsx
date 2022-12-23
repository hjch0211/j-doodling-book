import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages
import Main from "./pages/Main";
import Three from "./pages/Three";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/three" element={<Three />} />
      </Routes>
    </Router>
  );
}

export default App;

