//@fileoverview Main component where the main sub components are loaded

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './components/Index';  
import ProjectDetail from './components/ProjectDetail';  
import CommentDetail from './components/CommentDetail'; 
import NotFoundDetail from './components/views/NotFound';   

//Function that holds all the routes available in the app
//@return the list of routes of the app
function App() {
  return (
      <Routes>
        <Route path="/TecmilenioReto1" element={<Inicio />} />
        <Route path="/TecmilenioReto1/projectDetail/:projectID" element={<ProjectDetail />}/>
        <Route path="/TecmilenioReto1/commentsDetail" element={<CommentDetail />}/>
        <Route path="*" element={<NotFoundDetail />} />
      </Routes>
  );
}

export default App;
