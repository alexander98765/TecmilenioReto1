//@fileoverview Component that generates the applications header
import React from 'react';
import { NavHashLink } from 'react-router-hash-link';
import { BrowserRouter as Router,Routes,Route,NavLink } from 'react-router-dom';

//Function that creates and returns the applications header.
//@return Header UI in html format
const Header = (props) => {  

  //Define initial breadcrumb title
  let breadcrumblegend = "Inicio";

  //If we have a breadcrub from props we concatenate it to the original variable.
  if(props.breadcrumblegend != undefined){
    breadcrumblegend = breadcrumblegend + props.breadcrumblegend
  }
  //Use of react fragment to avoid creating another div fot sticky header
  return (    
    <React.Fragment>    
        <div id="navbarContainer" className="container-fluid sticky-top noPadding">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarMenu">                    
                    <a className="navbar-brand" href="http://localhost:3000/TecmilenioReto1/">
                        <div className="text-center">
                        <span className="brandTitle">Caroline <span className='lastNameDecoration'>$</span>ada</span>
                        </div>                  
                        <div className="brandSubTitleContainer text-center">
                            <span>Educación Financiera</span>
                        </div>
                    </a>              
                    <ul className="navbar-nav d-flex justify-content-center align-items-center">                         
                        <li className="nav-item">
                        <NavHashLink   
                            className= {({ $isactive }) => ($isactive ? 'nav-link inactive' : 'nav-link inactive')}                   
                            to="/TecmilenioReto1/#contenedorBanner"                            
                        >Inicio
                        </NavHashLink>
                        </li>                                  
                        <li className="nav-item">
                        <NavHashLink   
                            className= {({ $isactive }) => ($isactive ? 'nav-link inactive' : 'nav-link inactive')}                   
                            to="/TecmilenioReto1/#contenedorProyectos"                            
                        >Proyectos
                        </NavHashLink>
                        </li> 
                        <li>
                        <NavHashLink   
                            className= {({ $isactive }) => ($isactive ? 'nav-link inactive' : 'nav-link inactive')}                   
                            to="/TecmilenioReto1/#testimonialsContainer"                            
                        >Testimonios
                        </NavHashLink>
                        </li>   
                        <li>
                        <NavHashLink   
                            className= {({ $isactive }) => ($isactive ? 'nav-link inactive' : 'nav-link inactive')}                   
                            to="/TecmilenioReto1/#contenedorCursos"                            
                        >Cursos
                        </NavHashLink>
                        </li> 
                        <li>
                        <NavHashLink   
                            className= {({ $isactive }) => ($isactive ? 'nav-link inactive' : 'nav-link inactive')}                   
                            to="/TecmilenioReto1/#contenedorPlantillas"                            
                        >Plantillas
                        </NavHashLink>
                        </li>                                                                                                                                              
                        <li className="nav-item">
                        <NavHashLink   
                            className= {({ $isactive }) => ($isactive ? 'nav-link inactive' : 'nav-link inactive')}                   
                            to="/TecmilenioReto1/#aboutMeContainer"                            
                        >Sobre mi</NavHashLink>                        
                        </li>
                        <li className="nav-item">
                        <NavHashLink  
                            className= {({ $isactive }) => ($isactive ? 'nav-link inactive' : 'nav-link inactive')}                                                                  
                            to="/TecmilenioReto1/#contactContainer"                            
                        >Contacto</NavHashLink>  
                        </li>                                              
                    </ul>
                    </div>
                </div>
            </nav>
            <nav className='breadcrumbcontainer' aria-label="breadcrumb">
                <ol className="breadcrumb noMargin">
                    <li className="breadcrumb-item"><span className='breadcrumbItem'> {breadcrumblegend} </span></li>
                    {/*<li className="breadcrumbItem" aria-current="page">&nbsp; Inicio</li>*/}
                </ol>
            </nav>
        </div>   
         
    </React.Fragment>
  );
}

export default Header;