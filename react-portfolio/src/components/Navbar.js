import React from 'react';
import '../styles/Navbar.css';
// In Navbar, we can assign a style from an object by using curly braces
function Navbar() {
  return (
    <div>
      <section className = "nav">
     <button className ='navButton'>ABOUT</button>
     <button className ='navButton'>PORTFOLIO</button>
     <button className ='navButton'>CONTACT</button>
     <button className ='navButton'>RESUME</button>
     </section>
    </div>
  );
}

export default Navbar;
