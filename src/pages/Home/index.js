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
import linkImg2 from "../../assets/gallery-imgs/IMG-20240704-WA0019.jpg";
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
            <h3>Welcome to CKGS</h3>
            <h5 style={{ color: "var(--primary-color)" }}>
              Where Every Child’s Potential is Ignited
            </h5>

            {/* <h1 style={{ fontSize: "3em" }}>Camford KG School</h1> */}
          </div>
        </Divider>
        <div className="content-container">
          <p>
            Founded in the summer of 2003, our school stands as a beacon of
            educational excellence and inclusivity, dedicated to shaping the
            academic journeys and personal growth of every student who walks
            through our doors.
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
            <img
              src={visionImg}
              width={"40%"}
              className="container-content-img"
            ></img>
          </p>
          <p>
            <h3>
              <strong style={{ color: "var(--primary-color)" }}>
                All-round Development of the Child's Potentialities and
                Character
              </strong>
            </h3>
            Ensuring the holistic growth of a child encompasses nurturing their
            diverse talents and strengths, while also shaping their character.
            This balanced approach aims to develop both intellectual
            capabilities and moral values, preparing children for future
            challenges.
          </p>
          <p>
            <h3>
              <strong style={{ color: "var(--primary-color)" }}>
                Joyful Learning Experience
              </strong>
            </h3>
            Creating a joyful learning environment is essential for fostering a
            love of knowledge. By making education engaging and enjoyable,
            children are more likely to develop a lifelong passion for learning,
            which is crucial for their overall growth.
          </p>
          <p>
            <h3>
              <strong style={{ color: "var(--primary-color)" }}>
                Promotion of Clean and Healthy Living Habits
              </strong>
            </h3>
            Instilling habits of cleanliness and healthy living from an early
            age is fundamental. These habits not only promote physical
            well-being but also contribute to a positive and disciplined
            lifestyle, forming the foundation for a healthy future.
          </p>
          <p>
            <h3>
              <strong style={{ color: "var(--primary-color)" }}>
                Instilling Values and Responsibilities
              </strong>
            </h3>
            Encouraging a sense of duty, punctuality, obedience, courage,
            self-reliance, friendship, discipline, and leadership is vital for
            personal development. These values help children become responsible,
            confident, and capable individuals, ready to take on leadership
            roles and contribute positively to society.
          </p>
        </div>
        <div className="container-content-img-container"></div>
      </div>
      <Divider></Divider>
      <div style={{ width: "100%" }}>
        <div className="banner-home-main">
          <img
            src={prospectusBanner}
            width={"100%"}
            height={"100%"}
            className="container-content-img"
          ></img>

          <div className="banner-home-main-button-container">
            <p>
              Take the first step <br /> towards your child's Future{" "}
            </p>
            <br></br>

            <Button type="primary" size="medium">
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
            title="Activities"
            extra={
              <a href="#">
                <LinkOutlined />
              </a>
            }
            onClick={() => {
              navigate("/activities");
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
                  Peek into the exciting activities & <br />
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
                <div class="link-text-container-caption">About Us</div>
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
