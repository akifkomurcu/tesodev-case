import React from 'react'
import style from './style.module.css'
function Form() {
    return (
        <div>
            <label htmlFor="" className={style.NameLabel}>Name Surname</label>
            <div className={style.NameSurname}>
                <input type="text" className={style.InputNameSurname} />
            </div>

            <label htmlFor="" className={style.CountryLabel}>Country</label>
            <div className={style.Country}>
                <input type="text" className={style.InputCountry} />
            </div>

            <label htmlFor="" className={style.CityLabel}>City</label>
            <div className={style.City}>
                <input type="text" className={style.InputCity} />
            </div>

            <label htmlFor="" className={style.EmailLabel}>Email</label>
            <div className={style.Email}>
                <input type="text" className={style.InputEmail} />
            </div>
            <button className={style.AddBtn}>Add</button>

        </div>
    )
}

export default Form