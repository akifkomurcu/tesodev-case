import { useState } from "react";
import { Link } from "react-router-dom";
import tesodevLogo from './tesodev-logo.png'
import sort from './sort.png'
import style from './style.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { setFilteredResults } from '../../redux/UserSlice'
import mockData from '../../mockData.json'
import List from "./List";
function Header() {

    // reduxtan gelen filtre kelimesi
    const filtertext = useSelector(state => state.search.searchText)
    const filteredText = filtertext.filterText;

    //butona basıldığında sonuçların listelenmesi için tutulmuş durum
    const [clicked, setClicked] = useState(false)

    //search sayfasında arama yapabilmek için inputtan veri alan state. İnputun verisi filterinput'a düşer.
    const [filterinput, setFilterInput] = useState(filteredText)

    const dispatch = useDispatch();
    const handleSubmit = () => {

        const filtered = mockData.filter((item) => {
            return Object.keys(item).some((key) =>
                item[key].toString().toLowerCase().includes(filterinput.toLowerCase())
            )
        })
        dispatch(setFilteredResults(filtered))

        setClicked(true)

    }






    return (
        <>
            <div className={style.Header}>
                <Link to="/">
                    <div>
                        <img className={style.searchNavImage} src={tesodevLogo} alt="" />
                    </div>
                </Link>
                <div className={style.searchInput}>
                    <input className={style.input} type="text" value={filterinput} onChange={(e) => setFilterInput(e.target.value)} />
                </div>
                <div className={style.searchButton}>
                    <button className={style.btn} onClick={handleSubmit}>Search</button>
                </div>
                <Link to="/signup">
                    <div className={style.addNewRecord}>
                        <button className={style.addNewRecordBtn}>Add new Record</button>
                    </div>
                </Link>

            </div>
            {/* order button */}

            <div className={style.orderBtn}>
                <div className={style.order}>
                    <div className={style.orderIcon}>
                        <img src={sort} alt="" />
                    </div>
                </div>
                <div className={style.orderBtnText}>Order By</div>
            </div>
            {/* order select*/}
            <div className={style.orderOptions}>
                <div className={style.orderNameAscending}>Name ascending</div>
                <div className={style.orderNameDescending}>Name descending</div>
                <div className={style.orderYearAscending}>Year ascending</div>
                <div className={style.orderYearDescending}>Year descending</div>
            </div>

            <List clicked={clicked} />



        </>
    )
}

export default Header