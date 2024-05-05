import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSkype,
  faFacebook,
  faLinkedin,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="container text-centerr">
        <div className="row align-items-start">
          <div className="col">
            <h4>Company</h4>
            <ul className="list-unstyled">
              <li>
                <a href="https://www.lejhro.com/about" target="_blank">About</a>
              </li>
              <li>
                <a href="https://www.bootcamp.lejhro.com/blogs" target="_blank">Blogs</a>
              </li>
              <li>
                <a href="hhttps://www.bootcamp.lejhro.com/enterprise" target="_blank">Enterprise</a>
              </li>
              <li>
                <a href="https://www.recruit.lejhro.com/" target="_blank">Lejhro Recruiter</a>
              </li>
              
            </ul>
          </div>
          <div className="col">
            <h4>Support</h4>
            <ul className="list-unstyled">
              <li>
                <a href="https://www.bootcamp.lejhro.com/" target="_blank">
                  Contact
                </a>
              </li>
              <li>
                <a href="https://www.bootcamp.lejhro.com/" target="_blank">
                  Term of Use
                </a>
              </li>
              <li>
                <a href="https://www.lejhro.com/privacy-statement" target="_blank">
                  Privacy Statement
                </a>
              </li>
            </ul>
          </div>
          
          <div className="col">
            <h4>Connect with Us</h4>
            <ul className="list-unstyled">
              <li>
                <a href="https://twitter.com/lejhrobootcamp" target="_blank">
                  <FontAwesomeIcon icon={faTwitter} className="social-icon" />
                </a>
              
              
                <a href="https://www.facebook.com/lejhrobootcamp" target="_blank">
                  <FontAwesomeIcon icon={faFacebook} className="social-icon" />
                </a>
              
                <a href="https://www.linkedin.com/company/lejhro-bootcamp" target="_blank">
                  <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
                </a>
              
                <a href="https://www.youtube.com/channel/UCBSGr_lQey13KkXhxHS0Y_w" target="_blank">
                  <FontAwesomeIcon icon={faYoutube} className="social-icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="line" />
      <div className="container text-centerr">
        <h4>Bootcamp</h4>
        <ul className="list-unstyled st">
          <li>Data Science Bootcamp</li>
          <li>Data Analyst Bootcamp</li>
          <li>Full Stack Development Bootcamp</li>
          <li>Digital Marketing Bootcamp</li>
        </ul>
      </div>
      <hr className="line" />
      <div className="container text-centerr">
        <h3><strong>Transform Yourself with Lejhro</strong></h3>
        <p><strong>
          Ushering The Era of Upskilling</strong>
        </p>
        <p>
          Back in 2013, Lejhro's founders noticed that the professional world, due to the fast-paced era today, demanded industry professionals to upskill continuously by keeping themselves up to date with current technology - not just for their company’s growth but also for their personal career goals as well. With cut-throat competition for jobs and increasing unemployment coupled with outdated education of workers, upskilling oneself is the only way to ensure one’s growth and stability. Formerly, learning would come to a halt after attaining one’s degree. It was Lejhro’s innovative approach towards imparting learning through Bootcamps curated especially for working professionals and programs that brought about a change in the industry practices and pushed people to upskill themselves. We, at Lejhro, have always strived to impart quality and world-class education to the workforce through pioneering courses to make them job-ready.
        </p>
        <p><strong>A Flexible and Futuristic Approach</strong></p>
        <p>
          From the inception, teaching, and upskilling of a huge set of professionals and students alike Lejhro has come a long way. All thanks to its approach of staying future-ready and being ahead of its competitors by divulging an era of quality courses to upskill oneself. This approach has not only helped us to expand our horizons but has also helped us form a family of people with an ever-learning approach. Our aim to cater to various segments of working professionals according to their requirements has brought positive and impactful results and helped Lejhro carve its own place in the ed-tech industry. Only onwards and upwards from here!
        </p>
        <p><strong>Growth - The Only Constant</strong></p>
        <p>
          We can proudly say that if it’s something that has been the same in all these years is our growth as well as the growth of those who are associated with us. We as an organization have always strived to go above and beyond our current capabilities and bring out-of-the-box innovations to the table in order to make the lives of working professionals and students all the easier by upskilling them to make them job-ready. Join us in this revolution of ours and together we can transform more and more lives!
        </p>
      </div>
      <div className="container text-center">
        <p>&copy; 2024 LEJHRO. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
