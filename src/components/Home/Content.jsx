import React from 'react'
import './style.css'
import chevronleft from './chevron-left.png'
import chevronright from './Left Actionable.png'

import bigNewsimg from './big-news-image.png'
function Content() {
    return (
        <>

            <div className='news-title'>
                <div className='news-title-content'>Top News</div>
            </div>
            {/* haberler slider'ı burada  */}
            <div className="slider">
                <div className="leftSliderIcon">

                    <img src={chevronleft} alt="" />

                </div>

                <div className="news-big">
                    <img src={bigNewsimg} alt="" className='news-big-image' />
                    <div className='img-All-text'>
                        <div className='img-text'>A Plan to Rebuild the Bus Terminal Everyone Loves to Hate
                            <div className="img-text-caption">1h ago · by Troy Corlson</div>
                        </div>

                    </div>
                </div>
                <div className="news-big">
                    <img src={bigNewsimg} alt="" className='news-big-image' />
                    <div className='img-All-text'>
                        <div className='img-text'>A Plan to Rebuild the Bus Terminal Everyone Loves to Hate
                            <div className="img-text-caption">1h ago · by Troy Corlson</div>
                        </div>

                    </div>
                </div>
                <div className="news-big">
                    <img src={bigNewsimg} alt="" className='news-big-image' />
                    <div className='img-All-text'>
                        <div className='img-text'>A Plan to Rebuild the Bus Terminal Everyone Loves to Hate
                            <div className="img-text-caption">1h ago · by Troy Corlson</div>
                        </div>

                    </div>
                </div>
                <div className="rightSliderIcon">

                    <img src={chevronright} alt="" />

                </div>

            </div>

        </>
    )
}

export default Content