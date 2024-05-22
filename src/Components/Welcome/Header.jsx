import React, { useState } from "react"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleXmark, faBars,
  faGraduationCap,
  faFilePdf,
  faQuestionCircle,
  faClipboard,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Footer } from "./Footer";
import { Text } from "./Text";

export const Header = () => {
  const [isMenuOpen,setIsMenuOpen] = useState(false);
  const menuFun =()=>{
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <> 
      <div className="header-cont">
        
          {/*  logo,header  */}
          <div className="header-logo">
          <FontAwesomeIcon icon={faGraduationCap} className="logo" />

          <h1 className="title">STUDY~VAULT</h1>
        </div>
        
        
          {/* link tabs */}
          <ul className="header-list">
          <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/chat-rev">
                <FontAwesomeIcon icon={faQuestionCircle} /> Chat-Rev
              </Link>
            </li>
            <li>
              <Link to="/pdfs">
                <FontAwesomeIcon icon={faFilePdf} /> PDFs
              </Link>
            </li>
            <li>
              <Link to="/past-papers">
                <FontAwesomeIcon icon={faClipboard} /> Papers
              </Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/user_profile">Profile</Link>
            </li>
          </ul> 
      </div>
      <div onClick={menuFun} className="menu-icons">
        {!isMenuOpen ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faCircleXmark} /> }
      </div>
      
      <div className={isMenuOpen ? "side-list" : "hidden"}>
      <ul className="side-list">
          <li>
              <Link to="/" className="link">Home</Link>
            </li>
            <li>
              <Link to="/chat-rev" className="link">
                <FontAwesomeIcon icon={faQuestionCircle} /> Chat-Rev
              </Link>
            </li>
            <li>
              <Link to="/pdfs" className="link">
                <FontAwesomeIcon icon={faFilePdf} /> PDFs
              </Link>
            </li>
            <li>
              <Link to="/past-papers" className="link">
                <FontAwesomeIcon icon={faClipboard} /> Papers
              </Link>
            </li>
            <li>
              <Link to="/login" className="link">Login</Link>
            </li>
            <li>
              <Link to="/user_profile" className="link">Profile</Link>
            </li>
          </ul> 
      </div>
      <Text />
      <Footer />
    </>
  );
};
