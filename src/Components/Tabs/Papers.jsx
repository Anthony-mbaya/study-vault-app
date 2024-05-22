import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

export const Papers = () => {
  return (
    <div>
      <div>
        <h1>University ~Exam Past Papers</h1>
        <Link to="/">Home</Link>
        <Link to="/chat-rev">
          <FontAwesomeIcon icon={faQuestionCircle} /> Chat-Rev
        </Link>
      </div>
    </div>
  );
};
