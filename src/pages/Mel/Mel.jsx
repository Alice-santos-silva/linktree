// src/components/Mel.tsx
import React from 'react';
import './Mel.css';
import { NavLink } from 'react-router-dom';

const Mel = () => {
  return (
    <div className="container">
      <img
        src="/imgs/profile.jpg"
        alt="Foto de Perfil"
        className="profile-img"
      />
      <h1 className="nome">Mel Maia</h1>

      <div className="botoes">
        <a href="mailto:mel@gmail.com?cc=copiamel@gmail.com">Publicidade</a>
        <a href="https://www.youtube.com" target="_blank">YouTube</a>
        <a href="https://www.tiktok.com" target="_blank">TikTok</a>
        <a href="https://www.siteoficial.com" target="_blank">Site Oficial</a>
        <NavLink to="/linktree">Ir para Início</NavLink>
      </div>
    </div>
  );
};

export default Mel;
