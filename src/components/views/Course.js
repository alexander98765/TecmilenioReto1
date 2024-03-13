//@fileoverview Component that generates the information of courses offered

import React from 'react';
import { Link } from "react-router-dom";

//Function that creates and returns the courses´details  
//@return Courses details UI in html format
const Course = () => {
  return (
    <div>
        <section id="contenedorCursos" className="container">
            <div className="row">
                <div className="col-md-6">
                <div className="row">
                    <div className="col-md-12">
                    <span className="titulo2">Curso | Como aprender a manejar las finanzas para emprendedores</span>
                    </div>
                </div>
                <div className="row rowSeparationSm">
                    <div className="col-md-12">
                    <span className="">Este curso busca ayudar al emprendedor a ser capaz de desarrollar un plan de operación y expansión, basado en la generación de estrategias financieras que permitan un proceso de crecimiento ordenado y sustentable del negocio.</span>
                    </div>
                </div>
                <div className="row rowSeparationSm">
                    <div className="col-md-12">
                    <div className="floatLeft">
                        <i className="fa-solid fa-star ratingStar"></i>
                        <i className="fa-solid fa-star ratingStar"></i>
                        <i className="fa-solid fa-star ratingStar"></i>
                        <i className="fa-solid fa-star ratingStar"></i>
                        <i className="fa-solid fa-star-half-stroke ratingStar"></i>  
                    </div>
                    <div >
                        <Link to={"/TecmilenioReto1/commentsDetail"} className="opinionsLink">                                                    
                            Ver opiniones (6)
                        </Link>                        
                    </div>              
                    </div>
                </div>  
                <div className="row rowSeparationSm">
                    <div className="col-md-12 col-sm-12 col-lg-6">
                        <div className="coursesPrices">
                            <div className="pricingHeader text-center">
                            Pro 
                            </div>
                            <div>
                            <p className="text-center componentSep10">
                                <span className="lastPrice">$2,999.00</span> <span className="badge text-bg-warning temporal">Oferta temporal</span><br/>
                                <span className="coursePrice">$1,999.00</span> / <span className="badge text-bg-primary">Limitado</span>
                            </p>
                            <div>
                                <ul className="courseAdv">
                                <li>
                                    <i className="fa-solid fa-check courseCharacteristicIcon"></i> Todos los módulos habilitados                                  
                                </li>
                                <li>
                                    <i className="fa-solid fa-check courseCharacteristicIcon"></i> No se necesita renovación
                                </li>
                                </ul>                    
                            </div>                  
                            </div>
                            <div className="princingFooter text-center">
                            <a type="button" href="#contactContainer" className="btn btnOutlineGeneral">Quiero adquirirlo</a>                  
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-sm-12 col-lg-6">
                        <div className="coursesPrices">
                            <div className="pricingHeader text-center">
                            Enterprise
                            </div>
                            <div>
                            <p className="text-center componentSep10">
                                <span className="lastPrice">$4,999.00</span> <span className="badge text-bg-warning temporal">Oferta temporal</span><br/>
                                <span className="coursePrice">$3,999.00</span> / <span className="badge text-bg-success">Full</span> 
                            </p>
                            <div>
                                <ul className="courseAdv">
                                <li>
                                    <i className="fa-solid fa-check courseCharacteristicIcon"></i> Todos los módulos habilitados
                                </li>
                                <li>
                                    <i className="fa-solid fa-check courseCharacteristicIcon"></i> No se necesita renovación
                                </li>
                                <li>
                                    <i className="fa-solid fa-check courseCharacteristicIcon"></i> Asistencia personalizada 
                                </li>
                                </ul>                    
                            </div>                  
                            </div>
                            <div className="princingFooter text-center">
                            <a href="#contactContainer" type="button" className="btn btnOutlineGeneral">Quiero adquirirlo</a>                  
                            </div>
                        </div>
                    </div>
                </div>      
                </div>
                <div className="col-md-6">
                <div>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <span className="courseDetailTitle">Orientado para</span>
                            </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div>
                                    <ul className="courseDetailsListOrientado">
                                        <li><i className="fa-solid fa-circle-check"></i> Emprendedores que quieran iniciar su primer negocio con innovadoras estrategias financieras que los ayuden a consolidar su modelo de negocio.</li>
                                        <li><i className="fa-solid fa-circle-check"></i> Diseñado para personas que ya pertenecen al sector.</li>
                                        <li><i className="fa-solid fa-circle-check"></i> Todos aquellos empresarios, emprendedores, independientes y dueños de empresas que desean asegurarse de que su proyecto o compañía es viable financieramente.</li>                                    
                                    </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo"  aria-expanded="false" aria-controls="collapseTwo">
                                <span className="courseDetailTitle">Habilidades aprendidas</span>
                            </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div>
                                    <ul className="courseDetailsListOrientado">
                                        <li><i className="fa-solid fa-circle-check"></i> Determinar las estrategias y herramientas que los emprendedores y startups utilizan para desarrollar ideas de negocio y lanzar innovaciones.</li>
                                        <li><i className="fa-solid fa-circle-check"></i> Identificar los conceptos del modelo de negocio y diseñar proposiciones de valor únicas.</li>
                                        <li><i className="fa-solid fa-circle-check"></i> Identificar los conceptos básicos de emprendimiento innovador para innovar y crear valor en la empresa.</li> 
                                        <li><i className="fa-solid fa-circle-check"></i> Explicar como los emprendedores pueden ir de una idea a un producto y escalarlo.</li> 
                                        <li><i className="fa-solid fa-circle-check"></i> Distinguir los elementos de un modelo de negocios.</li>                                    
                                    </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">                    
                                <span className="courseDetailTitle">Requerimientos previos</span>
                            </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <ul className="courseDetailsListReq">
                                <li><i className="fa-solid fa-circle-check"></i> Tener un claro interés por la economía, el mercado financiero y la gestión empresarial.</li>                    
                                <li><i className="fa-solid fa-circle-check"></i> Interés en el entorno empresarial y los mercados financieros.</li>                    
                                </ul>                    
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">                    
                                <span className="courseDetailTitle">Contenido del curso</span>
                            </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">                    
                                <div>
                                <span className="cursoModuloTitle">Módulo 1. Estrategias de Emprendimiento</span>
                                <ul className="list-group moduloDetalle">
                                    <li className="list-group-item"><i className="fa-solid fa-lock courseDetailsListLockedIcon"></i> Diseñando un modelo de negocio</li>
                                    <li className="list-group-item"><i className="fa-solid fa-lock courseDetailsListLockedIcon"></i> Estrategias para cumpliento de metas</li>
                                    <li className="list-group-item"><i className="fa-solid fa-lock courseDetailsListLockedIcon"></i> Rentabilidad y creacion de valor del negocio</li>                        
                                    <li className="list-group-item"><i className="fa-solid fa-lock courseDetailsListLockedIcon"></i> Estrategias de financiamento</li>                        
                                </ul>
                                <span className="cursoModuloTitle">Módulo 2. Innovación y emprendimiento</span>
                                <ul className="list-group moduloDetalle">
                                    <li className="list-group-item"><i className="fa-solid fa-lock courseDetailsListLockedIcon"></i> Mentalidad Emprendedora</li>
                                    <li className="list-group-item"><i className="fa-solid fa-lock courseDetailsListLockedIcon"></i> Innovación y creatividad organizacional</li>
                                    <li className="list-group-item"><i className="fa-solid fa-lock courseDetailsListLockedIcon"></i> Diseño e innovación de modelos de negocios</li>
                                    <li className="list-group-item"><i className="fa-solid fa-lock courseDetailsListLockedIcon"></i> Emprendiemiento Corporativo</li>                                          
                                </ul>  
                                <span className="cursoModuloTitle">Módulo 3. Mentalidad Emprendedora</span>
                                <ul className="list-group moduloDetalle">
                                    <li className="list-group-item"><i className="fa-solid fa-lock courseDetailsListLockedIcon"></i> Matemáticas Financieras</li>
                                    <li className="list-group-item"><i className="fa-solid fa-lock courseDetailsListLockedIcon"></i> Elaboración, análisis e interpretación de estados financieros</li>
                                    <li className="list-group-item"><i className="fa-solid fa-lock courseDetailsListLockedIcon"></i> Decisiones de planeación financiera a corto plazo</li>
                                    <li className="list-group-item"><i className="fa-solid fa-lock courseDetailsListLockedIcon"></i> Herramientas y métodos de evaluación de proyectos de inversión</li>                                          
                                </ul>                     
                                <span className="cursoModuloTitle">Evaluación. Comprobación de conocimientos</span>
                                <ul className="list-group moduloDetalle">
                                    <li className="list-group-item"><i className="fa-solid fa-lock courseDetailsListLockedIcon"></i> Evaluación teórica</li>
                                    <li className="list-group-item"><i className="fa-solid fa-lock courseDetailsListLockedIcon"></i> Evaluación práctica</li>                                              
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </div>
   );
}

export default Course;