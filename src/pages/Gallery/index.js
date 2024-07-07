import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import mainLogo from "./../../assets/gallery-imgs/DSC_0111.JPG";
import galleryJson from "./../../assets/jsons/gallery.json";
import "./index.css";
import { Card, Image } from "antd";
let imgArray = Array.from(Array(10).keys());
console.log(imgArray, "is the array");
let imgNumber = "0111";
let loopcounter = 0;

function Gallery() {
  return (
    <div className="container-main-gallery">
      <div className="container-top-gallery"></div>
      <div className="container-img-gallery">
        <Image.PreviewGroup>
          <Card title="Gallery Images">
            {imgArray.map((imgItem, index) => {
              console.log(loopcounter);
              loopcounter++;
              return (
                <Card.Grid className="gallery-img-item" key={index}>
                  <Image
                    width={"100%"}
                    height={"100%"}
                    src={require(`./../../assets/gallery-imgs/${galleryJson.imgNumber[index]}.JPG`)}
                  ></Image>
                </Card.Grid>
              );
            })}
          </Card>
        </Image.PreviewGroup>
      </div>
    </div>
  );
}

export default Gallery;

{
  /* <Image.PreviewGroup
  preview={{
    onChange: (current, prev) =>
      console.log(`current index: ${current}, prev index: ${prev}`),
  }}
>
  <Image
    width={200}
    src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
  />
  <Image
    width={200}
    src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
  />
</Image.PreviewGroup>; */
}
