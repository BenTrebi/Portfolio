import React, { useRef } from 'react';
import './contact.css'
import githubicon from '../../assets/githubicon.png'
import linkedinicon from '../../assets/linkedinicon.png'
import emailjs from '@emailjs/browser';



const Contact = ()  =>  {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hrs0qju', 'template_j8omldt', form.current, 'mHLMMPWzBgxoCr51r')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email Sent !')
      }, (error) => {
          console.log(error.text);
      });
  };
  return  (
    <section className='contactInfo'>
      <div id="contact">
        <h1 className='contactInfoTitle'>Contact Me</h1>
        <span className='contactDesc'>To reach me please fill out the form below.</span>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
          <input type='text' className='name' placeholder='Your Name' name='your_name'/>
          <input type='text' className='email' placeholder='Your Email' name='your_email'/>
          <textarea className='msg' rows='5' placeholder='Your Message' name='message'></textarea>
          <button type='submit' value='Send' className='submitBtn'>Submit</button>
          <div className='links'>
            <a href='https://github.com/BenTrebi' target='_blank'>
              <img src={githubicon} alt='GitHubIcon' className='link'/>
            </a>
            <a href='https://www.linkedin.com/in/ben-trebilcock-1600591b9/' target='_blank'>
              <img src={linkedinicon} alt='LinkedInIcon' className='link'/>
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;