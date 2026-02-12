import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import heroImg from '../assets/1x/Mesa de trabajo 1.png'
function Hero() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

 const handleSubmit = (e) => {
  e.preventDefault();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValidEmail = emailRegex.test(email);
  const isValidPassword = password.trim().length >= 5;

  const userName = "ajithmohan.tkd@gmail.com";
  const userPassword = "12345";

  if (!isValidEmail) {
    alert("Please enter a valid email address.");
    return;
  }

  if (!isValidPassword) {
    alert("Password must be at least 5 characters.");
    return;
  }

  if (email === userName && password === userPassword) {
    navigate('/exercise', { state: { email } });
  } else {
    alert("You are not allowed to login.");
  }
};




  return (
    <section className="hero">
      <div className="hero-left">
        <h1>
          Build Your 
          <br/> Dream Body
        </h1>
        <h3>Achieve Your Fitness Goals at Our Fitness Tracking App</h3>
        <p>
          We will help you track your workout properly and achieve your goals.
        </p>
        <h4>Login To Start</h4>

        <form className="form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="hero-right">
        <img src={heroImg} alt="Fitness Illustration" />
      </div>
    </section>
  );
}

export default Hero;
