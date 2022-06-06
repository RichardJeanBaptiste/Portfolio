import React, {useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import HomeIcon from '@mui/icons-material/Home';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LaptopIcon from '@mui/icons-material/Laptop';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { Typography } from '@mui/material';

const drawerWidth = 180;

/*
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);
*/
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const CustomListIcon = (props) => {

    const [iconColor, setIconColor] = useState('whitesmoke'); 
    
    const activeColor = () => {
        setIconColor('#FFD15C');
    }

    const nonActiveColor = () => {
        setIconColor('whitesmoke');
    }

    return (
        <ListItem disablePadding>
            <ListItemButton sx={{ color: iconColor }}>
                <ListItemIcon sx={{color: iconColor}} onMouseOver={activeColor} onMouseLeave={nonActiveColor}>
                    {props.ICON}
                    <ListItemText primary={<Typography sx={{ fontFamily:'Rubik' }} >{props.text}</Typography>} sx={{ marginLeft: '25px'}} />
                </ListItemIcon>
            </ListItemButton>
        </ListItem>
    )
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{backgroundColor: '#353353', textDecoration: 'none'}}>
          <IconButton onClick={handleDrawerOpen}>
          <MenuIcon sx={{ color: '#FFD15C'}} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#353353',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose} sx={{ color: '#FFD15C'}}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
            <Box sx={{ marginTop: '20px'}}>
                
                <CustomListIcon ICON={<HomeIcon/>} text="Home"/>

                <CustomListIcon ICON={<AccountCircleIcon/>} text="About Me"/>

                <CustomListIcon ICON={<AssignmentIcon/>} text="Services"/>
                
                <CustomListIcon ICON={<WorkHistoryIcon/>} text="Experience"/>

                <CustomListIcon ICON={<LaptopIcon/>} text="Projects"/>

                <CustomListIcon ICON={<InboxIcon/>} text="Contact Me"/>

            </Box>
        </List>
      </Drawer>
    </Box>
  );
}