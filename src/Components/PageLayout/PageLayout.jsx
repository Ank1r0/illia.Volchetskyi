import React from 'react'

import Header from './Header/Header'
import Footer from './Footer/Footer'

const PageLayout = (props) => {

    const children = props.children;

  return (
    <div>
        <Header/>

        <main>{children}</main>
        <footer></footer>
        
        <Footer/>
        
    </div>
  )
}

export default PageLayout