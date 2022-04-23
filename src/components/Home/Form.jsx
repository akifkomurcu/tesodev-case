import { useState } from "react";
import mappinpng from './map-pin.png'
import Vector from './Vector.png'
import './style.css'
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import mockData from '../../mockData.json'
import { setText, setLoading, setError } from '../../redux/UserSlice'
function Form() {
    const [filterText, setFilterText] = useState('')

    const filtered = mockData.filter((item) => {
        return Object.keys(item).some((key) =>
            item[key].toString().toLowerCase().includes(filterText.toLowerCase())
        )
    })
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setFilterText(e.target.value)

    }
    const handleSubmit = (e) => {
        dispatch(setText({ filterText }))


    }


    return (
        <>
            <div className='SearchInput'>
                <div className='Input-Field'>
                    <div className='search-icon'>
                        <div className="vector">
                            <img src={Vector} alt="" />
                        </div>
                    </div>
                    {/* Arama yapacağımız input */}
                    <input
                        value={filterText}
                        name="inputSearch"
                        className='Input-Landing-page'
                        onChange={handleChange}
                    />
                </div>


            </div>
            {/* Daha fazla kayıt görebileceğimiz search sayfasına yönlendiren buton */}
            <Link to="/search">
                <button
                    className='Search-button'
                    onClick={handleSubmit}
                >Search</button>
            </Link>

            {/* liste sonuçları burada gösterilecek */}
            {
                filterText != "" && filtered.length != 0 && < div className="list-results">
                    {
                        filtered.map((e, i) => (
                            i < 3 && <div key={i} className='result'>
                                <div className="">
                                    <img className="result-icon" src={mappinpng} alt="" />
                                </div>

                                <div className="topResult">
                                    {/* isim soyisim */}
                                    {e.Name}

                                    <div className='result-caption'>
                                        {/* email */}
                                        {e.Email}
                                    </div>
                                </div>

                            </div>
                        ))
                    }
                    {
                        filtered.length >= 3 && <Link to="/search"><div onClick={handleSubmit} className="show-more-field">
                            Show more..
                        </div></Link>
                    }
                </div>
            }

        </>
    )
}

export default Form