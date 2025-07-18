import React, { useState, useEffect } from 'react';
import './About.css';
import desktop from '../../../public/imgs/imgabout.jpg'
import mobile from '../../../public/imgs/mobile.jpg'
import CHeader from '../CHeader/CHeader';
import Footer from '../Footer/Footer';

function About() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile(); // verifica no mount

    window.addEventListener('resize', checkMobile); // verifica no resize

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      <CHeader/>
      <div id='main-about'>
        <section id='img-about'>
          <img
            src={isMobile ? `${mobile}` : `${desktop}`}
            alt="logo"
            id='mobile'
          />
        </section>
      </div>
      <Footer/>
    </>
    
  );
}

export default About;
