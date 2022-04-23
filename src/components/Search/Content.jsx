
import mappin from './map-pin.png'
import sort from './sort.png'
import style from './style.module.css'
import mockData from '../../mockData.json'
function Content() {



    return (
        <>
            {/* order button */}

            <div className={style.orderBtn}>
                <div className={style.order}>
                    <div className={style.orderIcon}>
                        <img src={sort} alt="" />
                    </div>
                </div>
                <div className={style.orderBtnText}>Order By</div>
            </div>
            {/* order select*/}
            <div className={style.orderOptions}>
                <div className={style.orderNameAscending}>Name ascending</div>
                <div className={style.orderNameDescending}>Name descending</div>
                <div className={style.orderYearAscending}>Year ascending</div>
                <div className={style.orderYearDescending}>Year descending</div>
            </div>

            {/* list */}
            <div className={style.List}>

                {
                    mockData.map((element, index) => (

                        index < 5 && <div className={style.ListResults}>
                            <div className={style.ResultText}>
                                <img className={style.ResultIcon} src={mappin} alt="" />
                                <div className={style.ResultTextMain}>
                                    {/* company olsun */}
                                    {element.Company}
                                    <div className={style.ResultTextCaption}>
                                        {/* email olsun */}
                                        {element.Email}
                                    </div>
                                </div>

                                <div className={style.ResultTextMainName}>
                                    {/* isim olsun */}
                                    {element.Name}
                                    <div className={style.ResultTextMainDate}>
                                        {/* tarih olsun */}
                                        {element.Date}
                                    </div>
                                </div>

                            </div>
                            <hr className={style.ListResultsLine} />
                        </div>
                    ))
                }




            </div>



        </>
    )
}

export default Content