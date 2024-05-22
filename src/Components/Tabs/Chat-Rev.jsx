import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboard,faHomeUser,
  faPaperPlane
} from "@fortawesome/free-solid-svg-icons";
//import { text } from "@fortawesome/fontawesome-svg-core";

export const ChatRev = () => {
  const [answer, setAnswer] = useState([]);
  const [question, setQuestion] = useState("");  
 
  const pdfAnswers = [
    "Understand complex questions and provide informative summaries in natural language.",
    "Chatbots answer basic inquiries and handle customer service tasks, freeing up human agents.",
    "Quickly access information through spoken commands, ideal for hands-free interaction",
    "Connect information across sources, returning more relevant search results.",
    "Analyze vast data sets to predict trends and automate repetitive tasks, improving efficiency.",
  ];
  const answerSelector = () => {
    const randomSelect = Math.floor(Math.random() * pdfAnswers.length);
    return pdfAnswers[randomSelect];
  };

  const getAnswer = () => {
    if (question.trim() !== "") {
      {
        /*[...messages, ... ]: This syntax creates a new array by spreading the existing messages array. 
        Spreading allows you to easily add new elements to the existing array.
          text propety holds history*/
      }
      setAnswer([
        ...answer,
        { text: question, timestamp: new Date(), fromUser: true },
      ]);
      setQuestion(""); 

      const selectRes = answerSelector();
      setAnswer([
        ...answer,
        { text: selectRes, timestamp: new Date(), fromUser: false, qs:question },
      ]);
    } 
  };

  return (
    <div className="chat-cont">
      <h1 className="header-btns">
        <Link to="/">
          <FontAwesomeIcon icon={faHomeUser} />
        </Link>
        <Link to="/past-papers">
          <FontAwesomeIcon icon={faClipboard} /> Papers
        </Link>
      </h1>
       
      <div className="sendQs">
      <textarea 
        type="text"
        placeholder="Type a question..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}   
      />
      <button onClick={getAnswer}><FontAwesomeIcon icon={faPaperPlane} /></button>
      </div>



      {answer.map((ans, index) => (
        <div
          key={index}
          className={`Message ${ans.fromUser ? "from-user" : "from-bot"}`}
        >
          <div className="getRes">
          <p><span>Question</span>: {ans.qs}</p>
          <p><span>Answer</span>: {ans.text}</p>
          <span>{ans.timestamp.toLocaleString()}</span>
          </div>
          <hr className="mt-4 mb-4" />
          <div className="sendQs">
          <textarea
        type="text"
        placeholder="Type a question..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <button onClick={getAnswer} ><FontAwesomeIcon icon={faPaperPlane} /></button>
        </div>
        </div>
      ))}
      
    </div>
  );
};
