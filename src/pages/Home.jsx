import React from 'react';
import CHeader from '../components/CHeader/CHeader';
import About from '../components/About/About';
import Footer from '../components/Footer/Footer';
import '../styles/styles.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mel from './Mel/Mel';
import Lorenzo from './Lorenzo/Lorenzo'

function Home() {
  return (
    <BrowserRouter>
      <div className="page-container">
        <div className="content-wrap">
          <Routes>
            <Route path="/linktree" element={<About />}></Route>
            <Route path="/linktree/mel" element={<Mel />}></Route>
            <Route path="/linktree/lorenzo" element={<Lorenzo />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Home;
