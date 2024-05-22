import React from "react";
import graduate from "../Images/download3.png";
import books from "../Images/download1.jpg";
import paper from "../Images/download2.png";

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
        <img src={graduate} alt="study images" />
          <p>Graduation is the formal completion of an academic program, where
             students receive a diploma or degree as recognition of their achievement. 
             It often involves a ceremonial event marking the transition from student to graduate,
              celebrating their academic accomplishments.</p>
        
        </div>
        <div className="books-img">
          <p>Books are a great way to learn and expand your knowledge. They can provide a 
            wealth of information on a variety of topics.</p>
        <img src={books} alt="study images" />
        </div>
        <div className="paper-img">
          <p>Papers are a great way to express your thoughts and ideas. They can be used to communicate
             information, share research, or simply express.</p>
        <img src={paper} alt="study images" />
        </div>
        
      </div>
    </div>
  );
};
