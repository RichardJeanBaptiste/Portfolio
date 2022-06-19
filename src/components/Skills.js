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
            marginTop: {xs: '17rem', lg: '-4%'}
        },
        mainStack: {
            position: 'relative',
            margin: {lg:'0px auto'},
            flexWrap: 'wrap',
            //marginLeft: {xs: '6%'},
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: {xs: '8%', lg:'3%'},
        },
        title: {
            fontWeight: 'bold',
            fontSize: '1rem'
        },
        skillsTitle: {
            color: 'dodgerblue',
            fontSize: '1.9rem',
            fontWeight: 'bold',
            marginLeft: 'auto',
            marginRight: 'auto',
        },
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
            <Box sx={{ display:'flex', flexDirection: 'column', width:'100vw'}}>
                <Typography variant='h6' component='h6' sx={Styles.skillsTitle}>Skills</Typography>
                <Stack direction='row' spacing={{ xs: '2rem', lg:'12rem'}} sx={Styles.mainStack}>
                    <SkillRow title='LANGUAGES' data={['Javascript (ES6)','TypeScript','HTML', 'CSS', 'Python', 'SQL', 'MongoDB']}/>
                    <SkillRow title='FRAMEWORKS' data={['React','React Native', 'Node', 'Express', 'Flask']}/>
                    <SkillRow title='TOOLS' data={['Bash', 'Git/Github', 'Postman']}/>
                </Stack>
            </Box>
        </Box>
    )
}

/**
 * <Stack direction={{ xs: 'row', lg: 'row'}} spacing={{ xs: '2rem', lg: '12rem'}} sx={Styles.mainStack}>
                <SkillRow title='LANGUAGES' data={['Javascript (ES6)','TypeScript','HTML', 'CSS', 'Python', 'SQL', 'MongoDB']}/>
                <SkillRow title='FRAMEWORKS' data={['React','React Native', 'Node', 'Express', 'Flask']}/>
                <SkillRow title='TOOLS' data={['Bash', 'Git/Github', 'Postman']}/>
            </Stack>
 */