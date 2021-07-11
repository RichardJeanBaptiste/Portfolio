import './App.css';
import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import AboutIcon from '@material-ui/icons/Person';
import ProjectIcon from '@material-ui/icons/Book';
import Intro from './components/Intro';
import FrontEndTab from './components/frontendtab';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: 'white',
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  headerText:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TopSpacing:{
    marginTop: '7%',
  },
}));



function App() {

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  return (
    <div className="App">
        <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="black"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
         
          <ListItem>
            <ListItemIcon><AboutIcon/></ListItemIcon>
            <ListItemText>About Me</ListItemText>
          </ListItem>


          <ListItem>
            <ListItemIcon><ProjectIcon/></ListItemIcon>
            <ListItemText>Projects</ListItemText>
          </ListItem>

          <ListItem>
            <ListItemIcon><RssFeedIcon/></ListItemIcon>
            <ListItemText>Blog</ListItemText>
          </ListItem>

          <ListItem>
            <ListItemIcon><MailIcon/></ListItemIcon>
            <ListItemText>Contact Me</ListItemText>
          </ListItem>

        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        {/*********************** Main Content *********************/}

            <div className={classes.TopSpacing}><Intro/></div>
      
            <br></br>
            <div className={classes.headerText}> 
                <Typography variant="h5" component="h5">
                    [Transitional Text]
                </Typography>
            </div>

            <Divider className={classes.TopSpacing}/>

            <Grid container spacing={2}>

              <Grid item xs={6}>
                <FrontEndTab/>
              </Grid>

              <Grid item xs={4}>
                  <Typography variant="h5" component="h5">
                      [Enter Text Here]
                  </Typography>
              </Grid>
              
            </Grid>
            

            
            
        {/*********************** Main Content *********************/}
      </main>
    </div>
    </div>
  );
}

export default App;
