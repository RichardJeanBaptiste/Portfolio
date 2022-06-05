import './App.css';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
// import CssBaseline from '@mui/material/CssBaseline';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import WorkIcon from '@mui/icons-material/Work';
import ChatIcon from '@mui/icons-material/Chat';

const drawerWidth = 220;

/**
 * TODO
 *  Add Icons
 *  Add Font
 *  style drawer 
 * 
 *  #c6a459
 */


function App() {

  const Styles = {
    root: {
    },
    listItemTextStyle: {
      marginLeft: '-15px',
      color: 'whitesmoke',
    }
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row'}}>
      <Drawer 
        sx={{ width: drawerWidth }}
        variant='permanent'
        anchor='left'    
      >
        <Box 
          sx={{ 
            backgroundColor: '#353353',
            height: '100vh',
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}>
          <List>

            <Box sx={{ display:'flex', flexDirection: 'column',justifyContent:'center',alignItems:'center',width: '22em'}}>
                <Box sx={{ marginLeft: '-2em'}}>
                    <ListItem button key='Home'>
                        <ListItemIcon>
                          <HomeIcon sx={{ color: '#c6a459'}}/>
                        </ListItemIcon>

                        <ListItemText primary='Home' sx={Styles.listItemTextStyle}/>
                    </ListItem>

                    <ListItem button key='About'>
                        <ListItemIcon>
                          <PermIdentityIcon sx={{ color: '#c6a459'}}/>
                        </ListItemIcon>

                        <ListItemText primary='About' sx={Styles.listItemTextStyle}/>
                    </ListItem>

                    <ListItem button key='Resume'>
                        <ListItemIcon>
                          <WorkIcon sx={{ color: '#c6a459'}}/>
                        </ListItemIcon>

                        <ListItemText primary='Resume' sx={Styles.listItemTextStyle}/>
                    </ListItem>

                    <ListItem button key='Contact'>
                        <ListItemIcon>
                          <ChatIcon sx={{ color: '#c6a459'}}/>
                        </ListItemIcon>

                        <ListItemText primary='Contact' sx={Styles.listItemTextStyle}/>
                    </ListItem>
                </Box>
                
            </Box>

          </List>
        </Box>
      </Drawer>
      <Box>
        EFGH
      </Box>
        
    </Box>
  )
}

export default App;
