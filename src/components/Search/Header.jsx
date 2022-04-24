import { useState } from "react";
import { Link } from "react-router-dom";
import tesodevLogo from './tesodev-logo.png'
import sort from './sort.png'
import style from './style.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { setFilteredResults, setSortType } from '../../redux/UserSlice'
import mockData from '../../mockData.json'
import List from "./List";
function Header() {

    // reduxtan gelen filtre kelimesi
    const filtertext = useSelector(state => state.search.searchText)
    const filteredText = filtertext.filterText;

    //butona basıldığında sonuçların listelenmesi için tutulmuş durum
    const [clicked, setClicked] = useState(false)
    const [orderClicked, setOrderClicked] = useState(false)

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
                <button className={style.order} onClick={() => setOrderClicked(!orderClicked)}>
                    <span className={style.orderIcon}>
                        <img src={sort} alt="" />
                    </span>
                    <span className={style.orderBtnText}>Order By</span>
                </button>

            </div>
            {/* order select*/}
            {
                orderClicked == true && <div className={style.orderOptions}>
                    <div className={style.orderNameAscending} onClick={() => dispatch(setSortType("NameAsc"))}>Name ascending</div>
                    <div className={style.orderNameDescending} onClick={() => dispatch(setSortType("NameDesc"))}>Name descending</div>
                    <div className={style.orderYearAscending} onClick={() => dispatch(setSortType("YearAsc"))}>Year ascending</div>
                    <div className={style.orderYearDescending} onClick={() => dispatch(setSortType("YearDesc"))}>Year descending</div>
                </div>
            }

            <List clicked={clicked} />



        </>
    )
}

export default Header