import React from 'react'
import tesodevLogo from './tesodev-logo.png'
import style from './style.module.css'
function Header() {
    return (
        <div className={style.Header}>
            <div>
                <img src={tesodevLogo} className={style.searchNavImage} alt="" />
            </div>
            <div className={style.searchInput}>
                <input type="text" className={style.input} />
            </div>
            <div className={style.searchButton}>
                <button className={style.btn}>Search</button>
            </div>
            <div className={style.addNewRecord}>
                <button className={style.addNewRecordBtn}>Add new Record</button>
            </div>

        </div>
    )
}

export default Header