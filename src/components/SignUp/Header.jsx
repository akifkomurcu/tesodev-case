import { Link } from "react-router-dom";
import tesodevLogo from './tesodev-logo.png'
import Arrow from './Arrow.png'
import style from './style.module.css'
function Header() {

    return (
        <div className={style.Header}>
            <Link to="/">
                <div>
                    <img src={tesodevLogo} className={style.searchNavImage} alt="" />
                </div>
            </Link>
            <Link to="/search">
                <div className={style.Arrow}>
                    <img src={Arrow} alt="" />
                </div>
            </Link>
            <div className={style.ReturnText}>Return to List Page</div>


        </div>
    )
}

export default Header