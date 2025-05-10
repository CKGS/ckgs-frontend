import React from "react";
import { Divider } from "antd";
import imgacad_1 from "../../assets/gallery-imgs/IMG-20240704-WA0008.jpg";
import imgacad_2 from "../../assets/gallery-imgs/IMG-20240707-WA0014.jpg";
import imgacad_0 from "./../../assets/images/acad_img_0.png";

import "./index.css";

function Academics() {
  return (
    <div className="container-main-academics">
      <header className="academics-header">
        <Divider orientation="left">
          <h2 style={{ color: "var(--primary-color)" }}>Curriculum Overview</h2>
        </Divider>
        <img
          style={{ float: "right", margin: "0 0 15px 20px", width: "100px" }}
          className="acad-images-responsive"
          src={imgacad_0}
        ></img>
        <p>
          At CKGS , our curriculum is designed to provide a holistic education
          that nurtures intellectual, social, and emotional growth. Our approach
          integrates core academic subjects with enrichment activities to foster
          a well-rounded education, ensuring that every child builds a strong
          foundation for lifelong learning. Our curriculum aligns with national
          educational standards and is continually updated to reflect the latest
          in educational research and best practices.
        </p>
      </header>
      <main>
        <p>
          <img
            src={imgacad_1}
            style={{ float: "right", margin: "0 0 15px 20px", width: "20vw" }}
            className="acad-images-responsive"
          ></img>
          At our school, academics are at the heart of everything we do. We
          believe that every student deserves an engaging, challenging, and
          supportive learning environment that sparks curiosity and builds a
          lifelong love for learning. Our academic programs are thoughtfully
          designed to nurture intellectual growth, creativity, and critical
          thinking-preparing students to excel in a rapidly changing world.
          <h4>Dedicated Educators, Dynamic Classrooms</h4>
          <p>
            Our passionate and experienced teachers are committed to fostering a
            joy of learning in every classroom. Through interactive lessons,
            collaborative projects, and personalized support, they inspire
            students to ask questions, think deeply, and develop confidence in
            their abilities. We celebrate the achievements of every learner and
            provide the guidance needed for academic and personal growth.
          </p>
          <h4>Nurturing Young Minds for a Bright Future</h4>
          <p>
            At our primary school, we believe that the foundation of a child’s
            education is the key to lifelong success. Our academic program is
            thoughtfully designed to foster all-round development-intellectual,
            emotional, social, and physical-ensuring that every child grows into
            a confident, curious, and well-rounded individual.
          </p>
          <h4>A Balanced and Engaging Curriculum</h4>
          <p>
            Our curriculum focuses on core subjects such as language,
            mathematics, environmental studies, and creative arts, delivered
            through interactive and age-appropriate teaching methods. We
            emphasize hands-on learning, exploration, and discovery to spark
            curiosity and encourage a love for learning from the very beginning.
          </p>
          <h4>Holistic Development</h4>
          <p>
            Beyond academics, we prioritize the overall growth of each child.
            Our programs include activities that promote physical health, social
            skills, emotional well-being, and moral values. Through music, art,
            sports, and group activities, students develop teamwork, creativity,
            and self-confidence.
          </p>
          <img
            src={imgacad_2}
            style={{ float: "right", margin: "0 20px 0 0", width: "30vw" }}
            className="acad-images-responsive"
          ></img>
          <h4>Caring and Dedicated Educators</h4>
          <p>
            Our teachers are passionate about nurturing young learners with
            patience, kindness, and expertise. They create a warm, supportive
            classroom environment where every child feels valued and motivated
            to explore their potential.
          </p>
          <h4>Preparing for Lifelong Learning</h4>
          <p>
            We aim to build strong foundations that prepare students not only
            for the next stages of their education but for life itself. By
            fostering critical thinking, communication skills, and positive
            attitudes, we empower our students to become enthusiastic learners
            and responsible citizens.
          </p>
          <p>
            <em>
              “At our school, we nurture the whole child, inspiring a lifelong
              love of learning and a foundation for success in every aspect of
              life.”
            </em>
          </p>
          <p>
            Discover how our primary school’s academic approach supports your
            child’s growth and development in a caring and stimulating
            environment.
          </p>
        </p>
      </main>
    </div>
  );
}

export default Academics;
