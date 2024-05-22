import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./Components/Welcome/Header";
import { ChatRev } from "./Components/Tabs/Chat-Rev";
import { PDFs } from "./Components/Tabs/PDFs";
import { Papers } from "./Components/Tabs/Papers"; 
import { Verifier } from "./Components/User-Details/Auth/Verifier";
import { Profile } from "./Components/User-Details/Profile";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Header} />
        <Route exact path="/chat-rev" Component={ChatRev} />
        <Route path="/pdfs" Component={PDFs} />
        <Route path="/past-papers" Component={Papers} />
        <Route path="/login" Component={Verifier} />
        <Route path="/signup" Component={Verifier} />
        <Route path="/user_profile" Component={Profile} />
      </Routes>
    </BrowserRouter>
  );
};
