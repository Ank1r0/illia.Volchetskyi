import React from 'react'
import PageLayout from '../Components/PageLayout/PageLayout'

const Projects = () => {
  return (
    <PageLayout>
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


    </PageLayout>
    
  )
}

export default Projects