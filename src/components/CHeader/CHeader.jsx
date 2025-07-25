import React, { useState } from 'react';
import './CHeader.css';
import logo from '../../../public/imgs/logoprincipal.webp';
import { NavLink } from 'react-router-dom';

function CHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header>
      <div id="logo">
        <img src={`${logo}`} className="logo" alt="Logo" />
      </div>

      {/* Botão hamburguer que aparece só no mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
      </div>

      {/* Menu que aparece/esconde no mobile */}
      <nav className={menuOpen ? 'open' : ''}>
        <ul className="faixa">
          <li>
            <NavLink to="/linktree/mel">Mel Maia</NavLink>
            <div className="bullet" id="bullet1"></div>
            <div className="bullet" id="bullet2"></div>
          </li>
          <li>
            <NavLink to="/linktree/lorenzo">Lorenzo Abreu</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default CHeader;
