import { BrowserRouter, Route, Routes } from "react-router-dom";
import { EmployeePage } from "./pages/Employees/EmployeePage";
import { NewEmployeePage } from "./pages/Employees/NewEmployeePage";
import { EditEmployeePage } from "./pages/Employees/EditEmployeePage";
import { BooksPages } from "./pages/Books/BooksPages";
import { EditBookPage } from "./pages/Books/EditBookPage";
import { BookLayout } from "./components/layout/BookLayout";
import { NewBookPage } from "./pages/Books/NewBookPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EmployeePage />} />
        <Route path="/new-employee" element={<NewEmployeePage />} />
        <Route path="/edit-employee/:id" element={<EditEmployeePage />} />
        <Route path="/books" element={<BookLayout />}>
          <Route index element={<BooksPages />} />
        </Route>
        <Route path="/books/new-book" element={<NewBookPage />} />
        <Route path="/books/edit-book/:id" element={<EditBookPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
