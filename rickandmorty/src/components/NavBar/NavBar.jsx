// contendra todas las SearchBar
import SearchBar from "../SearchBar/SearchBar";
import { Link, NavLink } from "react-router-dom";

const NavBar = ({ onSearch }) => {
  return (
    <div>
      <SearchBar onSearch={onSearch} />
      <Link to="/home">
        <button>Home</button>
      </Link>

      <NavLink to="/about">
        <button>About</button>
      </NavLink>
    </div>
  );
};
export default NavBar;
