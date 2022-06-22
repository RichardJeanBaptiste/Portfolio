import '../App.css';
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Background() {

    const Styles = {
        root: {
            width: '100vw',
            height: '100vh',
            //marginTop: '8%',
            paddingBottom: '20%',
        },
        backgroundTitle: {
            color: 'dodgerblue',
            fontSize: { xs:'1.98rem', lg: '36px'},
        },
        backgroundBox: {
            marginTop: { xs:'4%', lg: '2%'}
        },
        backgroundBody: {
            fontSize: { xs:'1.7rem', lg: '26px'},
            width: { xs:'75vw', lg: '50vw'},
            margin: 'auto',
            paddingBottom: '2%',
            fontWeight: '700',
        }
    }


    return (
        <Box sx={Styles.root}>
            <Typography  variant='body1' component='p' align='center' sx={Styles.backgroundTitle}>Background</Typography>
            <Box sx={Styles.backgroundBox}>
                <Typography variant='body1' component='p' align='left' sx={Styles.backgroundBody}>
                    I'm currently a Freelance Engineer based in New York building things for the web and for mobile.
                    I recently graduated from Brooklyn College University earning my Bachelors in Computer Science with a 3.5 gpa.
                </Typography>
                    
                <Typography variant='body1' component='p' align='center' sx={Styles.backgroundBody}>
                    As a software engineer, I enjoy bridging the gap between engineering and design - combining my technical knowledge with my keen eye for design to create a 
                    beautiful product. My goal is to always build applications that are scalable and efficient under the hood while providing engaging user experiences.
                </Typography>
            </Box>
            
        </Box>
    )
}

