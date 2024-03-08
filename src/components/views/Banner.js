import React from 'react';
import bannerImage from "../../images/banner1.svg";

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
                            Sigue por redes sociales mis consejos o aún mejor, obten a través de mis cursos todo el contenido para que manejes tus finanzas como un experto
                        </p>
                        <p>
                            <ul className="bannerList">
                            <li><i className="fa-regular fa-circle-check bannerIcon"></i> Aprende sobre finanzas para emprendedores.</li>
                            <li><i className="fa-regular fa-circle-check bannerIcon"></i> Aprende sobre finanzas personales...</li>                  
                            </ul>
                        </p>
                        <div>                
                            <span className="badge bannerDiscountTag"><strong>¡20% de descuento en todos los cursos!</strong> <br/>
                            <span>Por tiempo limitado</span>
                            </span>
                        </div>

                        <p className="bannerButtonsSeparation">
                            <a href="#" className="btn bannerButton">Ver información de los cursos <i className="fa-solid fa-circle-info"></i></a>
                            <a href="#" className="btn bannerButton">Quiero que me contacten <i className="fa-regular fa-address-card"></i></a>
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