import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import a from '../assets/test-page.pdf';


export default function Intro() {

    const Styles = {
        root: {
            width: '100vw',
            height: '100vh',
        },
        intro: {
            width: { xs:'90vw', lg: '50vw'},
            height: { lg: '61vh'},
            marginTop: { xs:'20%', lg: '7%'},
            marginLeft: { xs:'6%', lg: '10%'},
        },
        introBody: {
            fontSize: {xs: '25px', lg: '2.225rem'},
            marginTop: { xs:'10%', lg: '8%'},
        },
        subtitle1: {
            display: 'flex',
            flexDirection: {lg: 'row'},
            marginTop: { xs:'2%', lg: '10%'},
        },
        subtitle1Title: {
            fontSize: { xs:'21px', lg: '24px'},

        },
        subtitle1Link: {
            fontFamily: 'Grape Nuts',
            fontSize: { xs:'18px', lg: '24px'},
            marginLeft: { xs:'5px', lg: '13px'},
            marginTop: { xs:'7px', lg: '6.5px'}

        },
        subtitle2: {
            display: 'flex',
            flexDirection: { lg: 'row'},
            marginTop: { xs:'5%', lg: '2.5%'},
        },
        subtitle2Title: {
            fontSize: { xs:'21px', lg: '24px'},
        },
        subtitle2Link: {
            fontFamily: 'Grape Nuts',
            color: '#AA170D',
            fontSize: { xs:'18px', lg: '24px'},
            marginLeft: { xs:'11px', lg: '13px'},
            marginTop: { xs:'4.5px', lg: '6.5px'},
        }

    }

    const openCV = () => {
        window.open(a);
    }

    return (
        <Box sx={Styles.root}>
            <Box sx={Styles.intro}>
                <Typography variant='h2' component='h2'>Hello!</Typography>
                <Typography variant='h4' component='h4' sx={Styles.introBody}>
                    I'm Richard Jean-Baptiste, I'm a software engineer speciliazing
                    in building exceptional digital experiences. Currently, I'm focused
                    on building products using React/React-Native and NodeJS.
                </Typography>
                <Box sx={Styles.subtitle1}>
                    <Typography variant='subtitle1' sx={Styles.subtitle1Title}>Get in touch here  {'->'} </Typography>
                    <Link href='mailto:Richinbk1@gmail.com' sx={Styles.subtitle1Link}>Richinbk1@gmail.com</Link>
                </Box>
                <Box sx={Styles.subtitle2}>
                    <Typography variant='subtitle1' sx={Styles.subtitle2Title}>Get my CV {'->'} </Typography>
                    <Link href="#" onClick={openCV} sx={Styles.subtitle2Link}>Here</Link>
                </Box>
            </Box>
        </Box>
    )
   
}   