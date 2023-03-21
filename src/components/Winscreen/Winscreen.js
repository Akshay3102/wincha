import React from 'react';
import './Winscreen.css';
import pricewin from '../../assets/Images/pricewin/secondimage.png'
import NavBar from '../TopNavbar/NavBar'
function Winscreen() {
  return (
    <div>
            <NavBar/>

      <div className="container">
      <div  className='wincha-background'>
        <div className="pricewin_image">
            <img src={pricewin} alt="" />
        </div>
        </div>
    
      </div>
    </div>
  )
}

export default Winscreen
