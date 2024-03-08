import React from 'react';

const Header = () => {
  return (
    <div>
        <div id="navbarContainer" className="container-fluid sticky-top noPadding">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarMenu">
                    <a className="navbar-brand" href="#">
                        <div className="text-center">
                        <span className="brandTitle">Caroline $ada</span>
                        </div>                  
                        <div className="brandSubTitleContainer text-center">
                            <span>Educación Financiera</span>
                        </div>
                    </a>              
                    <ul className="navbar-nav d-flex justify-content-center align-items-center">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>                
                        <li className="nav-item">
                        <a className="nav-link" href="#">Proyectos</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Testimonios</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Cursos</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Plantillas</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">Sobre mi</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Contacto</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    </div>
  );
}

export default Header;