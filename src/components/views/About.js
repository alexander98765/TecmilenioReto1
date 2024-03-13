//@fileoverview Component that generates section about me

import React from 'react';
import aboutMeImage from "../../images/aboutme.svg";

//Function that creates and returns the section about me
//@return About me section UI in html format
const About = () => {
  return (
    <div>
        <section id="aboutMeContainer" className="container aboutmeBackground">
            <div className="row">
                <div className="col-12">
                <div className="row">
                    <div className="col-md-3 text-center my-auto">
                    
                    <img src={aboutMeImage} alt={"Conoce a tu asesora"} className="aboutmePicture"/> 
                    </div>
                    <div className="col-md-9">
                    <div className="row">
                        <div className="col-md-12">
                        <p className="text-center">
                            <span className="titulo2Outline">Conoce más sobre tu asesora</span>
                        </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                        <p className='justifyText'>
                            <span>                      
                            Soy Caroline Sada licenciada en Administración y Dirección de Empresas y actualmente influencer financiera, donde me desempeño como analista desde hace 3 años. 
Durante el proceso de organización de mi boda descubrí que tengo la habilidad de comunicación, empatia con los provedores, gestión financiera, organización y liderazgo,
decidi utilizar mis conocimientos y creatividad para hacer contenido en redes sociales donde aconsejo y enseño conceptos de finanzas personales y a emprendedores.
Gracias a la viralización de mi contenido he decidido crear cursos digitales que ayuden a mis seguidores con las finanzas de sus emprendimientos.
                            </span>
                        </p>
                        <div>
                            <ul className="aboutmeList">
                            <li><i className="fa-solid fa-medal aboutmeIcon"></i> Reconocimiento en redes sociales como "Influencer financiera" otorgado por la plataforma Tik Tok por contenido educativo.</li>
                            <li><i className="fa-solid fa-medal aboutmeIcon"></i> Apoyo en la creación de emprendientos con la implementación de estrategias financieras inovadoras.</li>
                            <li><i className="fa-solid fa-medal aboutmeIcon"></i> Lideré equipos para desarrollar nuevos negocios que generó ingresos por más de 2 millones en su primer año.</li>
                            <li><i className="fa-solid fa-medal aboutmeIcon"></i> Organicé y dirigí cursos que resultaron en un aumento del 25% en la productividad de negocios.</li>
                            </ul>
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

export default About;