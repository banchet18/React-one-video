import "../styles/header.css";
import { Link } from "react-router-dom";
const Header = ({ name }) => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="product">Product</Link>
      </nav>
    </div>
  );
};

export default Header;
