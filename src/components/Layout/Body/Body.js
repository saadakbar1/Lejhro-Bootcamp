import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Body.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows:true,
  };

  return ( 
    <div>
    <div className="carousel-wrapper">
      <Slider {...settings}>
        <div className="carousel-container">
          <div className="card-content">
            <img src="madhav.png" alt="Madhav" />
            <p>Madhav Narayan</p>
            <p>Java Full Stack Bootcamp</p>
            <p>
              I heard about Lejhro from a friend and enrolled in its Full stack
              Development Bootcamp, what followed was an immersive learning
              experience that helped me transform my career.
            </p>
          </div>
        </div>
        <div className="carousel-container">
          <div className="card-content">
            <img src="rajeev.png" alt="Another Person" />
            <p>Rajeev Sharma</p>
            <p>React Native Bootcamp</p>
            <p>
              I found out about Lejhro through an online search and decided to
              join its React Native Bootcamp. It was a fantastic journey that
              broadened my skillset and opened up new career opportunities.
            </p>
          </div>
        </div>
        <div className="carousel-container">
          <div className="card-content">
            <img src="meeraja.png" alt="Jane Doe" />
            <p>Meeraja Mohandas</p>
            <p>Data Analyst Bootcamp</p>
            <p>
            My journey with Lejhro was nothing short of transforming me into an accomplished Data Analyst with a cutting-edge teaching curriculum and experience overall.
            </p>
          </div>
        </div>
        <div className="carousel-container">
          <div className="card-content">
            <img src="vivency.png" alt="John Smith" />
            <p>Vivency Grover</p>
            <p>Digital Marketing Bootcamp</p>
            <p>
            I appreciate the learning experience provided by Lejhro wherein they helped me upskill in Digital Marketing through practical sessions and not just rote learning.
            </p>
          </div>
        </div>
        <div className="carousel-container">
          <div className="card-content">
            <img src="ravi.png" alt="Alex Johnson" />
            <p>Alex Johnson</p>
            <p>Data Science & Analytics Bootcamp</p>
            <p>
            The simplified learning method, program structure, and interactive classes helped me grasp each concept easily. It helped me gain immense knowledge along with market-relevant skills.
            </p>
          </div>
        </div>
      </Slider>
    </div>
    <div className="black-div headd">
  <h1 className="table-heading">Lejhro Bootcamp Advantage</h1>
  <h6 className="table-subheading">Dedicated mentorship with staunch assistance to help you become an expert in the field</h6>
  <table className="advantages-table">
    <tr>
      <td>
        <h5 className="advantage-heading">Skills for real career growth</h5>
        <p className="advantage-paragraph">Cutting-edge curriculum designed in guidance with industry and academia to develop job-ready skills</p>
      </td>
      <td>
        <h5 className="advantage-heading">Learn from experts</h5>
        <p className="advantage-paragraph">Leading practitioners who bring current best practices and case studies to sessions that fit into your work schedule</p>
      </td>
      <td>
        <h5 className="advantage-heading">Work on real world problems</h5>
        <p className="advantage-paragraph">Capstone projects involving real world data sets with virtual labs for hands-on learning</p>
      </td>
    </tr>
  </table>
</div>
<h2 className="al">Where our Alumini Work </h2>
<div className="image-grid">
  <div className="image-row">
    <img src="p1.svg" alt="p 1" />
    <img src="p2.svg" alt="p 2" />
    <img src="p3.svg" alt="p 3" />
  </div>
  <div className="image-row">
    <img src="p4.svg" alt="p 4" />
    <img src="p5.svg" alt="p 5" />
    <img src="p6.svg" alt="p 6" />
  </div>
  <div className="image-row">
    <img src="p7.svg" alt="p 7" />
    <img src="p8.svg" alt="p 8" />
    <img src="p9.svg" alt="p 9" />
  </div>
</div>

<div className="boot">
<h2 className="all">Hear out from our Boot Campers! </h2>
  <div className="image-row">
    <img src="a1.png" alt="p 1" />
    <img src="a2.png" alt="p 2" />
    <img src="a3.png" alt="p 3" />
  </div>
  </div>
  <div className="enterprise">
        <h2 className="enterprise-heading">Lejhro Bootcamp Advantage</h2>
        <p className="enterprise-paragraph">Competent solutions curated towards achieving organizational success</p>
        <a href="https://www.bootcamp.lejhro.com/enterprise">
  <button className="exploree btn btn-outline-light nav-item">Explore</button>
</a>
      </div>

</div>

  );
};

export default Carousel;
