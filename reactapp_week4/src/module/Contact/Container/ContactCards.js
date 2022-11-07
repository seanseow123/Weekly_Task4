import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const ContactCards = () => {
    return (
        <>
            <Grid
                container
                spacing={5}
                direction="row"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '50vh' }}
                >

                <Card sx={{ maxWidth: 400, height: 200, m: 2, borderRadius: 3}}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                               Location
                            </Typography>
                            <br></br><br></br>
                            <Typography variant="h7" color="text.secondary">  
                            50 Havelock Road Singapore 12345
                            </Typography>
                        </CardContent>
                </Card>
                <Card sx={{ maxWidth: 400, height: 200, m: 2, borderRadius: 3}}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                               Contact Number
                            </Typography>
                            <br></br><br></br>
                            <Typography variant="h7" color="text.secondary"> 
                            (+65) 68878485
                            </Typography>
                        </CardContent>
                </Card>
                <Card sx={{ maxWidth: 400, height: 200, m: 2, borderRadius: 3}}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Email
                            </Typography>
                            <br></br><br></br>
                            <Typography variant="h7" color="text.secondary">
                            info@leaderboardscore.com
                            </Typography>
                        </CardContent>
                </Card>
                </Grid> 
                </>
    )
}

export default ContactCards;