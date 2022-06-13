import React from 'react';
import Box from '@mui/material/Box';
//import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Footer() {

    const Styles = {
        root: {
            width: '100vw',
            height: '10vh',
        },
        main: {
            width: '100vw',
            display: 'flex',
            flexDirection: 'row',
            marginLeft: '1.5%',
            marginTop: '35px',
        },
        rightFooter: {
            display: 'flex',
            flexDirection: 'row',
            //marginLeft: '-1.5rem',
        }
    }


    return(
        <Box sx={Styles.root}>
            <Box sx={Styles.main}>
                <Typography sx={{paddingRight: '65%', fontSize: '1.5rem'}} variant='body1'>Developed By Richard Jean-Baptiste</Typography>
                <Box sx={Styles.rightFooter}>
                    <Link href='#' variant='body1' sx={{ fontSize: '1.5rem'}}>Github</Link>
                    <Link href='#' variant='body1' sx={{ fontSize: '1.5rem', marginLeft: '4rem'}}>Email</Link>
                    <Link href='#' variant='body1' sx={{ fontSize: '1.5rem', marginLeft: '4rem'}}>Blog</Link>
                </Box>
            </Box>
        </Box>
    )
}