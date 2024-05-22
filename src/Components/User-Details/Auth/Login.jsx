import React from "react";
import { useForm } from "react-hook-form"; 
import { Link } from 'react-router-dom';

export const Login = ({signupClick}) => {
  const {
    register,
    handleSubmit, 
  } = useForm();
  function submitFun(data) {
    const userData = JSON.parse(localStorage.getItem(data.email));
    if (userData) {
      if (userData.password === data.password) {
        alert("You have successful login");
      } else {
        alert("Email or password not matching");
      }
    } else {
      alert("Please try again");
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit(submitFun)} className="login-form">
        <h1>~Login~</h1>
        <input {...register("email")} type="email" placeholder="Email address" />
        <input
          {...register("password")}
          type="password"
          placeholder="Password"
        />
        <button type="submit" title="click to login">Submit</button>
        <p>
          Don't have an account?
           
            <Link to='/signup' className="signup-btn" onClick={signupClick} title="click to signup">SignUp</Link>
           
        </p>
        <h3><Link to='/' title="click to go back home">Exit</Link></h3>
      </form>
    </div>
  );
};
