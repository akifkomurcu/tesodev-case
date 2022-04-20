import React from 'react'
import './style.css'
import FooterImage from './Footer-image.png'
import map from './map.png'
function Footer() {
    return (
        <div>


            <div className='Footer'>
                <img src={FooterImage} alt="" className='Footer-image' />
                <div className="adress">
                    İletişim
                    Adres: Çifte Havuzlar Mah. Eski Londra Asfaltı Cad. Kuluçka Merkezi D2 Blok No: 151/1F İç Kapı No: 2B03 Esenler/İstanbul
                    <div className="email"> Email: bilgi@tesodev.com</div>

                </div>
                <div>
                    <img src={map} alt="" className='map' />
                </div>

            </div>

        </div>
    )
}

export default Footer