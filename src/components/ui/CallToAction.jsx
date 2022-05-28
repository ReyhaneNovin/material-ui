import React from 'react'
import { makeStyles, useTheme } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import ButtonArrow from "../ui/ButtonArrow";
import background from "../../assets/images/background.jpg"
import mobileBackground from "../../assets/images/mobileBackground.jpg"
import useMediaQuery from '@mui/material/useMediaQuery';
import {Link} from "react-router-dom"

const useStyles = makeStyles((theme) => ({
    lernButton: {
        borderRadius: "80px !important",
      },
      background:{
        backgroundImage:`url(${background})`,
        backgroundPosition:"center",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        backgroundAttachment:"fixed",
        height:"60em",
        width:"100%",
        [theme.breakpoints.down("md")]: {
           backgroundImage:`url(${mobileBackground})`,
           backgroundAttachment:"inherit"
          },
      
      },
      estimateButton:{
          ...theme.typography.estimate,
          borderRadius:"50px!important",
          height:"60px!important",
          width:"160px!important",
          backgroundColor:theme.palette.common.red,
          marginTop:"10px !important",
          fontSize:"19px!important",
          marginRight:"5em !important",
          marginLeft:"2em !important",
          [theme.breakpoints.down("sm")]: {
marginLeft:"0 !important",
marginRight:"0 !important",
           },


      }
  }));

const CallToAction = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM=useMediaQuery(theme.breakpoints.down("sm"))

  return (
 <Grid container  alignItems="center" justifyContent={matchesSM ? "center" : "space-between"} className={classes.background} direction={matchesSM ? "column" : "row"} >
     <Grid item style={{marginLeft:matchesSM ? 0 : "5em", textAlign:matchesSM ? "center" : "inherit"}}>
         <Grid container direction="column">
             <Grid item>
                 <Typography variant="h2" >
                     Lorem ipsum dolor <br/> adipisicing elit 
                 </Typography>
                 <Typography variant="subtitle2">
                 Lorem ipsum dolor sit, amet consectetur
                 </Typography>
                 <Grid container item justifyContent={matchesSM ? "center" :undefined }>


                 <Button variant="outlined" className={classes.lernButton} style={{  border:"1px solid red" }}component={Link} to="/revolution"    onClick={()=>props.setValue(2)}>
                    {" "}
                    <span style={{ marginRight: "10px" }}>Learn More</span>
                    <ButtonArrow
                      width={15}
                      height={theme.palette.common.red}
                    />
                  </Button>
                  </Grid>

             </Grid>
         </Grid>

     </Grid>
     <Grid item >
        <Button variant="contained" className={classes.estimateButton}>
            Free Estimate
            </Button> 
     </Grid>

 </Grid>
  )
}

export default CallToAction