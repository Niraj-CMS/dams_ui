import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DroneSurveyScheduling from "./pages/DroneSurveyScheduling";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DroneSurveyScheduling />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
