import React, { useState, useRef } from 'react';
import styles from './Navbar.module.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    buttonRef.current.click();
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarBrand}>
      </div>
      <div className={`${styles.navElements} ${isMenuOpen ? styles.open : ''}`}>
        <button ref={buttonRef} className={styles.menuToggle} onClick={toggleMenu}>
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>

        <ul className={`${styles.navbarLinks} ${isMenuOpen ? styles.open : ''}`}>
          <li><a onClick={closeMenu}>Products</a></li>
          <li><a onClick={closeMenu}>Industries</a></li>
          <li><a onClick={closeMenu}>Company</a></li>
          <li><a onClick={closeMenu}>Resources</a></li>
        </ul>
        <div className={`${styles.buttonContainer} ${isMenuOpen ? styles.open : ''}`}>
          <button className={`${styles.navbarButton} ${isMenuOpen ? styles.open : ''}`}>Schedule Demo &gt;</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
