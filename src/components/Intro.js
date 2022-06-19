import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import a from '../assets/test-page.pdf';


export default function Intro() {

    const Styles = {
        intro: {
          width: { lg: '40vw'},
          height: { lg: '60vh'},
          marginTop: {xs:'6em', lg: '19vh'},
          marginLeft: {xs:'3em', lg: '10vw'}
        },
        introTitle: {
    
        },
        introBody: {
          marginTop: {xs:'18%', lg: '10%'},
          fontSize: {xs: '28px'},
        },
        introBodySubtitle: {
          marginTop: '10%',
          fontSize: '2rem',
        },
    }

    const openCV = () => {
        window.open(a);
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
                <Box sx={{ display: 'flex', flexDirection: { xs:'column', lg: 'row'}, marginTop:'10%'}}>
                    <Typography variant='subtitle1' sx={{fontSize: '2rem'}}>Get in touch here  {'->'} </Typography>
                    <Link href='mailto:Richinbk1@gmail.com' sx={{fontSize: '2rem', marginLeft: '13px', marginTop:'8px',fontFamily:'Grape Nuts'}}>Richinbk1@gmail.com</Link>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: { xs:'column', lg: 'row'}, marginTop:'5%'}}>
                    <Typography variant='subtitle1' sx={{fontSize: '2rem'}}>Get my CV {'->'} </Typography>
                    <Link href="#" onClick={openCV} sx={{fontSize: '2rem', marginLeft: '13px', marginTop:'8px',fontFamily:'Grape Nuts', color: '#AA170D'}}>Here</Link>
                </Box>
            </Box>
        </Box>
    )
}   
