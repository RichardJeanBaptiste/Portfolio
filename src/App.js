import './App.css';
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Intro from './components/Intro';
import Background from './components/Background';
import Skills from './components/Skills';
import Footer from './components/Footer';



function App() {

  const theme = createTheme({
    typography: {
      allVariants: {
        fontFamily: 'Grape Nuts',
      }
    },
    link: {
      allVariants: {
        fontFamily: 'Grape Nuts',
      }
    }
  })

  
 
  return (
    <ThemeProvider theme={theme}>
        <Intro/>
        <Background/>
        <Skills/>
        <Footer/>
    </ThemeProvider>
    
  )
}

export default App;

