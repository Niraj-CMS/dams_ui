import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DroneSurveyScheduling from "./pages/DroneSurveyScheduling";
import AddDetailsManually from "./pages/AddDetailsManually";
function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<DroneSurveyScheduling />} />
        <Route path="/dams/add-manual" element={<AddDetailsManually />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
