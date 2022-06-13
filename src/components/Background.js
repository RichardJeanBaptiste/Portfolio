import '../App.css';
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

export default function Background() {

    const Styles = {
        root: {
            display:'flex',
            width: '100vw',
            height: '50vh',
        },
        backgroundBox: {
            position: 'relative',
            margin: '-10rem auto',
        },
        backgroundTitle: {
            fontSize: '1.9rem',
            color: 'dodgerblue',
        },
        backgroundBody: {
            marginTop: '1.1%',
            fontSize: '1.5rem',
            width: '45rem',
            wordWrap: 'break-word',
        },
        bB: {
            fontSize: '1.9rem',
            fontWeight: 'bold',
        }
    }

    return (
        <Box sx={Styles.root}>
            <Stack direction='row' spacing={'9%'} sx={Styles.backgroundBox}>
                <Typography variant='body1' component='p' sx={Styles.backgroundTitle}>Background</Typography>
                <Stack direction='column' spacing={'4%'}>
                    <Typography variant='body1' component='p' sx={Styles.backgroundBody}>
                        I'm currently a Freelance Engineer based in New York building things for the web and for mobile.
                        I recently graduated from Brooklyn College University earning my Bachelors in Computer Science with a 3.5 gpa.
                    </Typography>
                    <Typography variant='body1' component='p' sx={Styles.backgroundBody}>
                        As a software engineer, I enjoy bridging the gap between engineering and design - combining my technical knowledge with my keen eye for design to create a 
                        beautiful product. My goal is to always build applications that are scalable and efficient under the hood while providing engaging user experiences.
                    </Typography>
                </Stack>
                
            </Stack>
        </Box>
    )
}