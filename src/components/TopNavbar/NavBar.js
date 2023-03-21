import React from 'react'
import './NavBar.css';
import winchaicon from '../../assets/Images/Header/WinchaIcon.png'
import ticket from '../../assets/Images/Header/Ticket.png'
import add from '../../assets/Images/Header/Add.png'
import { GoThreeBars } from "react-icons/go";

function NavBar() {
    return (
        <div>
            <div className="Navbar">
                <div className="logo">
                    <img src={winchaicon} alt="" />
                </div>
                <div className="menu">
                    <ul>
                        <li>
                            <p>Home</p>
                        </li>
                        <li>
                            <p>Prizes</p>
                        </li>
                        <li>
                            <p>Support</p>
                        </li>
                        <li>
                            <p>Basket</p>
                        </li>
                    </ul>
                </div>
                <div className="ticket">
                    <div className="ticketimage">
                        <img src={ticket} alt="" />
                    </div>
                    <div className="price">
                        <p>1200</p>
                    </div>
                    <div className="add">
                        <img src={add} alt="" />
                    </div>
                </div>
                <div className="username ">
                    <p>Username </p>
                <div className="icon">
                <GoThreeBars/>
                </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar