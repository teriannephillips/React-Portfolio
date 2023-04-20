import React from 'react';
import '../styles/Navbar.css';
// In Navbar, we can assign a style from an object by using curly braces
function Navbar() {
  return (
    <div>
      <section className = "nav">
     <h2>ABOUT</h2>
    <h2>PORTFOLIO</h2>
    <h2>CONTACT</h2>
    <h2>RESUME</h2>
     </section>
    </div>
  );
}

export default Navbar;
