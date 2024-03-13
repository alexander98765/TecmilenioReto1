//@fileoverview Component that generates the projects where client has participated

import React from 'react';
import { Link } from "react-router-dom";
import project1Image from "../../images/project1.svg";
import project2Image from "../../images/project2.svg";
import project3Image from "../../images/project3.svg";
import project4Image from "../../images/project4.svg";

//Function that creates and returns the projects where the client has participated. 
    //The content is returned in Card format (image with a little description a details button)
//@return Projects details UI in html format
const Project = () => {
  return (
    <div>
        <section id="contenedorProyectos" className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                <span className="titulo2">Conoce algunos de mis proyectos</span>
                </div>
            </div>

            <div className="row rowSeparationSm">

                <div className="col-md-3 col-sm-6">
                    <div className="card cardContainer componentSep10">                                   
                        <img src={project1Image} alt={"Proyecto 1"} className="card-img-top"/> 
                        <div className="card-body cardBodyContainer">
                        <h5 className="card-title titulo4 text-center">Asesoria  a emprededora</h5>
                        <p className="card-text projectGeneralText"><strong>Hortencia</strong> es mi primer caso de exito con una emprededora, ya que ella desde hace varios años habia soñado con tener una pequeña <strong>tienda de abarrotes</strong>...</p>
                        <p className="projectButtonContainer text-center">
                            <Link to={"/TecmilenioReto1/projectDetail/1"} className="btn btnOutlineGeneral">                                                    
                                Ver detalle <i className="fa-solid fa-ellipsis"></i>
                            </Link>                        
                        </p>              
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="card cardContainer2 componentSep10">                    
                        <img src={project2Image} alt={"Proyecto 2"} className="card-img-top"/> 
                        <div className="card-body">
                        <h5 className="card-title titulo4 text-center">Asesoria a startup</h5>
                        <p className="card-text projectGeneralText">Una de las <strong>startups</strong> de México más importantes que encontraron una oportunidad de destacar: <strong>VERFRUT</strong>. Esta empresa startup encontró su oportunidad...</p>
                        <p className="projectButtonContainer text-center">
                            <Link to={"/TecmilenioReto1/projectDetail/2"} className="btn btnOutlineGeneral">                                                    
                                Ver detalle <i className="fa-solid fa-ellipsis"></i>
                            </Link>                                     
                        </p>
                        </div>                        
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="card cardContainer3 componentSep10">                    
                        <img src={project3Image} alt={"Proyecto 3"} className="card-img-top"/> 
                        <div className="card-body">
                        <h5 className="card-title titulo4 text-center">Asesoria a startup</h5>
                        <p className="card-text projectGeneralText"><strong>Mapacha</strong> es una startups mexicana en crecimiento desde el 2018, su objetivo principal es brindar <strong>atención médica especializada, hospedaje,</strong> entre...</p>
                        <p className="projectButtonContainer text-center">
                            <Link to={"/TecmilenioReto1/projectDetail/3"} className="btn btnOutlineGeneral">                                                    
                                Ver detalle <i className="fa-solid fa-ellipsis"></i>
                            </Link>                            
                        </p>              
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="card cardContainer4 componentSep10">                    
                        <img src={project4Image} alt={"Proyecto 4"} className="card-img-top"/> 
                        <div className="card-body">
                        <h5 className="card-title titulo4 text-center">Finanzas personales</h5>
                        <p className="card-text projectGeneralText"><strong>Claudia Martinez</strong>, licenciada educación preescolar con 25 años de edad,  me contactó para solicitarme que la <strong>asesora y ayudara a llevar un mejor</strong>...</p>
                        <p className="projectButtonContainer text-center">
                            <Link to={"/TecmilenioReto1/projectDetail/4"} className="btn btnOutlineGeneral">                                                    
                                Ver detalle <i className="fa-solid fa-ellipsis"></i>
                            </Link>                            
                        </p>              
                        </div>
                    </div>
                </div>              
            </div>
        </section>
    </div>
    );
}

export default Project;