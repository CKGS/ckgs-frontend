import React from "react";
import "./index.css";
import { Divider } from "antd";

// import assets
import img1 from "../../assets/gallery-imgs/faci_img.jpg";
import img2 from "../../assets/gallery-imgs/IMG-20240704-WA0020.jpg";
import img3 from "../../assets/gallery-imgs/gallery.png";

function Activities() {
  return (
    <div className="container-main-Activities">
      <Divider orientation="left">
        <h2>Our Activities</h2>
      </Divider>
      <p>
        At our primary school, learning goes beyond the classroom. We offer a
        wide range of engaging activities designed to nurture every child’s
        creativity, curiosity, and confidence. Through fun and meaningful
        experiences, our students develop essential skills while enjoying their
        time at school.
      </p>
      <p>
        <img
          src={img2}
          style={{ paddingLeft: "2%", paddingTop: "2%" }}
          width={"30%"}
          className="container-content-img"
        ></img>
      </p>

      <h3>Interactive Learning with Educational Toys and Teaching Aids</h3>
      <p>
        Our classrooms are vibrant spaces where children learn through play
        using educational toys and teaching aids. These hands-on activities help
        develop critical thinking, problem-solving, and fine motor skills,
        making learning both enjoyable and effective.
      </p>

      <h3>Technology Exploration in Our Computer Lab</h3>
      <p>
        Students get to explore basic computer skills in our well-equipped
        computer lab. Through interactive games and activities, they become
        comfortable with technology, enhancing their cognitive abilities and
        preparing them for the digital world.
      </p>
      <p>
        <img
          src={img3}
          style={{ paddingLeft: "2%" }}
          width={"30%"}
          className="container-content-img"
        ></img>
      </p>

      <h3>Fun and Fitness on Our Playgrounds</h3>
      <p>
        Physical activity is an important part of our daily routine. Our safe
        playgrounds with slides, swings, and open spaces encourage children to
        play, exercise, and build social skills through teamwork and cooperative
        games.
      </p>

      <h3>Creative Expression through Art, Music, and Dance</h3>
      <p>
        Our art and craft sessions inspire creativity and imagination, while
        music and dance classes help children explore rhythm, movement, and
        self-expression. These activities boost confidence and foster a love for
        the arts.
      </p>

      <h3>Special Events and Celebrations</h3>
      <p>
        We believe in celebrating the joy of childhood and the importance of
        community. Our school hosts special events throughout the year,
        including Children’s Day, Earth Day, and cultural festivals. These
        celebrations teach values, encourage participation, and create lasting
        memories for our students.
      </p>
      <p>
        <img
          src={img1}
          style={{ paddingLeft: "2%" }}
          width={"30%"}
          className="container-content-img"
        ></img>
      </p>

      <h3>Community and Social Activities</h3>
      <p>
        Our students engage in group activities and projects that promote
        teamwork, empathy, and social responsibility. From classroom
        collaborations to community service initiatives, children learn the
        importance of kindness and cooperation.
      </p>

      <p>
        At our school, every activity is designed to support all-round
        development-intellectual, physical, emotional, and social-ensuring your
        child grows into a confident, happy, and well-rounded individual.
      </p>

      <p>
        <strong>
          Join us to experience a joyful, active, and inspiring learning
          journey!
        </strong>
      </p>
    </div>
  );
}

export default Activities;
