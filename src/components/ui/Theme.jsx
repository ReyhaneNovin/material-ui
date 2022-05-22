import {createTheme } from '@mui/material/styles';
 
const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";


export default createTheme({
  palette: {
    common: {
      blue: arcBlue,
      orange: arcOrange,
  
    },
    primary: {
      main: arcBlue
    },
    secondary: {
      main: arcOrange
    }
  },

     typography:{
         tab:{
            fontFamily:"Raleway !important",
            textTransform:"none !important",
            fontWeight:700 ,
            fontSize:"17px !important",
            color:"white !important"
        },
        estimate:{
            fontFamily:"pacifico !important",
            textTransform:"none !important",
            fontSize:"18px !important",
            color:"white !important"
        }
     }
 })