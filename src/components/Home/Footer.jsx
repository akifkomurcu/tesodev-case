import React from 'react'
import './style.css'
import FooterImage from './Footer-image.png'


function Footer() {
    return (
        <>


            <div className='Footer'>
                <img src={FooterImage} alt="" className='Footer-image' />
                <div className="adress">
                    İletişim
                    Adres: Çifte Havuzlar Mah. Eski Londra Asfaltı Cad. Kuluçka Merkezi D2 Blok No: 151/1F İç Kapı No: 2B03 Esenler/İstanbul
                    <div className="email"> Email: bilgi@tesodev.com</div>

                </div>

                <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48164.47615648012!2d28.890948000000005!3d41.019135!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc98f44e9057adcde!2zVGVzb2RldiBZYXrEsWzEsW0gRG9uYW7EsW0gQmlsacWfaW0gQml5b21lZGlrYWwgS29uZ3JlIFR1cml6bSBFxJ9pdGltIERhbsSxxZ9tYW5sxLFrIExpbWl0ZWQgxZ5pcmtldGk!5e0!3m2!1str!2str!4v1650643434468!5m2!1str!2str" width="467" height="222"></iframe>


            </div>

        </>
    )
}

export default Footer