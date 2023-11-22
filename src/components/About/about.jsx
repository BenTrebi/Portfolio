import React from 'react';
import './about.css';
import frontend from '../../assets/frontend.png';
import backend from '../../assets/backend.png';
import polisci from '../../assets/polisci.webp';

const About = () => {
  return  (
    <section id='about'>
      <span className='aboutTitle'>About Me</span>
      <div className='aboutBars'>
        <div className='aboutBar'>
          <img src= {frontend} alt='Frontend' className='aboutBarImg' />
          <div className='aboutBarText'>
            <h2>Front End Skills</h2>
            <p>HTML5, CSS, JQuery, JavaScript, Bootstrap, ReactJS</p>
          </div>
        </div>
        <div className='aboutBar'>
          <img src={backend} alt='Backend' className='aboutBarImg' />
          <div className='aboutBarText'>
            <h2>Back End Skills</h2>
            <p>MySQL, MongoDB, Node, Express, Handlebars</p>
          </div>
        </div>
        <div className='aboutBar'>
          <img src= {polisci} alt='Political Science' className='aboutBarImg' />
          <div className='aboutBarText'>
            <h2>Other Skills</h2>
            <p>I received my bachelor's degree in political science from the University of Minnesota. In the process of completing this program, I gained valuable skills such as teamwork, communication, critical thinking, and problem-solving. </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;