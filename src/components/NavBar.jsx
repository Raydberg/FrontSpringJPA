import { Link } from "react-router-dom";
import { ButtonNew } from "./UI/ButtonNew";
export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-info-subtle">
      <div className="container-fluid justify-content-between d-flex">
        <Link className="navbar-brand" to="/">
          SpringJPA
        </Link>
        <ButtonNew />
      </div>
    </nav>
  );
};
