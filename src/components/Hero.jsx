import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import heroImg from '../assets/1x/Mesa de trabajo 1.png'
function Hero() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

 const handleSubmit = (e) => {
  e.preventDefault();
  const isValidEmail = email.includes('@');
  const isValidPassword = password.trim().length !== 0;
  const eName = email;
  const ePassword = password;
  const userName = "ajithmohan.tkd@gmail.com";
  const userPassword = "12345";

  
  if (isValidEmail && isValidPassword) {
    if(eName == userName && ePassword == userPassword)
    {
      navigate('/exercise', { state: { email, password } });
    }
    else{
      alert('You are not allowed to login');
    }
    
  }
  else {
    alert('Please enter valid details.');
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
