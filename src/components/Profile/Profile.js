import React, { useState, useEffect } from "react";
import "./Profile.css";
// import { MdArrowForwardIos } from 'react-icons/md'
import NavBar from "../TopNavbar/NavBar";
import Icon from "../../assets/Images/Profile/ProfileIcon.png";
import InfoIcon from "../../assets/Images/Profile/InfoIcon.png";
import Mydetailsblue from "../../assets/profile/My Details Selected Tab.png";
import Mydetailsgray from "../../assets/profile/My Details Unselected Tab.png";
import shippingblue from "../../assets/profile/Shipping Selected Tab.png";
import shippinggray from "../../assets/profile/Shipping Unselected Tab.png";
import editimage from "../../assets/Images/Profile/EditArrow.png";
import supporticon from "../../assets/Images/Support/Support_Icon.png";
import animation from "../../assets/animation/loading_icon.json";
import Lottie from "lottie-react";
function Profile() {
  const [id, setId] = useState("");
  const [active, setActive] = useState(true);
  const [item, setItem] = useState({});
  const [popup, setPopup] = useState(false);
  const [anim, setAnim] = useState(false);
  const baseurl = "https://uat.wincha-online.com";

  const data = {
    id: "",
    name: "",
    email: "",
    suscription: "",
    password: "",
  };
  const profiledetails = async () => {
    await fetch(`${baseurl}/user/profile/details`, {
      method: "POST",
      body: JSON.stringify({
        user_id: "64183356615833347ce41c3a",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setItem(data.data[0]);
        setPopup(item.profile_status)
      });
  };
  const resendemail = async () => {
    setAnim(true);
    await fetch(`${baseurl}/user/verification/resend`, {
      method: "POST",
      body: JSON.stringify({
        user: "64183356615833347ce41c3a",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(() => {
        setAnim(false);
        setPopup(true)
      });
  };

  useEffect(() => {
    setId(data.id);
    profiledetails();
    
  }, []);
  return (
    <div>
      {/* <NavBar/> */}
      <div className="profile_container">
        {anim?

        <div className="loder">
          {" "}
          <Lottie animationData={animation} loop={false} />
        </div>
        :''
        }
        {popup ? (
          ""
        ) : (
          <div className="base_pop">
            <div className="support_icon">
              <img src={supporticon} />
              <h3 className="popup_cont">Awaiting player verification</h3>

              <button onClick={resendemail} className="resend_email">
                {" "}
                RESEND EMAIL
              </button>
            </div>
          </div>
        )}
        <div className="profile_page">
          <div className="profile_head">
            <div className="profile_image">
              <img src={Icon} alt="" />
            </div>
            <div className="profile_items">
              {/* <div className="profile">
                                <button>PROFILE</button>
                            </div>
                            <button className="history">HISTORY</button>
                            <button className="faq">FAQ</button> */}
              <button className="deactivate_account">DEACTIVATE ACCOUNT</button>
            </div>
          </div>

          <div className="profile_body">
            <div className="head_button">
              {/* <button className={active ? "nonActive" : "active"} onClick={() => {
                                setActive(true)
                            }}>MY DETAILS</button> */}
              {/* <button className={active ? "active" : "nonActive"} onClick={() => {
                                setActive(false)
                            }} >SHIPPING </button> */}

              {active ? (
                <img
                  className={active ? "tabimgact" : "tabimg"}
                  src={Mydetailsblue}
                  onClick={() => {
                    setActive(false);
                  }}
                  alt=""
                />
              ) : (
                <img
                  className={active ? "tabimg" : "tabimgact"}
                  src={shippingblue}
                  onClick={() => {
                    setActive(true);
                  }}
                  alt=""
                />
              )}
              {active ? (
                <img
                  className={active ? "tabimg" : "tabimgact"}
                  src={shippinggray}
                  onClick={() => {
                    setActive(false);
                  }}
                  alt=""
                />
              ) : (
                <img
                  className={active ? "tabimgact" : "tabimg"}
                  src={Mydetailsgray}
                  onClick={() => {
                    setActive(true);
                  }}
                  alt=""
                />
              )}
            </div>

            {active ? (
              <div className="profile_information">
                <div className="username">
                  <label htmlFor="">Username</label>
                  <input
                    type="text"
                    name="Username"
                    value={item.username}
                    id=""
                    placeholder="Your Name"
                    readOnly
                  />
                </div>
                <div className="birthday">
                  <label htmlFor="">Birthday</label>
                  <input
                    type="text"
                    name="Birthday"
                    id=""
                    placeholder="DD/MM/YYYY"
                    value={item.dob}
                  />
                </div>
                <div className="email">
                  <label htmlFor="">Email Address</label>
                  <input
                    type="text"
                    name="Email Address"
                    id=""
                    placeholder="YourName@gmai..."
                    value={item.email}
                    readOnly
                  />
                </div>
                <div className="password">
                  <label htmlFor="">Password</label>
                  <div className="password_icon">
                    <input
                      type="password"
                      name="Password"
                      id=""
                      placeholder="*******"
                      value={id}
                      readOnly
                    />
                    {/* <MdArrowForwardIos /> */}{" "}
                    <img width={20} src={editimage} />
                  </div>
                </div>
                <div className="suscription">
                  <label htmlFor="">Suscription</label>
                  <div className="sus_icon">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Off"
                      value={item.vip == true ? "Yes" : "No"}
                      readOnly
                    />
                    <div className="info_icon">
                      <img src={InfoIcon} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="shipping_information">
                <div className="phone_number">
                  <label htmlFor="">Phone Number</label>
                  <div className="phonenumber_icon">
                    <input
                      type="text"
                      name=""
                      id=""
                      value={item.phone}
                      placeholder="Please Enter"
                      readOnly
                    />
                    <img width={20} height={25} src={editimage} />
                  </div>
                </div>
                <div className="shipping_details">
                  <label htmlFor="">Shipping</label>
                  <div className="shipping_list">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="House"
                      readOnly
                    />
                    <input
                      type="text"
                      name=""
                      id=""
                      value={item.addressline1}
                      placeholder="Line 1"
                      readOnly
                    />
                    <input
                      type="text"
                      name=""
                      id=""
                      value={item.addressline2}
                      placeholder="Line 2"
                      readOnly
                    />
                    <input
                      type="text"
                      name=""
                      id=""
                      value={item.city}
                      placeholder="City"
                      readOnly
                    />
                    <input
                      type="text"
                      name=""
                      id=""
                      value={item.coutryname}
                      placeholder="Country"
                      readOnly
                    />
                    <input
                      type="text"
                      name=""
                      id=""
                      value={item.coutrycode}
                      placeholder="Postcode"
                      readOnly
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
