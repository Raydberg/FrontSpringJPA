import { Link } from "react-router-dom";
import { ButtonNew } from "./UI/Button/ButtonNew";
export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-info-subtle">
      <div className="container-fluid justify-content-between d-flex">
        <Link className="navbar-brand" to="/">
          SpringJPA
        </Link>
        <Link className="navbar-brand" to="/books">Books</Link>
        <ButtonNew title="New Employee" to="/new-employee" />
        
      </div>
    </nav>
  );
};
