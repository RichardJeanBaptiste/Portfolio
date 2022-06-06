import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typed from 'react-typed';
import maleboy from '../assets/male_boy.png';

function Title() {

    const Styles = {
        root: {
            
        },
        avatarStyle: {
            width: 112,
            height: 112,
            position: 'fixed',
            top: '0%',
        },
        typedStyle: {
            marginLeft: '-50px',
            color: 'whitesmoke',
            fontSize: '26px',
        }
    }


    return (
        <Box sx={Styles.root}>
            <Avatar alt="Richard Jean-Baptiste" src={maleboy} sx={Styles.avatarStyle}/>
            <Box>
            <Typed
                style={Styles.typedStyle}
                strings={['Software Developer','Front-End Delevoper', 'Backend Developer']}
                typeSpeed={40}
                backSpeed={50}
                loop
            />
            </Box>
            
        </Box>
    )
}

export default Title;