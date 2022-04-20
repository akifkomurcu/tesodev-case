import React from 'react'
import './style.css'
function Form() {
    return (
        <>
            <div className='SearchInput'>
                <div className='Input-Field'>
                    <div className='search-icon'>
                        <div className="vector"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M28 28L22.2 22.2M25.3333 14.6667C25.3333 20.5577 20.5577 25.3333 14.6667 25.3333C8.77563 25.3333 4 20.5577 4 14.6667C4 8.77563 8.77563 4 14.6667 4C20.5577 4 25.3333 8.77563 25.3333 14.6667Z" stroke="#090A0A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        </div>
                    </div>
                    <input type="text" className='Input-Landing-page' />
                </div>


            </div>
            <button className='Search-button'>Search</button>

            <div className="list-results">
                <ul>
                    <li className='result'>
                        <div className="topResult">18th Avenue</div>
                        <div className='result-caption'>Oakley Avenue, Hammond, IN</div>
                    </li>
                    <li className='result'>
                        <div className="topResult">18th Avenue</div>
                        <div className='result-caption'>Oakley Avenue, Hammond, IN</div>
                    </li>
                    <li className='result'>
                        <div className="topResult">18th Avenue</div>
                        <div className='result-caption'>Oakley Avenue, Hammond, IN</div>
                    </li>

                </ul>
            </div>

        </>
    )
}

export default Form