// BookLayout.jsx
import { Link, Outlet } from "react-router-dom";
import { ButtonNew } from "../UI/Button/ButtonNew";

export const BookLayout = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-info-subtle">
        <div className="container-fluid justify-content-between d-flex">
          <Link className="navbar-brand" to="/books">
            Books
          </Link>
          <div className="d-flex align-items-center">
            <ButtonNew title="New Book" to="/books/new-book" />
          </div>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};