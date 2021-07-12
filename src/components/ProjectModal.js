import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import SingleImageList from './SingleImageList';
//import comingsoonimg from '../static/images/avatar/coming-soon.jpg';
//import comingsoonimg2 from '../static/images/avatar/comingsoon2.jpg';
//import comingsoonimg3 from '../static/images/avatar/comingsoon3.jpg';
//import comingsoonimg4 from '../static/images/avatar/comingsoon4.jpg';
//import comingsoonimg5 from '../static/images/avatar/comingsoon5.jpg';
//import magicloadingimg from '../static/images/avatar/magicloading.jpg';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  paperOuter: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  outerImgStyle:{
    alignItems: 'center',
    justifyContent: 'center',
    width:'85%',
    height:'85%'
  },
}));


export default function ProjectModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
        {/** Closed Modal View */}
            <Paper className={classes.paperOuter} onClick={handleOpen}>
                <SingleImageList itemData={props.itemData}/>
                <Typography variant="h5" component="h5" style={{marginTop: '3%'}}>Project Title</Typography>
            </Paper>
        
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
          {/** Open Modal View */}
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">{props.title}</h2>
            <p id="transition-modal-description">{props.desc}</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
