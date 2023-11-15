import React from "react";
import './portfolio.css';
import portfolio1 from '../../assets/portfolio1.png'
import portfolio2 from '../../assets/portfolio2.png'
import portfolio3 from '../../assets/portfolio3.png'

const Portfolio = ()  =>    {
  return  (
    <section id="portfolio">
      <h2 className="portfolioTitle">My Portfolio</h2>
      <span className="portfolioDesc">Below you can find some of my previous works:</span>
      <div className="portfolioImgs">
        <div className="hometownClassifieds">
        <h2>Home Town Classifieds</h2>
        <img src={portfolio1} alt="" className="portfolioImg" />
        </div>
        <div className="shazingle">
        <h2>Shazingle</h2>
        <img src={portfolio2} alt="" className="portfolioImg" />
        </div>
        <div className="thinkSync">
        <h2>ThinkSync</h2>
        <img src={portfolio3} alt="" className="portfolioImg" />
        </div>
      </div>
      <button className="portfolioBtn">See More</button>
    </section>
  );
}

export default Portfolio;