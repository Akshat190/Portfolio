import { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header" role="banner">
      <a href="#" className="logo" aria-label="Homepage">
        <span>Akshat Choksi</span>
      </a>
      <nav>
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <i
        className="fa-solid fa-bars"
        id="menu-icon"
        aria-label="Menu"
        onClick={toggleMenu}
      />
      <button
        className="visit-btn"
        onClick={() => window.open('https://github.com/Akshat190', '_blank')}
      >
        Visit Github
      </button>
    </header>
  );
};

export default Header;
