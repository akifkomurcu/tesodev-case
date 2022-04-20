import React from 'react'
import './style.css'

import Header from './Header'
import Form from './Form'
import Content from './Content'
import Footer from './Footer'

function Home() {
    return (
        <section className='landing-page'>

            <Header />
            <Form />
            <Content />
            <Footer />


        </section>
    )
}

export default Home