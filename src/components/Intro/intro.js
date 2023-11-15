import React from 'react';
import './intro.css';
import bg from '../../assets/bg.png'
import btnImg from '../../assets/btnImg.png'
import {Link} from 'react-scroll';

const Intro = () => {
  return(
    <section id= "intro">
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm<span className='introName'> Ben Trebilcock</span> <br />Full Stack Web Developer</span>
            <p className='introPara'>I am a skilled web developer who enjoys working with others and learning new ways to solve problems.</p>
            <Link><button className='btn'><img src= {btnImg} alt='Hire Me' className='btnImg' />Hire Me</button></Link>
        </div>
        <img src={bg} alt='Profile' className='bg'/>
    </section>
  )
}

export default Intro;