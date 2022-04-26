import { useState } from 'react'
import style from './style.module.css'
import { useSelector, useDispatch } from 'react-redux'
import mappin from './map-pin.png'
import Footer from './Footer'
import { setPage } from '../../redux/UserSlice'

function List() {
    const filteredResults = useSelector(state => state.search.filteredResults)
    //bulunulan sayfa bilgisi
    const [currentPage, setCurrentPage] = useState(1)
    //sayfada bulunacak sonuç sayısı
    const [resultsPerPage] = useState(5)
    //sayfa başına çıkan sonuç sayısı ile bulunulan sayfanın çarpımından elde ettiğim son sonuç indexi
    const indexOfLastResult = currentPage * resultsPerPage;
    //son sayfa sayısı ile sayfa başına çıkan sonuç sayısının farkından elde ettiğim ilk sonuç indexi
    const indexOfFirstResult = indexOfLastResult - resultsPerPage;

    const currentResults = filteredResults.slice(indexOfFirstResult, indexOfLastResult);

    const dispatch = useDispatch()
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
        dispatch(setPage(pageNumber))
    }
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
                                        {`${element.Date.DD}/${element.Date.MM}/${element.Date.YY}`}
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