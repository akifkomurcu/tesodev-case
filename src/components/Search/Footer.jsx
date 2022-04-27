import { useSelector } from 'react-redux'
import style from './style.module.css'

function Footer({ resultsPerPage, totalResults, paginate }) {

    const pageNum = useSelector(state => state.search.page)
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalResults / resultsPerPage); i++) {
        pageNumbers.push(i);

    }
    const filtertext = useSelector(state => state.search.filteredResults)


    const multipaging = [];

    if (pageNumbers.length > 6) {
        const tut = pageNumbers.length - 3;
        const pageNumbers3 = pageNumbers.slice(0, 3);
        const pageNumbers2 = pageNumbers.slice(tut, pageNumbers.length);
        multipaging.push(...pageNumbers3, ...pageNumbers2);
    }

    return (
        <div className={style.Footer}>
            <div className={style.pageButtons}>

                {
                    filtertext != "" && pageNum && <button className={pageNum > 1 ? style.previousBtn : style.previousBtnNone} onClick={() => paginate(pageNum - 1)}>Previous</button>
                }

                {/* sayfa sayısı 8 den çok değilse çalışır */}
                {
                    pageNumbers.map(number => (
                        <div key={number}>
                            {
                                multipaging.length == 0 && <button onClick={() => paginate(number)} className={number === pageNum ? style.pageButtonPageNum : style.pageButton}>   {number}</button>



                            }
                        </div>
                    ))
                }
                {/* sayfa sayısı 6 i geçtiğinde çalışır */}
                {
                    pageNumbers.map(number => (
                        <div key={number}>
                            {
                                pageNumbers.length >= 6 && multipaging.includes(number)
                                    ?

                                    <button onClick={() => paginate(number)} className={number === pageNum ? style.pageButtonPageNum : style.pageButton}>{number}</button>

                                    :

                                    number === 4 && <div className={style.multiPage}>...</div>

                            }
                        </div>
                    ))
                }


                {
                    filtertext != "" && pageNum && <button className={pageNum != pageNumbers.length ? style.nextBtn : style.nextBtnNone} onClick={() => paginate(pageNum + 1)} >Next</button>
                }

            </div>
        </div>
    )
}

export default Footer





