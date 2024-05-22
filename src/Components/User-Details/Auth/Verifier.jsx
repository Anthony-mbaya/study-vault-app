import React, { useState } from "react";
import { SignUp } from "./SignUp";
import { Login } from "./Login";

export const Verifier = () => {
  const [showLogin, setShowlogin] = useState(true);
  function handleOnClick() {
    setShowlogin(!showLogin);
  }
  return (
    <div>
      {showLogin ? (
        <Login signupClick={handleOnClick} />
      ) : (
        <SignUp loginClick={handleOnClick} />
      )}
    </div>
  );
};
