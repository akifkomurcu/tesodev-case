import React from 'react'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'

import style from './style.module.css'

function Search() {
    return (
        <div className={style.searchPage}>
            <Header />
            <Content />
            <Footer />
        </div>
    )
}

export default Search