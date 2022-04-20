import React from 'react'
import tesodevLogo from './tesodev-logo.png'
import style from './style.module.css'
function Header() {
    return (
        <div className={style.Header}>
            <div>
                <img src={tesodevLogo} className={style.searchNavImage} alt="" />
            </div>

            <div className={style.Arrow}></div>
            <div className={style.ReturnText}>Return to List Page</div>


        </div>
    )
}

export default Header