import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';


export default function Skills() {

    const Styles = {
        root: {
            width: '100vw',
            height: '100vh',
            marginTop: '4%',
        },
        skillsTitle: {
            color: 'dodgerblue',
            fontSize: { xs:'2.5rem', lg: '46px'},
        },
        mainStack: {
           marginTop: '3%',
        }
    }

    const SkillRow = (props) => {

        const Styles = {
            root: {
                marginTop: '2%'
            },
            titleStyle: {
                fontSize: { lg: '1.75rem'},
                textDecoration:'underline',
                color: '#511730',
                fontWeight: 'bold',
            },
            bodyStyle: {
                fontSize: { xs:'1.4rem', lg: '1.5rem'},
                fontWeight: 700,
            }
        }

        const test = () => {    
            
            props.data.map((x,i) => {
                return(<Typography variant='body1' key={i}>{x}</Typography>);
            });
            
        }

        return (
            <Stack direction='column' spacing={2}>
                <Typography variant='h6' component='h6'  onClick={test} sx={Styles.titleStyle}>{props.title}</Typography>
                {props.data.map(x => {
                    return <Typography variant='body1' component='p' sx={Styles.bodyStyle}>{x}</Typography>
                })}
            </Stack>
        )
    }

    return (
        <Box sx={Styles.root}>
            <Typography variant='h6' component='h6' align='center' sx={Styles.skillsTitle}>Skills</Typography>
            <Box sx={{ display: 'flex', width: '100vw', height:'60vh', justifyContent: 'center'}}>
                <Stack direction='row' spacing={{ xs: '1rem', lg:'13rem'}} sx={Styles.mainStack}>
                    <SkillRow title='LANGUAGES' data={['Javascript (ES6)','TypeScript','HTML', 'CSS', 'Python', 'SQL', 'MongoDB']}/>
                    <SkillRow title='FRAMEWORKS' data={['React','React Native', 'Node', 'Express', 'Flask']}/>
                    <SkillRow title='TOOLS' data={['Bash', 'Git/Github', 'Postman']}/>
                </Stack>
            </Box>
        </Box>
    )
    
}

