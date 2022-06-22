import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Footer() {

    const Styles = {
        root: {
           marginTop: '7%',
           paddingBottom: '.5%',
        },
        footerBox: {
            display: 'flex',
            flexDirection: 'row',
            marginLeft: '2%',

        },
        leftFooter: {
            fontSize: '1.55rem',
            width: { lg: '40%'},
            textDecoration: 'underline',
        },
        linkStyle: {
            fontSize: { lg: '1.5rem'}
        }
        
    }

    return (
        <Box sx={Styles.root}>
            <Box sx={Styles.footerBox}>
                <Typography variant='h6' component='h6' sx={Styles.leftFooter}>Developed By Richard Jean-Baptiste</Typography>
                <Grid container  spacing={1} direction='row' alignItems='center' justifyContent='flex-end'sx={{ width: '90vw'}}>
                    <Grid item xs={3} lg={1}>
                        <Link href='https://github.com/RichardJeanBaptiste' underline='hover' variant='body1' sx={Styles.linkStyle}>Github</Link>
                    </Grid>
                    <Grid item xs={3} lg={1}>
                        <Link href='mailto:Richinbk1@gmail.com' variant='body1' underline='hover' sx={Styles.linkStyle}>Email</Link>
                    </Grid>
                    <Grid item xs={3} lg={1}>
                        <Link href='#' variant='body1' underline='hover' sx={Styles.linkStyle}>Blog</Link>
                    </Grid>
                </Grid>
            </Box>
        </Box>  
    )
}

/**
 * 
 * 
 * 
 * 
 *          <Box sx={Styles.footerContainer}>
                <Typography sx={Styles.footerTitle} variant='body1'>Developed By Richard Jean-Baptiste</Typography>
                <Box sx={Styles.rightFooterContainer}>
                    <Link href='https://github.com/RichardJeanBaptiste' underline='hover' variant='body1'>Github</Link>
                    <Link href='mailto:Richinbk1@gmail.com' variant='body1' underline='hover'>Email</Link>
                    <Link href='#' variant='body1' underline='hover'>Blog</Link>
                </Box>
            </Box>
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * const Styles = {
        root: {
            width: '100vw',
            height: '10vh',
        },
        main: {
            width: '100vw',
            display: 'flex',
            flexDirection: {xs: 'column', lg: 'row'},
            marginLeft: '1.5%',
            marginTop: { xs: '17%',lg: '35px'},
        },
        footerTitle: {
            fontSize: {xs: '20px', lg: '1.5rem'},
            paddingRight: {lg: '65%'},
            margin: {xs: 'auto'},
        },
        rightFooter: {
            display: 'flex',
            flexDirection: 'row',
            margin: {xs:'4% auto'},
        },
    }


    return(
        <Box sx={Styles.root}>
            <Box sx={Styles.main}>
                <Typography sx={Styles.footerTitle} variant='body1'>Developed By Richard Jean-Baptiste</Typography>
                <Box sx={Styles.rightFooter}>
                    <Link href='https://github.com/RichardJeanBaptiste' underline='hover' variant='body1' sx={{ fontSize: {xs: '20px', lg: '1.5rem'}  }}>Github</Link>
                    <Link href='mailto:Richinbk1@gmail.com' variant='body1' underline='hover' sx={{ fontSize: {xs: '20px', lg: '1.5rem'} , marginLeft: '4rem'}}>Email</Link>
                    <Link href='#' variant='body1' underline='hover' sx={{ fontSize: { xs: '20px', lg:'1.5rem'}, marginLeft: '4rem'}}>Blog</Link>
                </Box>
            </Box>
        </Box>
    )
 * 
 * 
 */