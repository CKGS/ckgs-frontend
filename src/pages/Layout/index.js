import React from "react";
import { Outlet , Link } from "react-router-dom";
import "./index.css"
import SchoolLogo from "./../../assets/images/SchoolLogo.png"
import SchoolName from "./../../assets/images/SchoolName.png"
import {Divider} from "antd";

//import icons
import { PhoneOutlined , FacebookOutlined , TwitterOutlined,  CopyrightOutlined } from "@ant-design/icons";



function MainLayout() {
    return (
      <div className="App">
        <header className="App-header">
          <div  className="img-container">
              <img src = {SchoolLogo} className = "img-object-1"></img>
              <img src = {SchoolName} className = "img-object-2"></img>
          </div>
          <nav>
            <ul className="link-container">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/academics">Academics</Link>
              </li>
              <li>
                <Link to="/facilities">Facilities</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/aboutus">About Us</Link>
              </li>
            </ul>
          </nav>
        </header>
          <Outlet />
        <footer className="App-footer">
              <div className="address-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.738745301864!2d85.37292581436022!3d23.32523591080286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e20d4f1f3333%3A0xbf8060e060bbd7d2!2sCamford%20kinder%20Garden%20School!5e0!3m2!1sen!2sin!4v1675238514187!5m2!1sen!2sin" className="iframe-object" height={300} frameborder="0" referrerpolicy="no-referrer-when-downgrade"></iframe> 
              </div>
              <div className="social-container">
                <div className="section-one">
                  <div  className="img-container">
                      <img src = {SchoolLogo} className = "img-object-1"></img>
                      <img src = {SchoolName} className = "img-object-2"></img>
                  </div>
                </div>
                <div className="section-two">
                    Sadabahar chowk, Namkum <br></br>Ranchi, Jharkhand-834010
                    <div className="phone-container">
                    Call Us on <PhoneOutlined/> <b>9334158100</b>
                    </div>
                <p className="media-container" onClick = {()=> window.open("https://m.facebook.com/ckgs2003/", "_blank")}><strong>Follow Us on </strong><FacebookOutlined/></p>
                </div>
              </div>
              <div className="copyright-container">
                Copyright <CopyrightOutlined /> 2023. All rights reserved.
              </div>
        </footer>
      </div>
    );
  }
  
  export default MainLayout;