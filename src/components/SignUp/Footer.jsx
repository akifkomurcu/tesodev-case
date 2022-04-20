import React from 'react'
import style from './style.module.css'
function Footer() {
    return (
        <div className={style.ErrorMessageDiv}>
            <div className={style.ErrorMessageExit}></div>
            <div className={style.ErrorMessageButton}>Error</div>
            <div className={style.ErrorMessageTitle}>Error while adding link element</div>
            <div className={style.ErrorMessageContent}>Name and surname should contain at least 2 words</div>
        </div>
    )
}

export default Footer