import React from 'react'
import './Notiflication.css'
import Prizebox from '../../assets/Images/Notiflication/PrizeBox.png'
function Notiflication() {
    return (
        <div>
            <div className="notiflication_container">
                <div className="notflication_page">
                    <div className="notiflication_head">
                        <h2>NOTIFLICATIONS</h2>
                    </div>
                    <div className="notiflication_item">
                        <div className="notiflication_cart">
                            <div className="cart_left">
                                <div className="left_head">
                                    <p>BRAND NEW GAME!</p>
                                </div>
                                <div className="left_btbody">
                                    <p>PAC-MAN Speaker & Charger</p>
                                    <button className='notflication_button'>PLAY NOW</button>
                                </div>
                            </div>
                            <div className="cart_right">
                                <img src={Prizebox} alt="" />
                            </div>
                        </div>
                        <div className="notiflication_cart">
                            <div className="cart_left">
                                <div className="left_head">
                                    <p>BRAND NEW GAME!</p>
                                </div>
                                <div className="left_btbody">
                                    <p>PAC-MAN Speaker & Charger</p>
                                    <button className='notflication_button'>PLAY NOW</button>
                                </div>
                            </div>
                            <div className="cart_right">
                                <img src={Prizebox} alt="" />
                            </div>
                        </div>
                        <div className="notiflication_cart">
                            <div className="cart_left">
                                <div className="left_head">
                                    <p>BRAND NEW GAME!</p>
                                </div>
                                <div className="left_btbody">
                                    <p>PAC-MAN Speaker & Charger</p>
                                    <button className='notflication_button'>PLAY NOW</button>
                                </div>
                            </div>
                            <div className="cart_right">
                                <img src={Prizebox} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notiflication