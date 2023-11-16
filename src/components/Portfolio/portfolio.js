import React, { useState } from "react";
import './portfolio.css';
import portfolio1 from '../../assets/portfolio1.png'
import portfolio2 from '../../assets/portfolio2.png'
import portfolio3 from '../../assets/portfolio3.png'

const Portfolio = ()  =>    {
  return  (
    <section id="portfolio">
      <h2 className="portfolioTitle">My Portfolio</h2>
      <span className="portfolioDesc">Click on the images below to view previous works:</span>
      <div className="portfolioImgs">
        <div className="hometownClassifieds">
        <h2>Home Town Classifieds</h2>
        <a href="https://github.com/Aidan-Windebank/hometown-classifieds" target="_blank">
        <img src={portfolio1} alt="portfolio1" className="portfolioImg" />
        </a>
        </div>
        <div className="shazingle">
        <h2>Shazingle</h2>
        <a href="https://github.com/toxicmix/group-project" target="_blank">
        <img src={portfolio2} alt="portfolio2" className="portfolioImg" />
        </a>
        </div>
        <div className="thinkSync">
        <h2>ThinkSync</h2>
        <a href="https://github.com/BenTrebi/ThinkSync" target="_blank">
        <img src={portfolio3} alt="portfolio3" className="portfolioImg" />
        </a>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;