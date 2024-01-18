// Import necessary dependencies
import { BrowserRouter as Router, Link } from "react-router-dom";
import { motion } from 'framer-motion';

import "./navbar.css";

// Navbar component
const Navbar = () => {
  return (
       <div className="navbarWrapper">
        <div className="navbarStyle">
          <NavLink to="/" text="Home" />
          <NavLink to="/about" text="About" />
          <NavLink to="/projects" text="Projects" />
          <NavLink to="/contact" text="Contact" />
          <NavLink to="/faq" text="FAQ" />
        </div>
      </div>
   );
};

const NavLink = ({ to, text }) => {
  return (
    <motion.div
    whileHover={{ scale: 1.2  }}
    whileTap={{ scale: 1.0 }}
     >
      <Link className="link-style" to={to}>
        {text}
      </Link>
    </motion.div>
 

  );
};

export default Navbar;
