import React from 'react'
import style from './style.module.css'
function Footer({ resultsPerPage, totalResults, paginate }) {


    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalResults / resultsPerPage); i++) {
        pageNumbers.push(i);

    }

    return (
        <div className={style.Footer}>
            <div className={style.pageButtons}>
                <button className={style.previousBtn} onClick={() => paginate()}>Previous</button>
                {
                    pageNumbers.map(number => (

                        <div key={number}>

                            <button onClick={() => paginate(number)} className={style.pageButton}>   {number}</button>


                        </div>
                    ))
                }

                {/* <button className={style.pageTwo}>2</button>
                <button className={style.pageThree}>3</button>
                <div className={style.multiPage}>...</div>
                <button className={style.pageSeven}>7</button>
                <button className={style.pageEight}>8</button>
                <button className={style.pageNine}>9</button>
                <button className={style.nextBtn}>Next</button> */}

            </div>




        </div>
    )
}

export default Footer





