import React from 'react'
import tesodevLogo from './tesodev-logo.png'
import style from './style.module.css'
function Content() {
    return (
        <div>
            <div className={style.orderBtn}>
                <div className={style.orderIcon}></div>
                <button className={style.order}>Order By</button>
            </div>
            <div className={style.orderOptions}>
                <div className={style.orderNameAscending}>Name ascending</div>
                <div className={style.orderNameDescending}>Name descending</div>
                <div className={style.orderYearAscending}>Year ascending</div>
                <div className={style.orderYearDescending}>Name descending</div>
            </div>
            <div className={style.ListResults}>
                <div className={style.ResultIcon}></div>
                <div className={style.ResultText}>
                    <div className={style.ResultTextMain}>
                        18th Street Brewery
                        <div className={style.ResultTextCaption}>
                            Oakley Avenue, Hammond, IN
                        </div>
                    </div>

                    <div className={style.ResultTextMainName}>
                        Jane Doe
                        <div className={style.ResultTextMainDate}>
                            01/20/2021
                        </div>
                    </div>

                </div>
            </div>

            <hr className={style.ListResultsLine} />

        </div>
    )
}

export default Content