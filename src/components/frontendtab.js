import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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
        <Grid item xs={6}>
            <Paper className={classes.paper}>item</Paper>
        </Grid>

        <Grid item xs={6}>
            <Paper className={classes.paper}>item</Paper>
        </Grid>
    </Grid>

    <Grid container spacing={3}>
        <Grid item xs={6}>
            <Paper className={classes.paper}>item</Paper>
        </Grid>

        <Grid item xs={6}>
            <Paper className={classes.paper}>item</Paper>
        </Grid>
    </Grid>
    </div>
  );
}



