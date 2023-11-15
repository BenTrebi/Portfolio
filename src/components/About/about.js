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
            <p>Frontend Skills go here</p>
          </div>
        </div>
        <div className='aboutBar'>
          <img src={backend} alt='Backend' className='aboutBarImg' />
          <div className='aboutBarText'>
            <h2>Backend Skills</h2>
            <p>Backend Skills go here</p>
          </div>
        </div>
        <div className='aboutBar'>
          <img src= {polisci} alt='Political Science' className='aboutBarImg' />
          <div className='aboutBarText'>
            <h2>Other Skills</h2>
            <p>Poli Sci and other skills go here</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;