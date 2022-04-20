import React from 'react'
import './style.css'
import TesodevLogo from '../../tesodev-logo.png'
function Header() {
    return (
        <>

            <div className='Add-btn'>
                <button className='btn'>Add new record</button>
            </div>
            <div>
                <img src={TesodevLogo} alt="tesodev-logo" className='tesodev-logo-landing-page' />
            </div>

            <p className='Text-under-logo'>Search App</p>


            <div className='Top-of-SearchInput'>
                <div className='text'>Find in records</div>


            </div>

        </>
    )
}

export default Header