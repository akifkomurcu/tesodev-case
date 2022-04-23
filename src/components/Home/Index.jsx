import React from 'react'
import './style.css'

import Header from './Header'
import Form from './Form'
import Content from './Content'
import Footer from './Footer'

function Home() {
    return (
        <div className='landing-page'>

            <Header />
            <Form />
            <Content />
            <Footer />


        </div>
    )
}

export default Home