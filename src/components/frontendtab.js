import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ProjectModal from './ProjectModal';
import Data from './itemData';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '3%',
  },
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

export default function FrontEndTab() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Grid container spacing={3}>
        {/**  Data Flow - frontendtab -> ProjectModal -> SingleImageList */}
        <Grid item xs={6}>
            <ProjectModal title="abc" desc="def" itemData={Data}/>
        </Grid>

        <Grid item xs={6}>
            <ProjectModal title="abc" desc="def" itemData={Data}/>
        </Grid>
    </Grid>

    <Grid container spacing={3}>
        <Grid item xs={6}>
            <ProjectModal title="abc" desc="def" itemData={Data}/>
        </Grid>

        <Grid item xs={6}>
            <ProjectModal title="abc" desc="def" itemData={Data}/>
        </Grid>
    </Grid>
    </div>
  );
}



