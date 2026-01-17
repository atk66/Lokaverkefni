import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="bg-blue-500 text-white p-4 flex justify-between">
      <Link to="/" className="font-bold text-xl">Recipe App</Link>
      <Link to="/favorites" className="hover:underline">Favorites</Link>
    </nav>
  );
}

export default Header;
