import React from 'react'
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
 
import FooterAdornment from "../../assets/images/Footer Adornment.svg";

const useStyles=makeStyles(theme =>({
    footer:{
        background: 'linear-gradient(to right, #000000, #4286f4)',
        width:"100%",
        zIndex:"1302",
        position:"reletive"

    },
    adornment:{
        width:"25em",
        verticalAlign: "bottom",
        [theme.breakpoints.down("md")]:{
          width:"21em"
          },
          [theme.breakpoints.down("xs")]:{
            width:"15em"
            },
    },
    mainContainer:{
        position:"absolute"
    },
    link:{
       color:"white",
       fontFamily:"Arial",
       fontSize:"1em",
       fontWeight:"bold",
    //   justify:"center !important"

    }
}))

const Footer = () => {
    const classes=useStyles()
  return (
   <footer className={classes.footer}>
       <Grid container  className={classes.mainContainer} >
       <Grid item  >
       <Grid container direction="column" >
       <Grid item className={classes.link} >
           Home
       </Grid>
           </Grid>
           </Grid>
           <Grid item  >
           <Grid container direction="column" >
           <Grid item className={classes.link} >
               Services
           </Grid>
           <Grid item className={classes.link} >
           Custom Software Development
           </Grid>
           <Grid item className={classes.link} >
            Mobile App Development
           </Grid>
           <Grid item className={classes.link} >
              Website Development
           </Grid>
           </Grid>

           </Grid>
           <Grid item  >
       <Grid container direction="column" >
       <Grid item className={classes.link} >
          Revelotion
       </Grid>
           </Grid>
           </Grid>
           <Grid item  >
       <Grid container direction="column" >
       <Grid item className={classes.link} >
   About Us
       </Grid>
       <Grid item className={classes.link} >
   History
       </Grid>
       <Grid item className={classes.link} >
   Team
       </Grid>
           </Grid>
           </Grid>
           <Grid item  >
       <Grid container direction="column" >
       <Grid item className={classes.link} >
          Contact Us
       </Grid>
           </Grid>
           </Grid>
     
       </Grid>
       <img alt='black decorative slash' src={FooterAdornment} className={classes.adornment}/>
       </footer>
  )
}

export default Footer