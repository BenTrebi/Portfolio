import * as React from "react";
import { useState } from "react";
import './portfolio.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia  from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent  from "@mui/material/CardContent";
import portfolio1 from '../../assets/portfolio1.png'
import portfolio2 from '../../assets/portfolio2.png'
import portfolio3 from '../../assets/portfolio3.png'
import portfolio4 from '../../assets/portfolio4.png'
import Button from "@mui/material/Button";

const Portfolio = ()  =>    {

  const useToggle = (initialState) => {
    const [toggleValue, setToggleValue] = useState(initialState);

    const toggler = () => { setToggleValue(!toggleValue) };
    return [toggleValue, toggler]
  };

  const [toggle, setToggle] = useToggle();

  const [buttonText, setButtonText] = useState('View More'); 
  
    const handleClick = () => { 
        setButtonText(buttonText === 'View More' ? 'View Less' : 'View More'); 
    }; 
  

  return  (
    <section id="portfolio">
      <h2 className="portfolioTitle">My Portfolio</h2>
      <span className="portfolioDesc">Click the view button to see previous works.</span>
      <Card sx={{ maxWidth: 1000 }} className="card">
          <CardMedia component="img" alt="thinkSync" height="250" src={portfolio3} className="cardImg"/>
          <CardContent className="cardContent">
            <Typography gutterBottom variant="h5" component='div' fontWeight={600} fontFamily='Poppins, sans-serif'>
              ThinkSync
            </Typography>
            <Typography variant="body1"  fontWeight={100} fontSize={15} fontFamily='Poppins, sans-serif'>
            ThinkSync is a tool designed to help teams collaborate or an individual come to a decision. Users can save and review their data to analyze trends or recurring choices.
            Technologies used: React, MongoDB, Mongoose, Express, and Material Design for Bootstrap. 
            </Typography>
          </CardContent>
          <CardActions className="cardBtn">
            <Button variant='outlined' size="small" href="https://thinksync-1e5fbc55e5f7.herokuapp.com" target="_blank">View</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 1000 }} className="card">
          <CardMedia component="img" alt="hometown classifieds" height="250" src={portfolio1} className="cardImg"/>
          <CardContent className="cardContent">
            <Typography gutterBottom variant="h5" component='div' fontWeight={600} fontFamily='Poppins, sans-serif'>
              Hometown Classifieds
            </Typography>
            <Typography variant="body1" fontWeight={100} fontSize={15} fontFamily='Poppins, sans-serif'>
            This web application is designed to act as a newspaper classified ads page for community members to post and share items for sale.
            Technologies used: HTML, Bootstrap, Node, MySQL, and Handlebars.
            </Typography>
          </CardContent>
          <CardActions className="cardBtn">
            <Button variant='outlined' size="small" href="https://project2-hometown-classifieds-ab97edeca766.herokuapp.com" target="_blank">View</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 1000 }} className="card">
          <CardMedia component="img" alt="shazingle" height="250" src={portfolio2} className="cardImg"/>
          <CardContent className="cardContent">
            <Typography gutterBottom variant="h5" component='div' fontWeight={600} fontFamily='Poppins, sans-serif'>
              Shazingle
            </Typography>
            <Typography variant="body1"  fontWeight={100} fontSize={15} fontFamily='Poppins, sans-serif'>
            Shazingle is a music application using the Shazam API by API Dojo.
            Technologies used: HTML, Shazam API, JQuery, Bootstrap,  howler.JS, bideo.JS, dayJS.
            </Typography>
          </CardContent>
          <CardActions className="cardBtn">
            <Button variant='outlined' size="small" href="https://toxicmix.github.io/group-project" target="_blank">View</Button>
          </CardActions>
        </Card>
        {toggle && (
        <Card sx={{ maxWidth: 1000 }} className="card">
          <CardMedia component="img" alt="sharkQuiz" height="250" src={portfolio4} className="cardImg"/>
          <CardContent className="cardContent">
            <Typography gutterBottom variant="h5" component='div' fontWeight={600} fontFamily='Poppins, sans-serif'>
              Shark Quiz
            </Typography>
            <Typography variant="body1"  fontWeight={100} fontSize={15} fontFamily='Poppins, sans-serif'>
            This quiz application was built as a personal project in order to better understand React. 
            Technologies used: React, Javascript, and CSS.
            </Typography>
          </CardContent>
          <CardActions className="cardBtn">
            <Button variant='outlined' size="small" href="https://shark-quiz-5b65e4b290fa.herokuapp.com" target="_blank">View</Button>
          </CardActions>
        </Card>
        )}
        <Button variant="outlined" size="medium" className="moreBtn" onClick={() => {
          setToggle();
          handleClick();
        }}>{buttonText}</Button>
    </section>
  );
}

export default Portfolio;