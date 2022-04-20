import React from 'react'
import style from './style.module.css'
function Footer() {
    return (
        <div className={style.Footer}>

            <div className={style.pageButtons}>
                <button className={style.previousBtn}>Previous</button>
                <button className={style.pageOne}>1</button>
                <button className={style.pageTwo}>2</button>
                <button className={style.pageThree}>3</button>
                <div className={style.multiPage}>...</div>
                <button className={style.pageSeven}>7</button>
                <button className={style.pageEight}>8</button>
                <button className={style.pageNine}>9</button>
                <button className={style.nextBtn}>Next</button>

            </div>


        </div>
    )
}

export default Footer