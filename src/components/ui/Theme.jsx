import {createTheme } from '@mui/material/styles';
import {red} from '@mui/material/colors'
 
const arcBlue = red[700] + "!important";
const arcOrange = "#FFBA60 !important";


export default createTheme({
  palette: {
    common: {
      blue: arcBlue ,
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