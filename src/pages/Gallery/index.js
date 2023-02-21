import React from "react";
import mainLogo from  "./../../assets/gallery-imgs/DSC_0111.JPG";
import galleryJson from './../../assets/jsons/gallery.json';
import "./index.css";
import { Divider } from "antd";
import { Card } from "antd";
let imgArray = Array.from(Array(10).keys());
console.log(imgArray , "is the array");
let imgNumber = '0111';
let loopcounter = 0;


function Gallery() {
    return (
      <div className="container-main-gallery">
          <div className="container-top-gallery">
          </div>
          <div className="container-img-gallery">
          <Card title="Gallery Images">
            {
              imgArray.map((imgItem , index) => {
                console.log(loopcounter);
                loopcounter++;
                return(
                  <Card.Grid className="gallery-img-item" key = {index}>
                    <img src = {require(`./../../assets/gallery-imgs/${galleryJson.imgNumber[index]}.JPG`)}></img>
                    {/* content */}
                  </Card.Grid>
                )
              })
            }
            {/* <Card.Grid hoverable={false} >
              Content
            </Card.Grid>
            <Card.Grid className="gallery-img-item">Content</Card.Grid>
            <Card.Grid className="gallery-img-item">Content</Card.Grid>
            <Card.Grid className="gallery-img-item">Content</Card.Grid>
            <Card.Grid className="gallery-img-item">Content</Card.Grid>
            <Card.Grid className="gallery-img-item">Content</Card.Grid> */}

          </Card>
          </div>
      </div>
    );
  }
  
  export default Gallery;