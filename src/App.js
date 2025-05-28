import "./App.css";
import Login from "./login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
