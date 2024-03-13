//@fileoverview Component that shows the opinions of the course 

import React from 'react';
import Header from './views/Header';
import Contact from './views/Contact';
import Footer from './views/Footer';
import Comment from './views/Comment';

//Function that creates and returns the opinions about the course.
//@return Course opinions UI in html format
const CommentDetail = () => {
  return (
    <div>
        <Header breadcrumblegend = " / Comentarios del curso"/>
        <Comment/>
        <Contact/>
        <Footer/>
    </div>
);
}

export default CommentDetail;