//@fileoverview Component that generates detailed information about the project

import {React, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Header from './views/Header';
import Contact from './views/Contact';
import Footer from './views/Footer';
import project1DetailImg from "../images/project1Detail.svg";
import project2DetailImg from "../images/project2Detail.svg";
import project3DetailImg from "../images/project3Detail.svg";
import project4DetailImg from "../images/project4Detail.svg";

//Function that creates and returns the project detail 
//@return Projects details UI in html format
const ProjectDetail = () => {
  //Get project id parameter from url 
  const { projectID } = useParams();

  //Declare state variables
  let [project, setProject] = useState([]);
  let [goals, setGoals] = useState([]);
  let [counter, setCounter] = useState(1);
  
  let dynamicClass = ""
  let dynamicIconClass = ""

  //Array to store projects inbformation (name, description and goals). It would be taken from DB. It is just to simulate a DB 
    // to avoid replicate the same component for each project
  const projectsDetails = [
    {id: 1, projectName: "Hortencia Garcia - Tienda de abarrotes", description: "Hortencia es mi primer caso de exito con una emprededora, ya que ella desde hace varios años habia soñado con tener una pequeña tienda de abarrotes, pero no tenia los conocimentos de lo que se necesitaba para empezar con este emprendimiento, a Hortencia yo la conocia ya que es una vecina muy querida por mi y cuando un dia me explico su sueño le dije que yo podria apoyarla enseñandole todo lo necesario para emprender su negocio. Le hice un modelo de negocio que ella pudiera entender y la fui asesorando para que lo pusisera en practica  le enseñe desde lo basico y en la actualidad le estoy enseñando como hacer crecer su negocio con nuevas estrategias de negocios para que pueda expandir su tienda de abarrotes. Hortencia esta muy agredecida conmigo por que al fin pudo cumplir su sueño de tener su propio negocio, ser una mujer independiente y con una excelte educación financiera.", goals: ["Enseñar educación finaciera a una persona sin conocimientos solidos de este tema.", "Lograr crear con exito el emprendimiento de mi cliente.", "Ingresar a una persona más al mundo de la educación financiera."]},
    {id: 2, projectName: "VERFRUT - Startup", description: "Una de las startups de México más importantes que encontraron una oportunidad de destacar: VERFRUT. Esta empresa startup encontró su oportunidad de negocio en el mercado de frutas y verduras de México. Suena increíble como de algo tan básico como la venta de frutas y verduras, se puede generar un negocio emergente tan ambicioso que apoye tanto a los productores como a los clientes finales. Luisa Morales fundadora de VERFRUT me contacto para que idearamos un modelo de negocio desde cero en donde se pueda asesorar, llevar un control financiero, una buena gestion de producción y ventas de los productos. De igual manera Luisa buscaba que su negocio fuera exitoso pero que tambien les permitiera a sus clientes buscar ahorro en sus compras para esto ideamos un modelo donde ella obtuviera ganancias como el incremento de clientes. Un negocio que, sin duda, se preocupa por todos y que ha logrado ser una de las principales startups mexicanas del 2020.", goals: ["Contribuir a un esquema de negocio donde se obtienen facilidades y ahorro para sus clientes.", "Hacer lograr ganancias 3 veces mas de sus ganancias habituales con un esquema financiero adecuado.", "Ayudar a construir una de las mejores startup con mejor propuesta de valor en el mercado."]},
    {id: 3, projectName: "Mapacha - Startup", description: "Mapacha es una startups mexicana en crecimiento desde el 2018, su objetivo principal es brindar atención médica especializada, hospedaje, guarderia, entre otros a diferentes animales en especial a gatos. Su fundador  Alejandro Pérez se inspiro en su creación por su gata llamada Mapacha el cual por su trabajo no podia cuidarla por varias horas, esto provocaba que su mascota pasara hambre y mucho tiempo sola algo que lo hacia sentir mal. Alejandro busco una persona para poder contratarla y cuidara de su mascota pero al ver que era muy dificil encontrar a alguien que cubriera sus necesidades, pensó que a otras personas podria ocurrirles lo mismo y tuvo la idea de crear una startup con todo lo que pensaba necesitarian las personas pero no tenia idea como hacerlo, un dia navegando por Tik Tok vio mis videos y se le ocurrio la idea de contactarme  me explico su idea de negocio y le dije que porsupuesto yo podría ayudarle a aterrizar su idea adecuadamente. Le hice un modelo de negocio con forme a sus ideas que le explicaba  le agrado lo propuesto y empezamos a trabajar en la creación de la startup. Mapacha es la startup en México que mas ha contribuido al atender las necesidades de mas 5000 clientes, de los cuales 1500 ha sido atención médica gratuita ya  que uno de sus objetivos es que cualquiera pueda tener acceso. Sin duda, una de las startups mexicanas que contribuye al mundo gatuno.", goals: ["Contribuir a ser la primera startup mexicana exitosa en brindar atención médica gratuita a felinos.", "Ayudar a atrer clientes con el modelo de negocio creado, gracias a una buena educación financiera.", "Instruir y capacitar a mi cliente en el mundo de las startup"]},
    {id: 4, projectName: "Claudia Martínez - Finanzas personales", description: "Claudia Martinez, licenciada educación preescolar con 25 años de edad,  me contactó para solicitarme que la asesora y ayudara a llevar un mejor control de sus finanzas  ya que si eduación financiera era muy básica; solia tener muchos gastos y deudas por su mala administración. Me cuenta que un dia estando en Tik Tok aparecio un video donde explicaba algunos motivos por los que  a la gente sus ingresos son escasos o insuficientes y se identificó con lo que yo explicaba por lo cual decidió aprender a tener una mejor educación financiera. Creo que fue una de las mejores decisiones que pudo haber tomado ya que ha logrado mejorar sus ingresos, pagar sus deudas, llevar un mejor control de gastos y tener una buena educación financiera.", goals: ["Ayudé a solucionar sus deudas con instituciones financieras.", "Contribui a que sus ingresos mejoraran y tuviera una mejor administración de sus recursos.", "Logré que aprendiera el valor de tener una educación financiera."]}
   ];

   //Get projects´ details from array. The search is made with project id received from url
   //Get project and goals to print in screen
   useEffect(() => {
    project = findArrayElementById(projectsDetails, projectID);
    setProject(project)    
    console.log(project)
    setGoals(project.goals)
   },[]);

  return (
    
    <div>
        <Header breadcrumblegend=" / Projectos" />        
        <section className='container-fluid projectDetailContainer'>
            <div className='row'>
                <div className='col-md-6 paddingLeft30'>                    

                        <div className='titulo1'>
                            {JSON.stringify(project.projectName)}
                        </div>
                        <div className='projectDetailText'>
                            {JSON.stringify(project.description)}
                        </div>                                 

                    <div>
                        <span className='titulo2'>Objetivos conseguidos:</span>
                        <div>
                            <div className='row rowSeparationSm'>

                                {goals.map((goal, index) => (                                    
                                    <>                                        
                                        <div className='col-md-4 col-sm-12 goalParent'>
                                            <div className={"goal" + counter + "Container"}>
                                                <p className='text-center'>
                                                {(() => {
                                                    switch (counter) {
                                                    case 1: return <i className="fa-solid fa-bullseye goal1Icon"></i>
                                                    case 2: return <i className="fa-solid fa-award goal2Icon"></i>
                                                    case 3: return <i className="fa-solid fa-flag-checkered goal3Icon"></i>
                                                    }
                                                })()}                                                    
                                                </p>
                                                <p className="justifyText">
                                                    {goal} {counter++}
                                                </p>
                                            </div>
                                        </div>
                                    </>                                         
                                ))}                               
                                    

                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className='col-md-6 text-center'>
                {(() => {
                    switch (projectID) {
                    case "1": return <img src={project1DetailImg} alt={"Finanzas a emprendedores"} className="card-img-top projectDetailImage"/> 
                    case "2": return <img src={project2DetailImg} alt={"Startup verfrut"} className="card-img-top projectDetailImage"/>
                    case "3": return <img src={project3DetailImg} alt={"Startup mapacha"} className="card-img-top projectDetailImage"/>
                    case "4": return <img src={project4DetailImg} alt={"Finanzas personales"} className="card-img-top projectDetailImage"/>
                    }
                })()}
                    
                </div>
            </div>
        </section>

        <Contact/>
        <Footer/>
    </div>
  );
}

//Function to search for an element inside the given array
//@param {array}: array: Array where the project ID will be executed
//@param {number}: id: ID to match inside the array
//@return {object}: Object returned if the element was found
function findArrayElementById(array, id) {
    id = Number(id);
    return array.find((element) => {
        return element.id === id;
    })
}

export default ProjectDetail;