// src/components/Mel.tsx
import React from 'react';
import './Lorenzo.css';
import { NavLink } from 'react-router-dom';
import profileLorenzo from '../../../public/imgs/lorenzoprofile.png';
import logoMaia from '../../../public/imgs/logo.png';

const Lorenzo = () => {
  return (
    <div className="container-l">
      <img
        src={`${profileLorenzo}`}
        alt="Foto de Perfil"
        className="profile-img"
      />
      <h1 className="nome-l">Lorenzo Abreu</h1>

      <div className="botoes-l">
        <a href="mailto:deboramaiaoriginal@gmail.com?">Publicidade</a>
        <a href="https://www.instagram.com/lorenzoabreu_/" target="_blank">
          Instagram
        </a>
        <NavLink to="/linktree">Ir para Início</NavLink>
        <div>
          <NavLink to="/linktree">
            <img src={`${logoMaia}`} alt="logo empresa maia" width={100} />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Lorenzo;
