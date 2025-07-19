// src/components/Mel.tsx
import React from 'react';
import './Mel.css';
import { NavLink } from 'react-router-dom';
import profileMel from '../../../public/imgs/profileMel.jpg';
import logoMaia from '../../../public/imgs/logo.png';

const Mel = () => {
  return (
    <div className="container">
      <img src={`${profileMel}`} alt="Foto de Perfil" className="profile-img" />
      <h1 className="nome">Mel Maia</h1>

      <div className="botoes">
        <a href="mailto:anapaula@zecavitorino.com.br?cc=deboramaiaoriginal@gmail.com">
          Publicidade
        </a>
        <a href="mailto:debora@damaia.art?cc=deboramaiaoriginal@gmail.com">
          Comercial
        </a>
        <a href="mailto:juliana.marinho@zecavitorino.com.br?cc=deboramaiaoriginal@gmail.com">
          Artístico
        </a>
        <a href="https://www.instagram.com/melissamelmaia" target="_blank">
          Instagram
        </a>
        <a href="https://www.tiktok.com/@melmaia?lang=pt-BR" target="_blank">
          TikTok
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

export default Mel;
