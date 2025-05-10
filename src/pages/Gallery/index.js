import React from "react";
import { useState, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import mainLogo from "./../../assets/gallery-imgs/DSC_0111.JPG";
import galleryJson from "./../../assets/jsons/gallery.json";
import "./index.css";
import { Card, Divider, Image, Spin } from "antd";
let imgArray = Array.from(Array(10).keys());
let imgNumber = "0111";
let loopcounter = 0;

// Replace with your deployed Apps Script web app URL
const ENDPOINT =
  "https://script.google.com/macros/s/AKfycbwjZzYep-Aq_dSB2mHz9NrMv26b7SMXLbL0CF5ymSPkUXoKe3hO5ocR9rkm1tzGNG9T/exec";

async function fetchDriveImages() {
  try {
    const response = await fetch(ENDPOINT);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json(); // data is an array of JSON objects
    data.sort(custom_sort);
    return data;
  } catch (error) {
    console.error("Failed to fetch images:", error);
    return [];
  }
}

function custom_sort(a, b) {
  return new Date(a.lastUpdated).getTime() - new Date(b.lastUpdated).getTime();
}

function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchDriveImages().then(setImages);
  }, []);

  return (
    <div className="container-main-gallery">
      <div className="container-top-gallery"></div>
      <div className="container-img-gallery">
        <Divider orientation="left">
          <h2 style={{ color: "var(--primary-color)" }}>
            {"Gallery of Moments"}
          </h2>
        </Divider>
        <p style={{ textAlign: "center" }}>
          Capturing Joy, Creativity, and Growth-One Memory at a Time
        </p>
        {images.length ? (
          <Image.PreviewGroup>
            <Card
              title={
                <>
                  <h3 style={{ color: "var(--primary-color)" }}></h3>
                </>
              }
            >
              {images &&
                images?.map((pic, index) => {
                  return (
                    <Card.Grid className="gallery-img-item" key={index}>
                      <Image
                        src={`https://drive.google.com/thumbnail?id=${pic.id}&sz=w1000`}
                        alt={pic.name}
                        width={"100%"}
                        height={"100%"}
                      ></Image>
                    </Card.Grid>
                  );
                })}
            </Card>
          </Image.PreviewGroup>
        ) : (
          <div className="gallery-image-size-class">
            <Spin fullscreen size="large" />
          </div>
        )}
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
