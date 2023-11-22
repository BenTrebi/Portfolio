import * as React from "react";
import './portfolio.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia  from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent  from "@mui/material/CardContent";
import portfolio1 from '../../assets/portfolio1.png'
import portfolio2 from '../../assets/portfolio2.png'
import portfolio3 from '../../assets/portfolio3.png'
import Button from "@mui/material/Button";

const Portfolio = ()  =>    {
  return  (
    <section id="portfolio">
      <h2 className="portfolioTitle">My Portfolio</h2>
      <span className="portfolioDesc">Click the view button to see previous works.</span>
        <Card sx={{ maxWidth: 1000 }} className="card">
          <CardMedia component="img" alt="hometown classifieds" height="250" src={portfolio1} className="cardImg"/>
          <CardContent className="cardContent">
            <Typography gutterBottom variant="h5" component='div' fontWeight={600} fontFamily='Poppins, sans-serif'>
              Hometown Classifieds
            </Typography>
            <Typography variant="body1" fontWeight={100} fontSize={15} fontFamily='Poppins, sans-serif'>
            This web application is designed to act as an old style newspaper classifieds ads page for community members to post and share items that they have for sale.
            </Typography>
          </CardContent>
          <CardActions className="cardBtn">
            <Button variant='outlined' size="small" href="https://github.com/Aidan-Windebank/hometown-classifieds" target="_blank">View</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 1000 }} className="card">
          <CardMedia component="img" alt="shazingle" height="250" src={portfolio2} className="cardImg"/>
          <CardContent className="cardContent">
            <Typography gutterBottom variant="h5" component='div' fontWeight={600} fontFamily='Poppins, sans-serif'>
              Shazingle
            </Typography>
            <Typography variant="body1"  fontWeight={100} fontSize={15} fontFamily='Poppins, sans-serif'>
            In this first project of the code camp, and we were assigned to create a comprehensible webpage of our choice. Our group created a music application using the Shazam API by API Dojo.
            </Typography>
          </CardContent>
          <CardActions className="cardBtn">
            <Button variant='outlined' size="small" href="https://github.com/toxicmix/group-project" target="_blank">View</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 1000 }} className="card">
          <CardMedia component="img" alt="thinkSync" height="250" src={portfolio3} className="cardImg"/>
          <CardContent className="cardContent">
            <Typography gutterBottom variant="h5" component='div' fontWeight={600} fontFamily='Poppins, sans-serif'>
              ThinkSync
            </Typography>
            <Typography variant="body1"  fontWeight={100} fontSize={15} fontFamily='Poppins, sans-serif'>
            ThinkSync is a tool designed to help a team collaborate or an individual come to a decision. Anyone can use ThinkSync to dynamically come to a decision, however by signing up, users can save and review their data which opens the possibility of analyzing trends or recurring choices.
            It is built using React, MongoDB, Mongoose, Express, and Material Design for Bootstrap v5 CSS framework.
            </Typography>
          </CardContent>
          <CardActions className="cardBtn">
            <Button variant='outlined' size="small" href="https://github.com/BenTrebi/ThinkSync" target="_blank">View</Button>
          </CardActions>
        </Card>
    </section>
  );
}

export default Portfolio;