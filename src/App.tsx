import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Oracle from "./pages/oracle";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Oracle />} />
      </Routes>
    </Router>
  );
}

export default App;
