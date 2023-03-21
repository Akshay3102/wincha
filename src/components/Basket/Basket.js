import React, { useState } from 'react'
import './Basket.css'
import winItem from '../../assets/Images/Basket/winitem_one.png'
import { FiShare2 } from 'react-icons/fi'
import { MdOutlineReplayCircleFilled } from 'react-icons/md'
import ClubeHouse from '../../assets/Images/Basket/clubhouse.png'
import Ticket from '../../assets/Images/Basket/Ticket.png'


function Basket() {
    const [primary,setPrimary] = useState(false)
  
    return (
        <div>
            <div className="basket_container">
                <div className="basket_page">
                    <div className="basket_head">
                        <h2>BASKET</h2>
                    </div>
                    <div className="basket_top">
                        <div className="winitem_one">
                            <div className="winitem_first">
                                <img src={winItem} alt="" />
                                <p>Wicha Plush</p>
                            </div>
                            <div className="winitem_second">
                                <MdOutlineReplayCircleFilled />
                                <FiShare2 />
                            </div>
                        </div>
                        <div className="winitem_one">
                            <div className="winitem_first">
                                <img src={winItem} alt="" />
                                <p>Wicha Plush</p>
                            </div>
                            <div className="winitem_second">
                                <MdOutlineReplayCircleFilled />
                                <FiShare2 />
                            </div>
                        </div>
                        <div className="winitem_one">
                            <div className="winitem_first">
                                <img src={winItem} alt="" />
                                <p>Wicha Plush</p>
                            </div>
                            <div className="winitem_second">
                                <MdOutlineReplayCircleFilled />
                                <FiShare2 />
                            </div>
                        </div>
                    </div>
                    <div className="basket_bottom">
                        <div className="basket_btop">
                            <div className="clubehouse">
                                <img src={ClubeHouse} alt="" />
                            </div>
                            <div className="free">
                                <label htmlFor="">FREE</label>
                                {/* <input onClick={(e)=>{
                                    console.log(e.target.checked)
                                }} type="radio" name="" id="" /> */}
                                <span className={primary?"primeActive":"primeNotActive"} onClick={()=>{
                                    setPrimary(true)
                                }}></span>
                            </div>
                        </div>
                        <div className="basket_bbottom">
                            <div className="standard">
                                <p>Standard Shipping</p>
                            </div>
                            <div className="basket_ticket">
                                <img src={Ticket} alt="" />
                                <p>500</p>
                                {/* <input type="radio" name="" id="" value={true} /> */}
                                <span className={primary?"primeNotActive":"primeActive"} onClick={()=>{
                                   setPrimary(false)
                                }}></span>
                            </div>
                        </div>
                        <div className="basket_checkout">
                            <button className='checkout'>CHECKOUT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Basket