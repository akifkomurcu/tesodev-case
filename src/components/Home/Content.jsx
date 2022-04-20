import React from 'react'
import './style.css'
import bigNewsimg from './big-news-image.png'
function Content() {
    return (
        <div>

            <div className='news-title'>
                <div className='news-title-content'>Top News</div>
            </div>

            <div className="slider">
                <div className="leftSliderIcon">
                    <button><svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.162048 24.5C0.162048 11.2452 10.9072 0.5 24.162 0.5C37.4169 0.5 48.162 11.2452 48.162 24.5C48.162 37.7548 37.4169 48.5 24.162 48.5C10.9072 48.5 0.162048 37.7548 0.162048 24.5Z" fill="#EEEEEE" />
                        <path d="M30.162 36.5L18.162 24.5L30.162 12.5" stroke="#8A8A8A" stroke-width="2.7" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    </button>
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
                    <button>
                        <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M48.5146 24.5C48.5146 11.2452 37.7694 0.5 24.5146 0.5V0.5C11.2598 0.5 0.514587 11.2452 0.514587 24.5V24.5C0.514587 37.7548 11.2598 48.5 24.5146 48.5V48.5C37.7694 48.5 48.5146 37.7548 48.5146 24.5V24.5Z" fill="#EEEEEE" />
                            <path d="M18.5146 36.5L30.5146 24.5L18.5146 12.5" stroke="#8A8A8A" stroke-width="2.7" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>


                    </button>
                </div>

            </div>

        </div>
    )
}

export default Content