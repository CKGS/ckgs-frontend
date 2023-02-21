import React from "react";
import "./index.css"
import { Carousel } from "antd";
import img1  from "../../assets/gallery-imgs/DSC_0003.JPG";
import img2  from "../../assets/gallery-imgs/DSC_0117.JPG";
import img3  from "../../assets/gallery-imgs/DSC_0205.JPG";
import img4  from "../../assets/gallery-imgs/holi_celebration.jpeg";



function Home() {
    return (
      <div className="container-main-home">
        <header className="home-header">
        <Carousel autoplay>
          <div className="carousel-container">
            <img src = {img1}></img>
          </div>
          <div className="carousel-container">
          <img src = {img2}></img>
          </div>
          <div className="carousel-container">
          <img src = {img3}></img>
          </div>
          <div className="carousel-container">
          <img src = {img4}></img>
          </div>
        </Carousel>
        </header>
        <div className="content-container">
            {/* <h2>Camford KG School</h2> */}
            We are one of the leading schools for primary school students. Established in 1998 , we have maintained a commitment to deliver and bring the best out of school students. 
        </div>
      </div>
    );
  }
  
  export default Home;