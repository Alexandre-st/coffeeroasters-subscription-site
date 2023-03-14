import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import close from "../assets/shared/mobile/icon-close.svg";
import hamburger from "../assets/shared/mobile/icon-hamburger.svg";
import { backgroundMenu } from "../utils/motion";

const Menu = ({ toggleMenu, setToggleMenu }) => {

  const openMenu = () => {
    setToggleMenu(prevMenu => !prevMenu);
  };

  return (
    <div className="header-menu">
      {!toggleMenu && (
        <img src={hamburger} alt="Open the menu" onClick={openMenu} />
      )}
      {toggleMenu && (
        <>
          <img src={close} alt="Close the menu" className="header-menu-logo" onClick={openMenu} />
          <motion.div className="header-menu-background" 
            initial="initial"
            animate={toggleMenu ? "show" : "hidden"}
            variants={backgroundMenu}
          >
            <motion.nav className="header-menu-container">
              <ul className="header-menu-list">
                <motion.li 
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1, transition: { duration: 0.2, delay: 0.3 }}}
                  >
                  <NavLink to="/" onClick={openMenu} className="header-menu-list-link">Home</NavLink>
                </motion.li>
                <motion.li 
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1, transition: { duration: 0.2, delay: 0.4 }}}
                  >
                  <NavLink to="/about" onClick={openMenu} className="header-menu-list-link">About Us</NavLink>
                </motion.li>
                <motion.li 
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1, transition: { duration: 0.2, delay: 0.5 }}}
                  >
                  <NavLink to="/create" onClick={openMenu} className="header-menu-list-link">Create your plan</NavLink>
                </motion.li>
              </ul>
            </motion.nav>
          </motion.div>
        </>
      )}
    </div>
  );
};
 
export default Menu;