import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ProjectModal from './ProjectModal';

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    textStyling: {
      textAlign: 'right',
    },
    gridStyling: {
       position: 'fixed',
    }
  }));


export default function ProjectItem(props){


    return (
        <Grid item xs={4}>
            <ProjectModal 
                title={props.title} 
                desc={props.desc}
                itemData={props.itemData}
            />
        </Grid>
    )
    
}