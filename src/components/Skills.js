import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';


export default function Skills() {

    const Styles = {
        root: {
            display: 'flex',
            width: '100vw',
            height: '50vh',
            marginTop: '2%'
        },
        mainStack: {
            position: 'relative',
            margin: '0px auto',
        },
        title: {
            fontWeight: 'bold'
        }
    }

    const SkillRow = (props) => {
        return (
            <Stack direction='column' spacing={2}>
                <Typography variant='h6' component='h6' sx={Styles.title}>{props.title}</Typography>
            </Stack>
        )
    }


    return (
        <Box sx={Styles.root}>
            <Stack direction='row' spacing={'12rem'} sx={Styles.mainStack}>
                <Typography variant='h6' component='h6' sx={{ color: 'dodgerblue', fontWeight: 'bold'}}>SKILLS</Typography>
                <SkillRow title='LANGUAGES'/>
                <SkillRow title='FRAMEWORKS'/>
                <SkillRow title='TOOLS'/>
            </Stack>
        </Box>
    )
}