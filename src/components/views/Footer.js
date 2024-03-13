//@fileoverview Component that generates the applications footer

import React from 'react';

//Function that creates and returns the applications footer.
//@return Footer UI in html format
const Footer = () => {
  return (
    <div>
        <footer className="d-flex flex-column align-items-center justify-content-center">
            <p className="footerText text-center">
                Suscribete a mis redes sociales para estar al tanto de noticias, actualizaciones y nuevos consejos financieros.
            </p>
            <div className="snIcons d-flex flex-wrap align-items-center justify-content-center">      
                <span className="socialNetworksIcons d-flex d-inline-flex">
                <a href="#" target="_blank"><i className="fa-brands fa-tiktok"></i></a>
                <a href="#" target="_blank"><i className="fa-brands fa-youtube"></i></a>
                <a href="#" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                <a href="#" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                <a href="#" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>          
                </span>                
            </div>
            <div className="copyRightText">
                Creado por Alejandro Pérez (2024) &#169;
            </div>
            </footer>
    </div>
  );
}

export default Footer;