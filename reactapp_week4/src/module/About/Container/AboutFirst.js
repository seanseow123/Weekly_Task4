import React, { Component } from 'react';
import aboutfirstimg from '../../../images/popplayerimg.jpg';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from "@mui/material";
import './about.css';

class AboutFirst extends Component {

    render() {
        return (
            <div className='aboutpage'>
            <Box sx={{ flexGrow: 1, padding: 8 }}>
            <Grid container spacing={2} columns={8}>
                <Grid item xs={4}>
                <Typography><h2>ABOUT LEADERBOARD SCORE</h2></Typography>
                <br></br>
                <Typography><h8>
                We’ve been around since 2011, creating the highest quality basketball & sports games that millions play every day, 
                everywhere, localised in a dozen different languages. Our games have been downloaded over 750 million times, 
                achieving numerous number one positions across store charts around the world. 
                </h8></Typography>
                <br></br>
                <Typography><h8> 
                Everything we do must be with the goal to make our small portfolio demonstrably better. 
                And if it can’t do this, then it isn’t done. We don’t skimp, but if there is little value in doing something then we won’t do it. 
                We say no to a lot of things every day.
                 </h8></Typography>
                 <br></br>
                 <Typography><h8> 
                 We love gaming and we love basketball. We feel privileged bringing these two passions to our games, 
                 using the very best of our talents to craft outstanding games and serve our players.  
                 </h8></Typography>
                </Grid>
                <Grid item xs={4}>
                <img src={aboutfirstimg} className='img-fluid shadow-4' alt='aboutfirstimg' />                
                </Grid>
            </Grid>
        </Box>
            </div>
        );
    }
}



export default AboutFirst;