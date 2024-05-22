import React from "react";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

export const SignUp = ({loginClick}) => {
  const {
    register,
    handleSubmit, 
  } = useForm();
  function submitForm(data) {
    localStorage.setItem(
      data.email,
      JSON.stringify({
        user_name: data.user_name,
        course: data.course,
        password: data.password,
      })
    );
  }
  return (
    <div>
      <form onSubmit={handleSubmit(submitForm)} className="signup-form">
        <h1>Sign Up</h1>
        <input type="text" {...register("user_name")} placeholder="User Name" />
        <input type="text" {...register("course")} placeholder="Course" />
        <input type="email" {...register("email")} placeholder="Email Address" />
        <input
          type="password"
          {...register("password")}
          placeholder="Password"
        />
        <button type="submit" title="click to save">Save</button>
        <p>
          Already have an account!
          {/*<a href="#" onClick={loginClick}>*/}
          <Link to="/login" onClick={loginClick} className="login-btn" >Login</Link>
           
           
        </p>
        <h3><Link to='/'>Exit</Link></h3>
        
      </form>
    </div>
  );
};
