import Header from './views/Header';  
import Banner from './views/Banner';
import Projects from './views/Project';
import Testimonies from './views/Testimony';
import Courses from './views/Course';
import Templates from './views/Template';
import AboutMe from './views/About';
import Contact from './views/Contact';
import Footer from './views/Footer';

function Index() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Projects/>
      <Testimonies/>
      <Courses/>
      <Templates/>
      <AboutMe/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default Index;