//@fileoverview Component that generates the testimonies section. Generates a bootstrap carousel with clients´ testimonies

import React from 'react';
import testimony1Image from "../../images/cliente1.svg";
import testimony2Image from "../../images/cliente2.svg";
import testimony3Image from "../../images/cliente3.svg";

//Function that creates and returns the testimonies
    //The content is returned in bootstrap Carousel format
//@return Tstimonies details UI in html format
const Testimony = () => {
  return (
    <div>
        <section id="testimonialsContainer" className="container">
            <div className="row">
                <div className="col-md-12">          
                <div className="testimonios">

                    <div id="carouselExampleIndicators" className="carousel slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active text-center">
                        
                            <div className="testimonioCardContainer">
                                <div className="row testimoniosHeader">
                                <div className="col-md-12 text-center">
                                    <span className="titulo2">Algunos de los testimonios de mis clientes</span>
                                </div>
                                </div>
                                <div className="testimonioCard">
                                <p>                                
                                    <img src={testimony1Image} alt={"Testimonio de cliente1"} className="testimonioImage testimonioPicture"/> 
                                </p>
                                <div>
                                    <p className="testimonyText">
                                        <i className="fa-solid fa-quote-left fa-xl"></i>
                                        &nbsp;Caroline me enseño como materializar la idea de formar mi propio negocio, con sus cursos aprendi a formular mi plan de negocios y como llevar una administración financiera eficiente.&nbsp;
                                        <i className="fa-solid fa-quote-right fa-xl"></i>
                                    </p>
                                    <p>
                                        <span className="testimonioName">Luis Vélez</span><br/>
                                        <span className="testimonioRol">Gerente de startup</span>
                                    </p>
                                </div>
                                </div>
                            </div>                  

                        </div>
                        <div className="carousel-item text-center">

                            <div className="testimonioCardContainer">
                                <div className="row testimoniosHeader">
                                <div className="col-md-12 text-center">
                                    <span className="titulo2">Algunos de los testimonios de mis clientes</span>
                                </div>
                                </div>
                                <div className="testimonioCard">
                                <p>
                                    <img src={testimony2Image} alt={"Testimonio de cliente1"} className="testimonioImage testimonioPicture"/> 
                                </p>
                                <div>
                                    <p className="testimonyText">
                                        <i className="fa-solid fa-quote-left fa-xl"></i>
                                        &nbsp;Poder tomar los cursos a mi ritmo ha sido una experiencia maravillosa. Puedo aprender en momentos que se adapten a mi horario y estado de ánimo. &nbsp;
                                        <i className="fa-solid fa-quote-right fa-xl"></i>
                                    </p>
                                    <p>
                                        <span className="testimonioName">Claudia Villafuerte</span><br/>
                                        <span className="testimonioRol">Gerente de startup</span>
                                    </p>
                                </div>
                                </div>
                            </div>
                        
                        </div>   
                        <div className="carousel-item text-center">

                            <div className="testimonioCardContainer">
                                <div className="row testimoniosHeader">
                                <div className="col-md-12 text-center">
                                    <span className="titulo2">Algunos de los testimonios de mis clientes</span>
                                </div>
                                </div>
                                <div className="testimonioCard">
                                <p>
                                    <img src={testimony3Image} alt={"Testimonio de cliente1"} className="testimonioImage testimonioPicture"/> 
                                </p>
                                <div>
                                    <p className="testimonyText">
                                        <i className="fa-solid fa-quote-left fa-xl"></i>
                                        &nbsp;Gracias a los cursos que ofrece Caroline los conceptos y las habilidades que aprendí en un nuevo proyecto emocionante en el trabajo. &nbsp;
                                        <i className="fa-solid fa-quote-right fa-xl"></i>
                                    </p>
                                    <p>
                                        <span className="testimonioName">Julio Gómez</span><br/>
                                        <span className="testimonioRol">Gerente de startup</span>
                                    </p>
                                </div>
                                </div>
                            </div>
                        
                        </div>    
                        <div className="carousel-item text-center">

                            <div className="testimonioCardContainer">
                                <div className="row testimoniosHeader">
                                <div className="col-md-12 text-center">
                                    <span className="titulo2">Algunos de los testimonios de mis clientes</span>
                                </div>
                                </div>
                                <div className="testimonioCard">
                                <p>
                                    <img src={testimony1Image} alt={"Testimonio de cliente1"} className="testimonioImage testimonioPicture"/> 
                                </p>
                                <div>
                                    <p className="testimonyText">
                                        <i className="fa-solid fa-quote-left fa-xl"></i>
                                        &nbsp;Con Caroline he aprendido a mejorar mi situacion económica al escuhar sus consejos y hablar sobre la importancia de tener una buena educación financiera. &nbsp;
                                        <i className="fa-solid fa-quote-right fa-xl"></i>
                                    </p>
                                    <p>
                                        <span className="testimonioName">Francisco Rodriguez</span><br/>
                                        <span className="testimonioRol">Gerente de startup</span>
                                    </p>
                                </div>
                                </div>
                            </div>
                        
                        </div>            
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                    </div>
                
                </div>
                </div>
            </div>
        </section>
    </div>
  );
}

export default Testimony; 
