import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { NewEmployeePage } from "./pages/NewEmployeePage";
import { EditEmployeePage } from "./pages/EditEmployeePage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<NewEmployeePage />} />
        <Route path="/edit-employee/:id" element={<EditEmployeePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
