import './App.css';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import maleboy from './assets/male_boy.png';
import Typed from 'react-typed';
import PersistentDrawerLeft from './components/PersistantDrawer';
import Typography from '@mui/material/Typography';
// import Drawer from '@mui/material/Drawer';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu'; 
// import ListItem from '@mui/material/ListItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import HomeIcon from '@mui/icons-material/Home';
// import PermIdentityIcon from '@mui/icons-material/PermIdentity';
// import WorkIcon from '@mui/icons-material/Work';
// import ChatIcon from '@mui/icons-material/Chat';
// import Typography from '@mui/material/Typography';
//  import Divider from '@mui/material/Divider';

const drawerWidth = 220;

/**
 * TODO
 *  Add Icons
 *  Add Font
 *  style drawer 
 * 
 *  #c6a459
 * 
 * backgroundColor: '#353353',
 * active color - #FFD15C
 */


function App() {

  const Styles = {
    root: {
      display:'flex',
      width:'100vw',
      height:'100vh',
      backgroundColor: '#353353'
    },
    titleStyle: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      height: { xs: '22vh', sm: '22vh', md:'32vh', lg: '24vh', xl: '35vh'},
      width: { xs: '67vw', sm: '43vw', md: '32vw', lg: '24vw', xl: '25vw'},
    },
    avatarStyle: {
      margin: 'auto',
      width: '50%',
      height: '70%',
    },
    subTitleText1: {
      color: 'whitesmoke',
      fontSize: {  xs:'24px', sm:'30px', lg: '32px'},
      fontFamily: 'Rubik',
      fontWeight: 'bold',
      marginTop: '10px'
    },
    subTitleText2: {
      color: 'whitesmoke',
      fontSize: '24px',
      whiteSpace: 'nowrap',
    },
    typedStyle: {
      //marginLeft: '-22px',
      color: 'whitesmoke',
      fontSize: '16px',
      fontFamily: 'Rubik',
    },
    aboutmeContainer: {
      width:'100vw',
      height:'100vh',
    }
  }
 
  return (

    <Box > 
      <Box sx={Styles.root}>

        <PersistentDrawerLeft/>
      
        {/** Avatar */}
        <Box sx={Styles.titleStyle}>
          <Avatar alt="Richard Jean-Baptiste" src={maleboy} sx={Styles.avatarStyle}/>
          <Typography variant='h4' component='h4' textAlign='center' sx={Styles.subTitleText1}>Hi, Im Richard</Typography>
          <Typography varaiant='h4' component='h4' textAlign='center' sx={Styles.subTitleText2}>
              I'm a <Typed
                      style={{ marginTop: '10px', color: 'whitesmoke', fontSize: '24px', fontFamily: 'Rubik'}}
                      strings={['Software Developer','Front-End Delevoper', 'Backend Developer']}
                      typeSpeed={40}
                      backSpeed={50}
                      loop
                    />
          </Typography>
          
        </Box>
      </Box>

      {/** About Me */}
      <Box sx={Styles.aboutmeContainer}>
        <h1>ABCD</h1>
        
      </Box>
    </Box>
  )
}

export default App;

/**
 * 
 * <Box sx={Styles.titleStyle}>
        <Title/>
      </Box>
 */
