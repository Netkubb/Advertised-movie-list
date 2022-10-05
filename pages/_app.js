import '../styles/globals.css'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const theme = createTheme({
  typography:{
    fontFamily:"Inter",
    body2:{
      fontSize:"20px"
    },
    h4:{
      fontWeight:"700"
    },
  },
  palette:{
    text:{
      primary:"black"
    }
  }
});

function MyApp({ Component, pageProps }) {
  return (<>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
  </>)
}

export default MyApp
