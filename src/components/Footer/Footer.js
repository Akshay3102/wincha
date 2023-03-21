import React from "react";
import "./Footer.css";
import Wincha from "../../assets/Images/footer/WinchaFooter.png";
import Facebook from "../../assets/Images/footer/FacebookIcon.png";
import Twittor from "../../assets/Images/footer/TwitterIcon.png";
import Instegram from "../../assets/Images/footer/InstagramIcon.png";
import Tiktok from "../../assets/Images/footer/TikTokIcon.png";
import Youtube from "../../assets/Images/footer/YouTubeIcon.png";
function Footer() {
  return (
    <div>
      <div className="foot_container">
        <div className="foot_page">
          <div className="foot_image">
            <img src={Wincha} alt="" />
          </div>
          <div className="foot_full">
            <div className="foot_list">
              <ul>
                <li className="link">LINKS</li>
                <li>Home</li>
                <li>Prizes</li>
                <li>Support</li>
                <li>Basket</li>
              </ul>
            </div>
            <div className="foot_right">
              <div className="social_media">
                <p> YOO HOO--</p>
                <p>FOLLOW US</p>
              </div>
              <div className="media_icon">
                <img src={Facebook} alt="" />
                <img src={Twittor} alt="" />
                <img src={Instegram} alt="" />
                <img src={Tiktok} alt="" />
                <img src={Youtube} alt="" />
              </div>
              <div className="wincha">
                <div className="wincha_text1">
                  <p>
                    Wincha<sup>&#174;</sup>{" "}
                  </p>
                  <p>&#169;Bandai Namco Amusement Europe Ltd. </p>
                </div>
                <div className="wincha_text2">
                  <a href="">Privacy Policy</a>
                  <br />
                  <a href="">Terms and Conditions</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
