import React from "react";
import "./index.css"
import { Divider } from "antd";
import messageImg  from "../../assets/gallery-imgs/DSC_0094.JPG";


function AboutUs() {
    return (
      <div className="container-main-aboutus">
        <header className="container-header">
          <Divider orientation="left"><h2>About Us</h2></Divider>
          <div className="header-text">
            Established in 1998, we are one of the oldest schools in the Area.g established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </div>
        </header>
        <div className="container-content-messsage">
          <Divider orientation="left">
            <h2>From The Principal's Desk</h2>
          </Divider>
          <div className="message-inner-container">
            <div className="message-inner-text">1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishin</div>
            <div className="message-img-container">
              <img src = {messageImg}></img>
            </div>
          </div>
          <Divider></Divider>

        </div>
      </div>
    );
  }
  
  export default AboutUs;