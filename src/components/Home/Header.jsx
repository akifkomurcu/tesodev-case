import { Link } from "react-router-dom";
import './style.css'
import TesodevLogo from '../../tesodev-logo.png'
function Header() {
    return (
        <>
            {/* yeni kayıt ekle butonu. Link sayesinde signup adresine yönleniyoruz */}

            <div className='Add-btn'>
                <Link to="/signup">
                    <button className='btn' >Add new record</button>
                </Link>
            </div>
            {/* Tesodev Logosu */}
            <div>
                <img src={TesodevLogo} alt="tesodev-logo" className='tesodev-logo-landing-page' />
            </div>

            <p className='Text-under-logo'>Search App</p>


            <div className='Top-of-SearchInput'>
                <div className='text'>Find in records</div>


            </div>

        </>
    )
}

export default Header