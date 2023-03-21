import React from 'react'
import './FAQ.css';
import Down from '../../assets/Images/FAQ/DropDown.svg'
import Up from '../../assets/Images/FAQ/DropUp.svg'
// import { useState } from 'react';

function FAQ() {
    // const [question,setQuestion] = useState(false)
    return (
        <div>
            <div className="faq_container">
                <div className="faq_page">
                    <div className="faq_head">
                        <p>FAQ</p>
                    </div>
                    <div className="faq_main">
                        <div className="faq_itemtext">
                            <div className="registration">
                                <p>REGISTRATION</p>
                            </div>
                            <img src={Down} alt="" />
                        </div>
                        <div className="faq_replybox">
                            <div className="faq_replyhead">
                                <div className="head_title">
                                    <p>Q.HOW TO REGISTER ?</p>
                                </div>
                                <div className="head_icon">
                                    <img src={Up} alt="" />
                                </div>
                            </div>
                            <div className="faq_replycontent">
                                <p>something is here,</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ