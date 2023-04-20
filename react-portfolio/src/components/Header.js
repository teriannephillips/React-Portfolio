import React from 'react';
// Here we are importing a CSS file as a dependency
import '../styles/Header.css';
import Navbar from './Navbar';
import profilePhoto from './images/profilePhoto.jpg';

function Header() {
  return (
    <header className="header">
      <section className='sectionName'>
      
      <img className = "profileImage" src={profilePhoto} alt="Me" />
      <h1>Terianne Phillips</h1>
        
      </section>
      <section className='sectionNav'>
        <Navbar />
      </section>
    </header>
  );
}

export default Header;
