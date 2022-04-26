import { useState } from 'react';
import style from './style.module.css'
import Vector from './Vector.png'
const initialFormValues = { NameSurname: "", Country: "", City: "", Email: "" };
function Form() {
    const [form, setForm] = useState(initialFormValues);
    const [Emailerror, setEmailerror] = useState('');
    const [CountryError, setCountryError] = useState('');
    const [CityError, setCityError] = useState('');
    const [NameError, setNameError] = useState('');
    const [CheckError, setCheckError] = useState(false);
    const [AddBtnFullfilled, setAddBtnFullfilled] = useState(false);

    const onChangeInput = (e) => {

        setForm({ ...form, [e.target.name]: e.target.value })
        if (form.Email != '' && form.Country != '' && form.City != '' && form.NameSurname != '') {
            setAddBtnFullfilled(true)
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (form.NameSurname.length < 3 || form.NameSurname.includes(1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9 || 0) === true || form.NameSurname.length > 60) {
            setCheckError(true)
            setNameError("NameSurname");
            console.log(NameError);
            return false

        }
        else {
            setNameError("")
        }

        if (form.Country.length < 3 || form.Country.includes(1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9 || 0) === true || form.Country.length > 40) {
            setCheckError(true)
            setCountryError("Country");
            console.log(CountryError);
            return false

        }
        else {
            setCountryError("")
        }

        if (form.City.length < 3 || form.City.includes(1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9 || 0) === true || form.City.length > 40) {
            setCheckError(true)
            setCityError("City");
            console.log(CityError);
            return false

        }
        else {
            setCityError("")
        }

        if (form.Email.includes("@") === false || form.Email.length < 5) {
            setCheckError(true)
            setEmailerror("Email");
            console.log(Emailerror);
            return false
        }
        else {
            setEmailerror("")

        }

        setForm(initialFormValues);
        setAddBtnFullfilled(false)
        console.log(form)

    }



    return (
        <>
            <form onSubmit={onSubmit}>
                <label htmlFor="" className={NameError === 'NameSurname' ? style.NameLabelerror : style.NameLabel}>Name Surname</label>
                <div className={NameError === 'NameSurname' ? style.NameSurnameDivError : style.NameSurname} >
                    <input
                        className={NameError === 'NameSurname' ? style.InputNameSurnameError : style.InputNameSurname}
                        name="NameSurname" value={form.NameSurname}
                        onChange={onChangeInput}
                        placeholder="Enter name and surname"
                        required />
                </div>

                <label htmlFor="" className={CountryError === 'Country' ? style.CountryLabelerror : style.CountryLabel}>Country</label>
                <div className={CountryError === 'Country' ? style.CountryDivError : style.Country}>
                    <input
                        className={CountryError === 'Country' ? style.InputCountryError : style.InputCountry}
                        name="Country"
                        value={form.Country}
                        onChange={onChangeInput}
                        placeholder="Enter a country"
                        required />
                </div>

                <label htmlFor="" className={CityError === 'City' ? style.CityLabelerror : style.CityLabel}>City</label>
                <div className={CityError === 'City' ? style.CityDivError : style.City}>
                    <input
                        className={CityError === 'City' ? style.InputCityError : style.InputCity}
                        name="City" value={form.City}
                        onChange={onChangeInput}
                        placeholder="Enter a city"
                        required />
                </div>

                <label htmlFor="" className={Emailerror === 'Email' ? style.EmailLabelerror : style.EmailLabel}>Email</label>
                <div className={Emailerror === 'Email' ? style.EmailDivError : style.Email}>
                    <input
                        className={Emailerror === 'Email' ? style.InputEmailError : style.InputEmail}
                        name="Email" value={form.Email}
                        onChange={onChangeInput}
                        placeholder="Enter a e-mail (abc@xyz.com)"
                        required />
                </div>
                <button className={AddBtnFullfilled == false ? style.AddBtn : style.AddBtnFullfilled}>Add</button>

            </form>
            {
                (CheckError === true && AddBtnFullfilled == true) && < div className={style.ErrorMessageDiv}>
                    <div className={style.ErrorMessageExit}>
                        <img src={Vector} alt="" onClick={() => setCheckError(false)} />
                    </div>
                    <div className={style.ErrorMessageButton}>Error</div>
                    <div className={style.ErrorMessageTitle}>Error while adding link element</div>
                    <div className={style.ErrorMessageContent}>
                        {NameError && "Name Surname (only letters, min 4-max 60 character)" || CountryError && "Country (only letters, min 2-max 40 character)" || CityError && "City (only letters, min 2-max 40 character)" || Emailerror && "Email is not valid    (min 5 characters)"}
                    </div>
                </div>
            }
        </>
    )
}

export default Form