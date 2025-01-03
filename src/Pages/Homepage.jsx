import React, { useState } from 'react';
import PageLayout from '../Components/PageLayout/PageLayout';
import Popup from 'reactjs-popup'; // Ensure this package is installed
import 'reactjs-popup/dist/index.css'; // Import Popup styles
import Navbar from '../Components/NavBar/NavBar';
import github from '../Components/NavBar/github.svg'
import linkedin from '../Components/NavBar/linkein.png'


const Homepage = () => {
  const [list, setList] = useState([]);
  const [value, setValue] = useState("");
  const today = new Date(); // Initialize `today` for footer date

  const addItem = () => {
    setList([...list, { id: list.length + 1, title: value }]);
    setValue(""); // Clear input field after adding
  };

  const [param, setParam] = useState('home'); // Initialize state

  function caseof(param) {
    switch (param) {
      case 'home':
        return (
          <div>
            <h2>Hi! I'm Illia</h2>
            <p>
              I am passionate about software development with strong expertise in front-end and back-end development.
              Additionally, I have experience in database creation and management.
            </p>
            <ul>
              {list.map((item) => (
                <li key={item.id}>{item.title}</li>
              ))}
            </ul>
          </div>
        );
        case 'skills':
          return (<div>
            <h2>Skills</h2>
            <h3>Programming</h3>
            <p>
              Java(JDK11) Intermediate
            </p>
            <p>
            C Intermediate
            </p>
            <p>
            C++, (including OpenCV) Intermediate 
            </p>
            <p>
            SQL (Oracle SQL, Microsoft SQL, Postgres SQL) Basic knowledge      
            </p>
            <p>
            Python basic knowledge
            </p>
            <p>
            JavaScript, React, CSS , HTML
            </p>
            <h3>Hard and soft skills</h3>
            <p>
            Drawing UML diagrams, and writing documentation to the
            projects.
            </p>
            <p>
            Basic knowledge of Linux administration
            </p>
            <p>
            version control GIT
            </p>
            <h3>Communication</h3>
            <p>
            Fluent in English, Ukrainian, Russian.
            </p>
            <p>
            Average knowledge of Polish, 
            </p>
        </div>);
          
          case 'projects':
            return (
              <div>

                  <h2>Projects</h2>    
                  {/*Editor*/}        
                  <a target="_blank" href="https://github.com/Ank1r0/ConsolePhotoEditor"><h3> Console photo editor(C)</h3></a>
                  <p> 
                    Console application with default photo editors functions.
                  </p>
                  <p> 
                  Application functions (Blur, Rotate left/right, Crop, Scale,
                    Extract)
                  </p>

                  {/*Store*/}  
                  <a target="_blank" href="https://github.com/Ank1r0/PharmacyStore"><h3> Pharmacy Store(Java)</h3></a>
                  <p> 
                  Web application with few simple functions, deleting
          licences from the licence packs and showing the list with
          the current amount of licences.
                  </p>
                  <p> 
                  The application is built using the Spring Boot and
          incorporates essential components like Lombok, Spring
          Data JPA, H2 database, validation, and Spring Web
                  </p>

                  {/*PHOTO*/}
                  <a target="_blank" href="https://github.com/Ank1r0/my-app"><h3>My own website(ReactJS)</h3></a>
                  <p> 
                  A web application showcasing personal information about myself, designed to highlight my front-end skills and design capabilities.
                  </p>
                  <p> 
                This application were built with using ReactJS.
                  </p>


              </div>
            );
    }
  }

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-left">
          <a href="/" className="logo">
            Illia Volchetskyi Website
          </a>
        </div>
        <div className="navbar-center">
          <ul className="nav-links">
            <li>
            <a onClick={() => setParam('home')} style={{ cursor: 'pointer' }}>Home</a>
            </li>
            <li>
            <a onClick={() => setParam('skills')} style={{ cursor: 'pointer' }}>Skills</a>
            </li>
            <li>
            <a onClick={() => setParam('projects')} style={{ cursor: 'pointer' }}>Projects</a>
            </li>
            <li>
              <Popup
                trigger={<button style={{ all: 'unset' }}>Contacts</button>}
                modal
                nested
              >
                {(close) => (
                  <div
                    style={{
                      position: 'fixed',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: 'rgba(128, 128, 128, 0.3)',
                      zIndex: 9999,
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        backgroundColor: 'white',
                        padding: '20px',
                        borderRadius: '8px',
                        zIndex: 10000,
                      }}
                    >
                      <p>Email: illia.volchetskyi@gmail.com</p>
                      <p>Telegram: @ank1r0</p>
                      <p>WhatsApp: +48 730 525 599</p>
                      <button onClick={() => close()}>Close window</button>
                    </div>
                  </div>
                )}
              </Popup>
            </li>
          </ul>
        </div>
        <div className="navbar-right">
          <span>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/illia-volchetskyi-b69a21209/"
              rel="noreferrer"
            >
              <img src={linkedin} alt="LinkedIn" height={50} />
            </a>
          </span>
          <span>
            <a
              target="_blank"
              href="https://github.com/Ank1r0"
              rel="noreferrer"
            >
              <img src={github} alt="GitHub" height={50} />
            </a>
          </span>
        </div>
      </nav>

      {caseof(param)}

      <footer className="footer">
        <p>Copyright &copy; {today.getFullYear()}</p>
      </footer>
    </div>
  );
};

export default Homepage;