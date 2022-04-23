import { useState } from "react";
import mappinpng from './map-pin.png'
import Vector from './Vector.png'
import './style.css'
import { Link } from "react-router-dom";
import SearchHeader from '../Search/Header'
import mockData from '../../mockData.json'
function Form() {
    const [filterText, setFilterText] = useState('')

    const filtered = mockData.filter((item) => {
        return Object.keys(item).some((key) =>
            item[key].toString().toLowerCase().includes(filterText.toLowerCase())
        )
    })


    const handleChange = (e) => {
        setFilterText(e.target.value)

    }
    const handleSubmit = (e) => {


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
                    onClick={() => <SearchHeader filterText={filterText} />}
                >Search</button>
            </Link>

            {/* liste sonuçları burada gösterilecek */}
            {
                filterText != "" && <div className="list-results">
                    {
                        filtered.map((e, i) => (
                            i < 3 && <div className='result'>
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
                        filtered.length >= 3 && <div className="show-more-field">
                            Show more..
                        </div>
                    }
                </div>
            }

        </>
    )
}

export default Form