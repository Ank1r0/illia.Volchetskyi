import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/NavBar/NavBar.jsx';
import Homepage from './Pages/Homepage.jsx';
import {Skills} from './Pages/Skills.jsx';
import Missing from './Pages/Missing.jsx';
import Projects from './Pages/Projects.jsx';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage/>}/>
          <Route exact path="/Skills" element= {<Skills/>}/>
          <Route exact path="/Projects" element= {<Projects/>}/>

          <Route path="*" element= {<Missing/>}/>
        </Routes>    
      </Router>
      
    </div>
  );
}

export default App;
