/**
 * Center Focus onEnter
 * 
 * Refacftor frontend tab and backend tab
 * 
 */
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
import DesignIcon from '@material-ui/icons/FormatPaint';
import ComputerIcon from '@material-ui/icons/ComputerRounded';
import Intro from './components/Intro';
import ProjectItem from './components/ProjectItem';
import Data from './components/itemData';


const drawerWidth = 170;

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
    justifyContent: 'center',
    alignItems: 'center',
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
    justifyContent: 'center',
    alignItems: 'center',
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


          <ListItem onClick={() => document.getElementById('frontend').scrollIntoView()}>
            <ListItemIcon><DesignIcon/></ListItemIcon>
            <ListItemText>Front End Projects</ListItemText>
          </ListItem>

          <ListItem onClick={() => document.getElementById('backend').scrollIntoView()}>
            <ListItemIcon><ComputerIcon/></ListItemIcon>
            <ListItemText>Back End Projects</ListItemText>
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

        style={{width: '50%'}}
      >
        <div className={classes.drawerHeader} />

        {/************************* Main Content ******************/}
          
            <Intro/>
            <Typography variant="h5" component="h5" style={{ display:'flex',justifyContent:'center',alignItems:'center'}}>abcdefghijklmnop</Typography>

            <Divider style={{marginTop: '12%', marginBottom:'3%'}}/> 
            <Typography variant="h5" component="h5" style={{display:'flex',alignItems:'center', justifyContent:'center'}}>About Me</Typography>

            <Divider style={{marginTop: '12%', marginBottom:'3%'}}/>   

            <div id="frontend"></div>
            <Typography variant="h5" component="h5" style={{display:'flex',alignItems:'center', justifyContent:'center'}}>Here's some examples of my Frontend work</Typography>
              <div style={{ flexGrow: 1, marginTop: '3%', display:'flex', justifyContent:'center', alignItems:'center'}}>
              
                <Grid container spacing={3}>
                    <ProjectItem title="abc" desc="def" itemData={Data}/>
                    <ProjectItem title="abc" desc="def" itemData={Data}/>
                    <ProjectItem title="abc" desc="def" itemData={Data}/>
                </Grid>
              </div>

            <Divider style={{marginTop: '12%', marginBottom:'3%'}}/>

            <div id="backend"></div>
            <Typography variant="h5" component="h5" style={{display:'flex',alignItems:'center', justifyContent:'center'}}>Here's some examples of my Backend work</Typography>
            <div style={{ flexGrow: 1, marginTop: '3%', display:'flex', justifyContent:'center', alignItems:'center'}}>
              
              <Grid container spacing={3}> 
                  <ProjectItem title="abc" desc="def" itemData={Data}/>
                  <ProjectItem title="abc" desc="def" itemData={Data}/>
                  <ProjectItem title="abc" desc="def" itemData={Data}/>
              </Grid>
            </div>

            <Divider style={{marginTop: '12%', marginBottom:'3%'}}/>
            <Typography variant="h5" component="h5" style={{display:'flex',alignItems:'center', justifyContent:'center'}}>Contact Me</Typography>

            
            
      </main>
        
        
    </div>
    </div>
  );
}

export default App;

