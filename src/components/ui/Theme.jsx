import { createTheme } from "@mui/material/styles";
import { red} from "@mui/material/colors";

const arcRed = red[700] + "!important";
const arcOrange = "#FFBA60 !important";
const arcGrey = "#868686!important";

export default createTheme({
  palette: {
    common: {
      red: arcRed,
      orange: arcOrange,
      grey: arcGrey,
    },
    primary: {
      main: arcRed,
    },
    secondary: {
      main: arcOrange,
    },
  },

  typography: {
    tab: {
      fontFamily: "Raleway !important",
      textTransform: "none !important",
      fontWeight: 700,
      fontSize: "17px !important",
      color: "white !important",
    },
    estimate: {
      fontFamily: "pacifico !important",
      textTransform: "none !important",
      fontSize: "18px !important",
      color: "white !important",
    },
    h2: {
      fontFamily: "Raleway !important",
      fontWeight: " 700 ",
      fontSize: "28px !important",
      color: "blue",
      lineHeight: "1.5",
    },
    h3:{
      fontFamily: "pacifico !important",
      fontWeight: " 700 ",
      fontSize: "26px !important",
      color: "blue !important",
      lineHeight: "1.5",
    },
     h4: {
       fontFamily: "Raleway !important",
       fontWeight: " 700 ",
      fontSize: "23px !important",
       color: "blue !important",
   lineHeight: "1.5",
    },
    subtitle1:{
      fontSize: "18px !important",
      fontWeight: " 300 ",
      color:` ${arcGrey} !important` ,
    },
    subtitle2:{
      fontSize: "18px !important",
      fontWeight: " 300 ",
      color:"white" ,
    },
    body1:{
      fontSize: "20px !important",
      fontWeight: " 300 ",
    }
  },
});
