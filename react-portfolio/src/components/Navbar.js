import React from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <section className = "nav">
     <button className ='navButton'>
     <Link to="/" className="btnLink">
            ABOUT
          </Link>
     </button>
     <button className ='navButton'>PORTFOLIO</button>
     <button className ='navButton'>
     <Link to="/contact" className="btnLink">
            CONTACT
          </Link>
     </button>
     <button className ='navButton'>RESUME</button>
     </section>
    </div>
  );
}

export default Navbar;
