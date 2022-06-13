import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';


export default function Intro() {

    const Styles = {
        intro: {
          width: { lg: '40vw'},
          height: { lg: '60vh'},
          marginTop: { lg: '19vh'},
          marginLeft: { lg: '10vw'}
        },
        introTitle: {
    
        },
        introBody: {
          marginTop: '10%',
        },
        introBodySubtitle: {
          marginTop: '10%',
          fontSize: '2rem',
        },
    }

    return (
        <Box sx={{ width: '100vw', height: '100vh'}}> 
            <Box sx={Styles.intro}>
                <Typography variant='h2' component='h2'>Hello!</Typography>
                <Typography variant='h4' component='h4' sx={Styles.introBody}>
                    I'm Richard Jean-Baptiste, I'm a software engineer speciliazing
                    in building exceptional digital experiences. Currently, I'm focused
                    on building products using React/React-Native and NodeJS.
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', marginTop:'10%'}}>
                    <Typography variant='subtitle1' sx={{fontSize: '2rem'}}>Get in touch here  {'->'} </Typography>
                    <Link href="#" sx={{fontSize: '2rem', marginLeft: '13px', marginTop:'8px',fontFamily:'Grape Nuts'}}>Richinbk1@gmail.com</Link>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', marginTop:'5%'}}>
                    <Typography variant='subtitle1' sx={{fontSize: '2rem'}}>Get my CV {'->'} </Typography>
                    <Link href="#" sx={{fontSize: '2rem', marginLeft: '13px', marginTop:'8px',fontFamily:'Grape Nuts', color: '#AA170D'}}>Here</Link>
                </Box>
            </Box>
        </Box>
    )
}   
