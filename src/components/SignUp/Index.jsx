import React from 'react'
import Header from './Header'
import Form from './Form'

import style from './style.module.css'
function SignUp() {
    return (
        <div className={style.signuppage}>
            <Header />
            <Form />

        </div>
    )
}

export default SignUp