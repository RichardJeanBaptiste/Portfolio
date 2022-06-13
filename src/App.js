import './App.css';
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Intro from './components/Intro';
import Background from './components/Background';
import Skills from './components/Skills';
// import Avatar from '@mui/material/Avatar';
// import maleboy from './assets/male_boy.png';
// import PersistentDrawerLeft from './components/PersistantDrawer';
// import Button  from '@mui/material/Button';
// import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
// import IconButton from '@mui/material/IconButton';
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



function App() {

  const theme = createTheme({
    typography: {
      allVariants: {
        fontFamily: 'Grape Nuts',
      }
    },
  })

  
 
  return (
    <ThemeProvider theme={theme}>
        <Intro/>
        <Background/>
        <Skills/>
    </ThemeProvider>
    
  )
}

export default App;

