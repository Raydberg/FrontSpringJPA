import { Link } from "react-router-dom";

export const ButtonNew = ({ title, to }) => {
  return (
    <Link to={to} className="btn btn-primary">
      {title}
    </Link>
  );
};