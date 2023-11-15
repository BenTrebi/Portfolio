import React from 'react';
import './about.css';
import frontend from '../../assets/frontend.png';
import backend from '../../assets/backend.png';
import polisci from '../../assets/polisci.webp';

const About = () => {
  return  (
    <section id='about'>
      <span className='aboutTitle'>About Me</span>
      <span className='AboutDesc'> I am a passionate web designer... </span>
      <div className='aboutBars'>
        <div className='aboutBar'>
          <img src= {frontend} alt='Frontend' className='aboutBarImg' />
          <div className='aboutBarText'>
            <h2>Frontend Skills</h2>
            <p>HTML5, CSS, JQuery, JavaScript, Bootstrap, ReactJS</p>
          </div>
        </div>
        <div className='aboutBar'>
          <img src={backend} alt='Backend' className='aboutBarImg' />
          <div className='aboutBarText'>
            <h2>Backend Skills</h2>
            <p>MySQL, MongoDB, Node, Express, Handlebars</p>
          </div>
        </div>
        <div className='aboutBar'>
          <img src= {polisci} alt='Political Science' className='aboutBarImg' />
          <div className='aboutBarText'>
            <h2>Other Skills</h2>
            <p>Additionally, I have a bachelors degree in Political Science through which I gained valueable skills such as communication and teamwork.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;