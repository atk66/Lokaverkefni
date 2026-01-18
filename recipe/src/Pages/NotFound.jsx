import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="villa">
      <h1 className="villa">404</h1>
      <p className="villa">Þessi slóð er ekki til.</p>
      <Link
        to="/"
        className="villa"
      >
        Fara Heim
      </Link>
    </div>
  );
}

export default NotFound;
