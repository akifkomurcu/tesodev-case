import { useState } from 'react'
import style from './style.module.css'
import { useSelector, useDispatch } from 'react-redux'
import mappin from './map-pin.png'
import Footer from './Footer'


function List({ clicked }) {
    const filteredResults = useSelector(state => state.search.filteredResults)



    //bulunulan sayfa bilgisi
    const [currentPage, setCurrentPage] = useState(1)
    //sayfada bulunacak sonuç sayısı
    const [resultsPerPage] = useState(5)

    const indexOfLastResult = currentPage * resultsPerPage;
    const indexOfFirstResult = indexOfLastResult - resultsPerPage;
    const currentResults = filteredResults.slice(indexOfFirstResult, indexOfLastResult);

    const paginate = (pageNumber) => setCurrentPage(pageNumber)
    // index < 6 && clicked == true && 
    return (
        <>
            <div className={style.List}>

                {
                    currentResults.length != 0 && currentResults.map((element, index) => (

                        <div key={index} className={style.ListResults}>
                            <div className={style.ResultText}>
                                <img className={style.ResultIcon} src={mappin} alt="" />
                                <div className={style.ResultTextMain}>
                                    {/* company olsun */}
                                    {element.Company}
                                    <div className={style.ResultTextCaption}>
                                        {/* email olsun */}
                                        {element.Email}
                                    </div>
                                </div>

                                <div className={style.ResultTextMainName}>
                                    {/* isim olsun */}
                                    {element.Name}
                                    <div className={style.ResultTextMainDate}>
                                        {/* tarih olsun */}
                                        {element.Date}
                                    </div>
                                </div>

                            </div>
                            <hr className={style.ListResultsLine} />
                        </div>
                    ))
                }




            </div>
            <Footer resultsPerPage={resultsPerPage} totalResults={filteredResults.length} paginate={paginate} />
        </>
    )

}

export default List