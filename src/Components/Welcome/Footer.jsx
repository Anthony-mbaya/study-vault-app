import React from "react";
import graduate from "../Images/download3.png";
import books from "../Images/download1.jpg";
import paper from "../Images/download2.png";  
import { FaWhatsappSquare,FaTwitter,FaFacebookSquare,FaEnvelope } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="footer-cont">
      <div className="info-boxes">
        <div className="box1">
          <h2>PDFs</h2>
          <p>
            From lecture notes and textbooks to study guides and research
            papers, we provide a wide range of materials to support your
            learning needs.
          </p>
        </div>
        <div className="box2">
          <h2>Past Papers</h2>
          <p>
            Tailored to cover various topics and subjects, these questions help
            reinforce your understanding and prepare you for exams.
          </p>
        </div>
        <div className="box3">
          <h2>Chat-Rev</h2>
          <p>
            Say goodbye to the hassle of scattered notes and embrace a more
            efficient and productive study experience
          </p>
        </div>
      </div>
      <div className="footer-images">
        <div className="graduation-img">
        <img src={graduate} alt="study images" className="grad-img" />
          <p>Graduation is the formal completion of an academic program, where
             students receive a diploma or degree as recognition of their achievement.  </p>
        
        </div>
        <div className="books-img">
          <p>Books are a great way to learn and expand your knowledge. They can provide a 
            wealth of information on a variety of topics.  </p>
        <img src={books} alt="study images" className="books-image" />
        </div>
        <div className="paper-img">
        <img src={paper} alt="study images" className="paper-image" />
          <p>Papers are a great way to express your thoughts and ideas. They can be used to communicate
             information, share research, or simply express.  </p>
        
        </div>
        
      </div>
      <hr />
      <div className="web-info-cont">
      <div className="web-info">
        <h1>Study Vault</h1>
        <ul>
          <li>Our Website</li>
          <li>Graduates</li>
          <li>Books</li>
          <li>PDFs</li>
        </ul>
      </div>

      <div className="web-info">
        <h1>Contact</h1>
        <ul>
          <li><button><FaEnvelope className="cont-icon"  /></button></li>
          <li><button><FaWhatsappSquare className="cont-icon"  /></button></li>
          <li><button><FaTwitter className="cont-icon"  /></button></li>
          <li><button><FaFacebookSquare className="cont-icon"  /></button></li>
        </ul>
      </div>

      <div className="web-info">
        <h1>Supporters</h1>
        <ul>
          <li>Havard</li>
          <li>IBM</li>
          <li>Coi</li>
          <li>KQ</li>
        </ul>
      </div>

      <div className="web-info">
        <h1>Study Vault</h1>
        <ul>
          <li>Our Website</li>
          <li>Graduates</li>
          <li>Books</li>
          <li>PDFs</li>
        </ul>
      </div>
      </div>
    </div>
  );
};
