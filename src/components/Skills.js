import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';


export default function Skills() {

    const Styles = {
        root: {
            display: 'flex',
            width: '100vw',
            height: '50vh',
            marginTop: '-4%'
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

        const test = () => {    
            
            props.data.map((x,i) => {
                return(<Typography variant='body1' key={i}>{x}</Typography>);
            });
            
        }

        return (
            <Stack direction='column' spacing={2}>
                <Typography variant='h6' component='h6' sx={Styles.title} onClick={test}>{props.title}</Typography>
                {props.data.map(x => {
                    return <Typography variant='body1' component='p'>{x}</Typography>
                })}
            </Stack>
        )
    }


    return (
        <Box sx={Styles.root}>
            <Stack direction='row' spacing={'12rem'} sx={Styles.mainStack}>
                <Typography variant='h6' component='h6' sx={{ color: 'dodgerblue', fontWeight: 'bold'}}>SKILLS</Typography>
                <SkillRow title='LANGUAGES' data={['Javascript (ES6)','TypeScript','HTML', 'CSS', 'Python', 'SQL', 'MongoDB']}/>
                <SkillRow title='FRAMEWORKS' data={['React','React Native', 'Node', 'Express', 'Flask']}/>
                <SkillRow title='TOOLS' data={['Bash', 'Git/Github', 'Postman']}/>
            </Stack>
        </Box>
    )
}