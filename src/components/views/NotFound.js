//@fileoverview Component that generates the view when an url was not found

import React from 'react';
import Header from "./Header";
import Contact from "./Contact";
import Footer from "./Footer";
import notFoundImg from "../../images/pageNotFound.svg";

//Function that creates and returns the view when an url is not valid
//@return 404 page section UI in html format
const NotFound = () => {
  return (
    <div>
      <Header breadcrumblegend=" / Página no encontrada"/>
      <div className='pageNotFound text-center'>
        <img src={notFoundImg} alt={"PAge not found"}/>       
      </div>      
      <Contact/>
      <Footer/>      
    </div>
    );
}

export default NotFound;