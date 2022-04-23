import React from 'react'
import style from './style.module.css'
function Footer({ resultsPerPage, totalResults, paginate }) {
    console.log("totalResults", totalResults)
    console.log("resultsPerPage", resultsPerPage)

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalResults / resultsPerPage); i++) {
        pageNumbers.push(i);
        console.log("pageNumbers", pageNumbers)
    }

    return (
        <div className={style.Footer}>

            <div className={style.pageButtons}>
                <button className={style.previousBtn} onClick={() => paginate()}>Previous</button>
                {
                    pageNumbers.map(number => (

                        <div key={number}>

                            <button onClick={() => paginate(number)} className={style.pageOne}>   {number}</button>


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






{/* <ul >
{pageNumbers.map(number => (
    <li key={number}>
        <a onClick={() => paginate(number)} href="#">
            {number}
        </a>
    </li>
))}
{/* <button className={style.previousBtn}>Previous</button>
<button className={style.pageOne}>1</button> 

<button className={style.nextBtn}>Next</button>  */}
