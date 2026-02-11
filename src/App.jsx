import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './components/About';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Contact from './components/Contact';
import ExercisePage from './components/ExercisePage';

function App() {
  return (
    <div className="app">
       <Router>
         <Navbar />
           <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/exercise" element={<ExercisePage />} />
           </Routes>
       </Router> 
    </div>  
  );
}
export default App;
