import React from "react";
import "./index.css";
import { Divider, Carousel } from "antd";
import messageImg from "../../assets/gallery-imgs/IMG-20240707-WA0008.jpg";
import messageImg2 from "../../assets/gallery-imgs/holi_celebration.jpeg";
import messageImg3 from "../../assets/gallery-imgs/teaching_staff_1.jpeg";
import messageImg4 from "../../assets/gallery-imgs/working_staff.jpeg";

function AboutUs() {
  return (
    <div className="container-main-aboutus">
      <header className="container-header">
        <Divider orientation="left">
          <h2>Our Story</h2>
        </Divider>
        <div className="header-text">
          <p>
            Established in 2003, CKGS proudly holds the distinction of being the
            oldest school in the area. From humble beginnings, we have grown
            steadily over the years to become a thriving educational institution
            with over 600 students. Our journey has been marked by a steadfast
            commitment to excellence, community engagement, and the holistic
            development of every child.
          </p>
          <p>
            From the start, our goal has been to provide a nurturing and
            inclusive environment where students can thrive academically,
            socially, and emotionally. Our dedicated staff and supportive
            community have played a crucial role in our success, helping us to
            build a reputation as a cornerstone of education.
          </p>
          <p>
            Over the years, CKGS has become known for its innovative teaching
            methods, strong academic programs, and vibrant extracurricular
            activities. We take pride in our diverse student body and the rich
            cultural experiences that come with it. Our commitment to fostering
            a love of learning and encouraging the personal growth of each
            student remains at the heart of everything we do. Today, CKGS stands
            as a testament to the power of community, dedication, and a shared
            vision for the future. We are excited to continue our legacy of
            excellence and to inspire the next generation of learners to reach
            their fullest potential.
          </p>
        </div>
      </header>
      <div className="container-content-messsage">
        <Divider orientation="left">
          <h2>From The Principal's Desk</h2>
        </Divider>
        <div className="message-inner-container">
          <div className="message-inner-text">
            <p>Dear Readers ,</p>
            <p>
              {" "}
              I would like to throw some light on how to achieve success. For
              achieving success, strong determination, self confidence, right
              environment and a definte objective are essential.
            </p>
            <p>
              If you want to succeed never accept defeat and be optimistic. A
              person with negative thinking finds everything impossible which
              those with positive, thinking do not have impossible word in their
              dictionary. Never curse your circumstances, rather you should
              think about the way , how to handle the situation.
            </p>
            <p>
              Success is never permanent and failure is never final, so always
              do not stop effort until you victory makes a history.
            </p>
            <p style={{ alignSelf: "flex-end", fontWeight: "bold" }}>
              Manju Jayshree
            </p>
          </div>
          <div className="message-img-container">
            <img className="message-img-item" src={messageImg}></img>
          </div>
        </div>
        <Divider orientation="left">
          <h2> Our Team</h2>
        </Divider>
        <div className="container-team-img"></div>
        <img style={{ height: "100%", width: "100%" }} src={messageImg2}></img>
        <Divider orientation="left">
          <h2> Reach Us</h2>
        </Divider>
        <div className="address-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.738745301864!2d85.37292581436022!3d23.32523591080286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e20d4f1f3333%3A0xbf8060e060bbd7d2!2sCamford%20kinder%20Garden%20School!5e0!3m2!1sen!2sin!4v1675238514187!5m2!1sen!2sin"
            className="iframe-object"
            height={300}
            frameborder="0"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <Divider />
      </div>
    </div>
  );
}

export default AboutUs;
