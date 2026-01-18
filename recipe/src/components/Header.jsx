import { Link } from "react-router-dom";


function Header() {
  return (
    <nav className="linkar">
      <Link to="/" className="linkur">Heim</Link>
      <Link to="/favorites" className="linkur">Mínar uppáhalds</Link>
    </nav>
    
  );
  
}

export default Header;
