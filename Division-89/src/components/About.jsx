import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';

function About() {
  return (
    <div className="container" style={{padding:'10px'}}>
      <div className="">
        <h1>About Us</h1>
        <p>At Division89, we believe every step can make a difference. Our mission is to revolutionize the way we harness energy by turning ordinary sidewalks into extraordinary power generators. Through innovative piezoelectric technology, we transform the kinetic energy of footsteps into clean, renewable electricity—creating a more sustainable future, one step at a time.</p>
        <h3 className="">Who are we?</h3>
        <p>We are a team of engineers, environmentalists, and visionaries who are passionate about sustainable solutions. Inspired by the growing need for renewable energy and urban innovation, we developed a groundbreaking way to combine technology and infrastructure for a greener tomorrow.</p>
        <h3 className="">What we do</h3>
        <p>Our piezoelectric sidewalks are not just pathways; they are powerhouses. Designed for cities, campuses, and commercial spaces, these sidewalks capture the energy of human movement and convert it into usable electricity. This energy can power streetlights, charge devices, or even feed into the local grid—helping communities reduce their carbon footprint while embracing forward-thinking design.</p>
        <h3 className="">Why choose us?</h3>
      <ul>
        <li>Innovation at Every Step: Our cutting-edge technology is paving the way for smarter, more sustainable cities.</li>
      <li>Eco-Friendly Solutions: We are committed to reducing reliance on fossil fuels and promoting renewable energy sources.</li>
      <li>Smart Investment: Our products are designed to deliver long-term benefits, from energy savings to enhanced urban aesthetics.</li>
      </ul>
      </div>
    </div>
  );
}

export default About;
