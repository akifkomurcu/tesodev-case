import { Link } from "react-router-dom";
import tesodevLogo from './tesodev-logo.png'
import style from './style.module.css'
function Header({ filterText }) {
    console.log("filterText searchte :", filterText)
    return (
        <div className={style.Header}>
            <Link to="/">
                <div>
                    <img className={style.searchNavImage} src={tesodevLogo} alt="" />
                </div>
            </Link>
            <div className={style.searchInput}>
                <input className={style.input} type="text" />
            </div>
            <div className={style.searchButton}>
                <button className={style.btn}>Search</button>
            </div>
            <Link to="/signup">
                <div className={style.addNewRecord}>
                    <button className={style.addNewRecordBtn}>Add new Record</button>
                </div>
            </Link>
        </div>
    )
}

export default Header