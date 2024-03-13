//@fileoverview Component that generates the applications main banner

import React from 'react';
import bannerImage from "../../images/banner.svg";

//Function that creates and returns the applications main banner.
//@return Main Banner UI in html format
const Banner = () => {
  return (
        <div>
            <section id="contenedorBanner" className="container-fluid bannerBackground">
                <div className="row">
                    <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-12 text-center my-auto">
                        <div className="bannerTitle">¿Quieres aprender sobre finanzas?</div>
                        <p className="bannerSubTitle">
                            Sigue por redes sociales mis consejos financieros o aún mejor, obten a través de mis cursos todo el contenido para que manejes tus finanzas como un experto
                        </p>
                        <div>
                            <ul className="bannerList">
                            <li><i className="fa-solid fa-dollar-sign bannerIcon"></i> Aprende sobre finanzas para emprendedores.</li>
                            <li><i className="fa-solid fa-dollar-sign bannerIcon"></i> Aprende sobre finanzas personales.</li>                  
                            </ul>
                        </div>
                        <div>                
                            <div className="badge bannerDiscountTag">
                                <div className='row'>
                                    <div className='col-md-12'>
                                    <strong><div className='bannerDiscountValue'>20%</div> <span>¡descuento en todos los cursos! </span></strong> <br/>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-12'>
                                        <div className='limitedLabel'>Por tiempo limitado</div>
                                    </div>
                                </div>                                                                
                            </div>
                        </div>

                        <p className="bannerButtonsSeparation">
                            <a href="#contenedorCursos" className="btn bannerButton">Ver información de los cursos <i className="fa-solid fa-circle-info"></i></a>
                            <a href="#contactContainer" className="btn bannerButton">Quiero que me contacten <i className="fa-regular fa-address-card"></i></a>
                        </p>
                        </div>            
                    </div>
                    </div>
                    <div className="col-md-6 text-center d-flex flex-row d-inline-flex justify-content-center">                    
                    <img src={bannerImage} alt={"Caroline | Educación financiera"} className="bannerPicture"/> 
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Banner;