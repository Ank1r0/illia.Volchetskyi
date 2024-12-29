import React from 'react';
import './NavBar.css';
import github from './github.svg'
import linkedin from './linkein.png'
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';

const Navbar = () => {
  return (

<nav className="navbar">
<div className="navbar-left">
    <a href="/" className="logo">
      Illia Volchetskyi Website
    </a>
  </div>
  <div className="navbar-center" >
    <ul className="nav-links">
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/Skills">Skills</a>
      </li>
      <li>
        <a href="/Projects">Projects</a>
      </li>

      <li>
      <Popup trigger=
                {<button style={{ all: 'unset' }}>Contacts</button>} 
                modal nested>
                {
                    close => (
                      <div  style={{
                        position: 'fixed',  // Fixes the position to the entire screen
                        top: 0,             // Aligns to the top
                        left: 0,            // Aligns to the left
                        right: 0,           // Ensures it spans the whole width
                        bottom: 0,          // Ensures it spans the whole height
                        backgroundColor: 'rgba(128, 128, 128, 0.3)',  // Semi-transparent gray
                        zIndex: 9999        // Ensures it appears above other content
                      }}>
                            <div
                              style={{
                                position: 'absolute',  // Makes it position relative to the parent container
                                top: '50%',             // Move it to the vertical center
                                left: '50%',            // Move it to the horizontal center
                                transform: 'translate(-50%, -50%)',  // Adjusts to exactly center it
                                backgroundColor: 'white',  // Modal background color
                                padding: '20px',           // Adds padding inside the modal
                                borderRadius: '8px',       // Optional: rounded corners
                                zIndex: 10000,             // Makes sure the modal is above the overlay
                              }}
                            >
                                <p>Email: illia.volchetskyi@gmail.com</p>
                                <p>Telegram: @ank1r0</p>
                                <p>WhatsApp: +48 730 525 599</p>                                
                                <button onClick=
                                    {() => close()}>
                                        Close window
                                </button>
                            </div>
                            <div>
                                
                            </div>
                        </div>
                    )
                }
            </Popup>
      </li>
    </ul>
  </div>
  <div className="navbar-right">
    <span>  
      <a target="_blank" href="https://www.linkedin.com/in/illia-volchetskyi-b69a21209/"><img src={linkedin} alt="github" height={50}/> </a>
    </span>
    <span>
      <a target="_blank" href="https://github.com/Ank1r0"><img src={github} alt="github" height={50}/> </a>
    </span>
  </div>
</nav>
);
};

export default Navbar;