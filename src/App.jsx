import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Employees/HomePage";
import { NewEmployeePage } from "./pages/Employees/NewEmployeePage";
import { EditEmployeePage } from "./pages/Employees/EditEmployeePage";
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
