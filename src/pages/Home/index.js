import React from "react";
import "./index.css";
import { Carousel, Divider, Card, Button } from "antd";
import img1 from "../../assets/gallery-imgs/DSC_0003.JPG";
import img2 from "../../assets/gallery-imgs/DSC_0117.JPG";
import img3 from "../../assets/gallery-imgs/DSC_0205.JPG";

// import building images

import img4 from "../../assets/gallery-imgs/IMG-20240704-WA0007.jpg";
import img5 from "../../assets/gallery-imgs/IMG-20240704-WA0004.jpg";

// import link images

import linkImg1 from "../../assets/gallery-imgs/IMG-20240707-WA0013.jpg";
import linkImg2 from "../../assets/gallery-imgs/IMG-20240704-WA0008.jpg";
import linkImg3 from "../../assets/gallery-imgs/DSC_0081.JPG";
import linkImg4 from "../../assets/gallery-imgs/aboutus.JPG";

import visionImg from "../../assets/images/vision.png";

import { LinkOutlined } from "@ant-design/icons";

// import navigate
import { useNavigate } from "react-router-dom";

// import Prospectus
import prospectus from "../../assets//files/Prospectus2024.pdf";
import prospectusBanner from "../../assets//files/prospectusBanner.jpg";

const contentStyle = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

function Home() {
  // initialise nagivate
  let navigate = useNavigate();

  return (
    <div className="container-main-home">
      <div
        className="carousel-main-container"
        style={{
          display: "block !important",
          width: "100vw",
          background: "#364d79",
        }}
      >
        <Carousel autoplay>
          <div className="carousel-slide">
            <div>
              <img src={img1} className="carousel-image"></img>
            </div>
          </div>
          <div className="carousel-slide">
            <div>
              <img src={img2} className="carousel-image"></img>
            </div>
          </div>
          <div className="carousel-slide">
            <div>
              <img src={img3} className="carousel-image"></img>
            </div>
          </div>
          <div className="carousel-slide">
            <div>
              <img src={img4} className="carousel-image"></img>
            </div>
          </div>
          <div className="carousel-slide">
            <div>
              <img src={img5} className="carousel-image"></img>
            </div>
          </div>
        </Carousel>
      </div>
      <header className="home-header">
        <Divider orientation="center">
          <div>
            <h2>Welcome</h2>
            <p>to</p>
            <h1 style={{ fontSize: "3em" }}>Camford KG School</h1>
          </div>
        </Divider>
        <div className="content-container">
          <p>
            Founded in the summers of 2003, We aim to provide effort to give
            students an ideal start to their academic career.
          </p>
          <p>
            Our School provides able guidance which comprises enlighting
            personalitites with a deep sense of commitment to the cause of
            education. It is open to all children irrespective of caste, creed
            and social status.
          </p>
        </div>
      </header>
      <Divider orientation="center">
        <h2>Vision & Mission</h2>
      </Divider>
      <div className="container-content-home">
        <div className="container-content-text">
          <p>
            <strong>
              All-round Development of the Child's Potentialities and Character
            </strong>
            <br /> <br />
            Ensuring the holistic growth of a child encompasses nurturing their
            diverse talents and strengths, while also shaping their character.
            This balanced approach aims to develop both intellectual
            capabilities and moral values, preparing children for future
            challenges.
          </p>
          <p>
            <strong>Joyful Learning Experience</strong>
            <br /> <br />
            Creating a joyful learning environment is essential for fostering a
            love of knowledge. By making education engaging and enjoyable,
            children are more likely to develop a lifelong passion for learning,
            which is crucial for their overall growth.
          </p>
          <p>
            <strong>Promotion of Clean and Healthy Living Habits</strong>
            <br /> <br />
            Instilling habits of cleanliness and healthy living from an early
            age is fundamental. These habits not only promote physical
            well-being but also contribute to a positive and disciplined
            lifestyle, forming the foundation for a healthy future.
          </p>
          <p>
            <strong>Instilling Values and Responsibilities</strong>
            <br /> <br />
            Encouraging a sense of duty, punctuality, obedience, courage,
            self-reliance, friendship, discipline, and leadership is vital for
            personal development. These values help children become responsible,
            confident, and capable individuals, ready to take on leadership
            roles and contribute positively to society.
          </p>
        </div>
        <div className="container-content-img-container">
          <img
            src={visionImg}
            width={"100%"}
            height={"100%"}
            className="container-content-img"
          ></img>
        </div>
      </div>
      <Divider></Divider>
      <div style={{ width: "100%" }}>
        <div style={{ position: "relative" }}>
          <img
            src={prospectusBanner}
            width={"100%"}
            height={"100%"}
            className="container-content-img"
          ></img>

          <div
            style={{
              position: "absolute",
              top: "40px",
              right: "40px",
              alignContent: "end",
            }}
          >
            <h1>
              Take the first step <br /> towards your child's Future{" "}
            </h1>

            <Button type="primary" size="large">
              <a href={prospectus} target="_blank" rel="noreferrer">
                Download our Prospectus !
              </a>
            </Button>
          </div>
        </div>
      </div>
      <Divider></Divider>
      <div className="container-link-section">
        <div className="container-link-section-inner">
          <Card
            size="large"
            title="Academics"
            extra={
              <a href="#">
                <LinkOutlined />
              </a>
            }
            onClick={() => {
              navigate("/academics");
            }}
            className="container-link-section-card"
          >
            <div className="link-image-text-container">
              <div className="link-image-container">
                <img src={linkImg2} width={"100%"} height={"100%"}></img>
              </div>

              <div class="link-text-container">
                <div class="link-text-container-caption">Learn & Grow</div>
                <div class="link-text-container-brief">
                  Fun and engaging lessons for <br />
                  curious young minds.
                </div>
              </div>
            </div>
          </Card>
          <Card
            size="large"
            title="Facilities"
            extra={
              <a href="#">
                <LinkOutlined />
              </a>
            }
            onClick={() => {
              navigate("/facilities");
            }}
            className="container-link-section-card"
          >
            <div className="link-image-text-container">
              <div className="link-image-container">
                <img src={linkImg1} width={"100%"} height={"100%"}></img>
              </div>

              <div class="link-text-container">
                <div class="link-text-container-caption">Our Playground</div>
                <div class="link-text-container-brief">
                  Safe and vibrant spaces for kids
                  <br /> to explore and play.
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div className="container-link-section-inner">
          <Card
            size="large"
            title="Gallery"
            extra={
              <a href="#">
                <LinkOutlined />
              </a>
            }
            onClick={() => {
              navigate("/gallery");
            }}
            className="container-link-section-card"
          >
            <div className="link-image-text-container">
              <div className="link-image-container">
                <img src={linkImg4} width={"100%"} height={"100%"}></img>
              </div>

              <div class="link-text-container">
                <div class="link-text-container-caption">Our Adventures</div>
                <div class="link-text-container-brief">
                  Peek into the exciting activities and <br />
                  joyful moments at our school
                </div>
              </div>
            </div>
          </Card>
          <Card
            size="large"
            title="About Us"
            extra={
              <a href="#">
                <LinkOutlined />
              </a>
            }
            onClick={() => {
              navigate("/aboutus");
            }}
            className="container-link-section-card"
          >
            <div className="link-image-text-container">
              <div className="link-image-container">
                <img src={linkImg3} width={"100%"} height={"100%"}></img>
              </div>
              <div class="link-text-container">
                <div class="link-text-container-caption">Meet Us</div>
                <div class="link-text-container-brief">
                  Discover our mission to inspire <br /> and nurture every child
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Home;
