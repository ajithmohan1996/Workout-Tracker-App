import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import heroImg from '../assets/1x/Mesa de trabajo 1.png'
function Hero() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

 const handleSubmit = (e) => {
  e.preventDefault();
  console.log('Form submitted with email:', email, 'and name:', name);

  const isValidEmail = email.includes('@');
  const isValidName = name.trim().length !== 0;

  console.log('Email valid:', isValidEmail, 'Name valid:', isValidName);

  if (isValidEmail && isValidName) {
    console.log('Navigating to /exercise');
    navigate('/exercise', { state: { email, name } });
  } else {
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
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
