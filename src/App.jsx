import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Homepage from './Pages/Homepage.jsx';
import {Skills} from './Pages/Skills.jsx';
import Missing from './Pages/Missing.jsx';
import Projects from './Pages/Projects.jsx';
import Contacts from './Pages/Contacts.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage/>}/>
          <Route exact path="/Skills" element= {<Skills/>}/>
          <Route exact path="/Projects" element= {<Projects/>}/>

          <Route exact path="/Contacts" element= {<Contacts/>}/>

          <Route path="*" element= {<Missing/>}/>
        </Routes>    
      </Router>
      
    </div>
  );
}

export default App;
