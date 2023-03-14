import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import coffeeroasters from "../assets/shared/desktop/logo.svg";
import Menu from "../components/Menu";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [fixe, setFixe] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 10 ? setFixe(true) : setFixe(false);
    });
  }, [fixe]);

  return (
    <header className="container">
      <div className="header">
        <Link to="/">
          <img src={coffeeroasters} alt="Coffeeroasters logo" className="header-img" />
        </Link>
        <nav className="header-nav">
          <ul className="header-nav-list">
            <li><NavLink to="/" />Home</li>
            <li><NavLink to="/about" />About</li>
            <li><NavLink to="/create" />Create your plan</li>
          </ul>
        </nav>

        <Menu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />        
      </div>
    </header>
  );
};

export default Header;
