//@fileoverview Component that shows the opinions of the course 

import React from 'react';
import opinionImg1 from "../../images/opinionDetail1.svg";
import opinionImg2 from "../../images/opinionDetail2.svg";
import opinionImg3 from "../../images/opinionDetail3.svg";
import opinionImg4 from "../../images/opinionDetail4.svg";
import opinionImg5 from "../../images/opinionDetail5.svg";
import opinionImg6 from "../../images/opinionDetail6.svg";

//Function that creates and returns the opinions about the course.
//@return Course opinions UI in html format
const Comment = () => {
  return (
    <div>
        <div className='container-fluid commentsDetailContainer'>
            <div className='row'>
                <div className='col-md-12 titulo1 text-center'>
                    Algunas de las opiniones de mis estudiantes
                </div>
            </div>
            <div className='row innerSep20 componentSep10'>            
                <div className='col-md-8'>
                    <div className='row'>
                        <div className='col-md-12 col-lg-6'>
                           
                            <div className='row opinionContainer'>
                                <div className='col-md-3'>
                                    <div className='studentPicture'>
                                        <img src={opinionImg1} alt={"Opinion de estudiante"}/> 
                                    </div>
                                </div>
                                <div className='col-md-9'>
                                    
                                    <div>
                                        <div className='inlineBlock studentName'>
                                            <span>Rogelio Alvarado</span>
                                        </div>
                                        <div className='inlineBlock'>
                                            <i className="fa-solid fa-star ratingStarDetail"></i>
                                            <i className="fa-solid fa-star ratingStarDetail"></i>
                                            <i className="fa-solid fa-star ratingStarDetail"></i>
                                            <i className="fa-solid fa-star ratingStarDetail"></i>
                                            <i className="fa-solid fa-star-half-stroke ratingStarDetail"></i>
                                        </div>
                                    </div>
                                    <div className='publishingDate'>
                                        Publicado el 15 Enero 2024
                                    </div>
                                    <div className='studentOpinion componentSep10'>
                                        El curso es muy bueno, las explicaciones son claras, cortas y precisas de las cosas que debes tener en cuenta para cuidar tus finanzas, además las herramientas que te dan son muy útiles y prácticas.
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='col-md-12 col-lg-6'>
                            
                            <div className='row opinionContainer'>
                                <div className='col-md-3'>
                                    <div className='studentPicture'>
                                        <img src={opinionImg2} alt={"Opinion de estudiante"}/> 
                                    </div>
                                </div>
                                <div className='col-md-9'>
                                    
                                    <div>
                                        <div className='inlineBlock studentName'>
                                            <span>Angelica Rodriguez</span>
                                        </div>
                                        <div className='inlineBlock'>
                                            <i className="fa-solid fa-star ratingStarDetail"></i>
                                            <i className="fa-solid fa-star ratingStarDetail"></i>
                                            <i className="fa-solid fa-star ratingStarDetail"></i>
                                            <i className="fa-solid fa-star ratingStarDetail"></i>
                                            <i className="fa-solid fa-star ratingStarDetail"></i>
                                        </div>
                                    </div>
                                    <div className='publishingDate'>
                                        Publicado el 15 Enero 2024
                                    </div>
                                    <div className='studentOpinion componentSep10'>
                                    Excelente curso, la verdad que me ha hecho reflexionar sobremanera y a partir de ahora tener un mejor control sobre mis finanzas al no descuidar ningún detalle, sin duda que lo recomendaría muchísimo.
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-md-12 col-lg-6'>
                           
                            <div className='row opinionContainer'>
                                <div className='col-md-3'>
                                    <div className='studentPicture'>
                                        <img src={opinionImg3} alt={"Opinion de estudiante"}/> 
                                    </div>
                                </div>
                                <div className='col-md-9'>
                                    
                                    <div>
                                        <div className='inlineBlock studentName'>
                                            <span>Estela Castrejon</span>
                                        </div>
                                        <div className='inlineBlock'>
                                            <i className="fa-solid fa-star ratingStarDetail"></i>
                                            <i className="fa-solid fa-star ratingStarDetail"></i>
                                            <i className="fa-solid fa-star ratingStarDetail"></i>
                                            <i className="fa-solid fa-star ratingStarDetail"></i>
                                            <i className="fa-solid fa-star-half-stroke ratingStarDetail"></i>
                                        </div>
                                    </div>
                                    <div className='publishingDate'>
                                        Publicado el 15 Enero 2024
                                    </div>
                                    <div className='studentOpinion componentSep10'>
                                    Es un excelente curso, el cual te ayuda a ser más ordenado y acertado con las finanzas sin tener que ser una persona experta en el tema; ha cambiado mi vida drásticamente para bien; gracias, por tanto.
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='col-md-12 col-lg-6'>
                            
                            <div className='row opinionContainer'>
                                <div className='col-md-3'>
                                    <div className='studentPicture'>
                                        <img src={opinionImg4} alt={"Opinion de estudiante"}/>
                                    </div>
                                </div>
                                <div className='col-md-9'>
                                    
                                    <div>
                                        <div className='inlineBlock studentName'>
                                            <span>Alicia Martinez</span>
                                        </div>
                                        <div className='inlineBlock'>
                                            <i className="fa-solid fa-star ratingStarDetail"></i>
                                            <i className="fa-solid fa-star ratingStarDetail"></i>
                                            <i className="fa-solid fa-star ratingStarDetail"></i>
                                            <i className="fa-solid fa-star ratingStarDetail"></i>
                                            <i className="fa-solid fa-star ratingStarDetail"></i>
                                        </div>
                                    </div>
                                    <div className='publishingDate'>
                                        Publicado el 15 Enero 2024
                                    </div>
                                    <div className='studentOpinion componentSep10'>
                                    Con este curso aprendí que es posible tener éxito en tu emprendimiento y gracias a los conocimientos adquiridos en este curso, ahora tengo las herramientas, para seguir avanzando y profesionalizar mi negocio.
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className='row'>
                        <div className='col-md-12 col-lg-6'>
                           
                            <div className='row opinionContainer'>
                                <div className='col-md-3'>
                                    <div className='studentPicture'>
                                        <img src={opinionImg5} alt={"Opinion de estudiante"}/>
                                    </div>
                                </div>
                                <div className='col-md-9'>
                                    
                                    <div>
                                        <div className='inlineBlock studentName'>
                                            <span>Gabriela Flores</span>
                                        </div>
                                        <div className='inlineBlock'>
                                            <i className="fa-solid fa-star ratingStarDetail"></i>
                                            <i className="fa-solid fa-star ratingStarDetail"></i>
                                            <i className="fa-solid fa-star ratingStarDetail"></i>                                            
                                        </div>
                                    </div>
                                    <div className='publishingDate'>
                                        Publicado el 15 Enero 2024
                                    </div>
                                    <div className='studentOpinion componentSep10'>
                                    Muy buen curso para emprendedores, pero aún no me han dado mi certificado
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='col-md-12 col-lg-6'>
                            
                            <div className='row opinionContainer'>
                                <div className='col-md-3'>
                                    <div className='studentPicture'>
                                        <img src={opinionImg6} alt={"Opinion de estudiante"}/>
                                    </div>
                                </div>
                                <div className='col-md-9'>
                                    
                                    <div>
                                        <div className='inlineBlock studentName'>
                                            <span>Alberto Castañeda</span>
                                        </div>
                                        <div className='inlineBlock'>
                                            <i className="fa-solid fa-star ratingStarDetail"></i>
                                            <i className="fa-solid fa-star ratingStarDetail"></i>
                                            <i className="fa-solid fa-star ratingStarDetail"></i>
                                            <i className="fa-solid fa-star ratingStarDetail"></i>                                            
                                        </div>
                                    </div>
                                    <div className='publishingDate'>
                                        Publicado el 15 Enero 2024
                                    </div>
                                    <div className='studentOpinion componentSep10'>
                                    Excelente curso para emprendedores y empresarios que quieran actualizar y mejorar los procesos en sus empresas.
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>


                </div>
                <div className='col-md-4'>
                    <div className='text-center studentsOpinionsTitle'>Opiniones de los estudiantes</div>
                    <div className='mainRatingStarContainer'>
                        <i className="fa-solid fa-star ratingStar"></i>
                        <i className="fa-solid fa-star ratingStar"></i>
                        <i className="fa-solid fa-star ratingStar"></i>
                        <i className="fa-solid fa-star ratingStar"></i>
                        <i className="fa-solid fa-star-half-stroke ratingStar"></i>
                        <span className='mainRating'><strong>4.7</strong></span> - 6 reseñas
                    </div>
                    <div>
                        <div className="d-flex d-flex-inline flex-row justify-content-center">
                            <div className='righSpace10px'><span className="courseRatingLabel"><strong>5 estrellas</strong></span></div>
                            <div className="progress righSpace10px ratingbar" role="progressbar" aria-label="Example 20px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar fiveStarRating"></div>
                            </div>
                            <div className='courseRatingLabel'>95%</div>
                        </div>
                        <div className="d-flex d-flex-inline flex-row justify-content-center">
                            <div className='righSpace10px'><span className="courseRatingLabel"><strong>4 estrellas</strong></span></div>
                            <div className="progress righSpace10px ratingbar" role="progressbar" aria-label="Example 20px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar fourStarRating"></div>
                            </div>
                            <div className='courseRatingLabel'>85%</div>
                        </div>
                        <div className="d-flex d-flex-inline flex-row justify-content-center">
                            <div className='righSpace10px'><span className="courseRatingLabel"><strong>3 estrellas</strong></span></div>
                            <div className="progress righSpace10px ratingbar" role="progressbar" aria-label="Example 20px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar threeStarRating"></div>
                            </div>
                            <div className='courseRatingLabel'>75%</div>
                        </div>
                        <div className="d-flex d-flex-inline flex-row justify-content-center">
                            <div className='righSpace10px'><span className="courseRatingLabel"><strong>2 estrellas</strong></span></div>
                            <div className="progress righSpace10px ratingbar" role="progressbar" aria-label="Example 20px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar twoStarRating"></div>
                            </div>
                            <div className='courseRatingLabel'>65%</div>
                        </div>
                        <div className="d-flex d-flex-inline flex-row justify-content-center">
                            <div className='righSpace10px'><span className="courseRatingLabel"><strong>1 estrella</strong></span></div>
                            <div className="progress righSpace10px ratingbar" role="progressbar" aria-label="Example 20px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar oneStarRating"></div>
                            </div>
                            <div className='courseRatingLabel'>0%</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
}

export default Comment;