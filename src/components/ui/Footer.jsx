import React from 'react'
import {Link} from "react-router-dom"
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Hidden from '@mui/material/Hidden';
 
import FooterAdornment from "../../assets/images/Footer Adornment.svg";
import facebook from "../../assets/images/facebook.svg";
import twitter from "../../assets/images/twitter.svg";
import instagram from "../../assets/images/instagram.svg"

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
       textDecoration:"none",
      
    

    },
    gridItem:{
        margin:"3em !important",
    },
    icon:{
        height:"50px  ",
        width:"50px ",
        [theme.breakpoints.down("xs")]:{
            height:"25px !important",
            width:"25px !important"
            },
    },
    socialContainer:{
        position:"absolute",
        marginTop:"-90px",
        right:"1.5em",
        [theme.breakpoints.down("xs")]:{
           right:"0.6em"
            },

    }
}))

const Footer = (props) => {
    const classes=useStyles()
  return (
   <footer className={classes.footer}>
       <Hidden mdDown>
       <Grid container justifyContent="center"  className={classes.mainContainer} >
       <Grid item className={classes.gridItem} >
       <Grid container direction="column" spacing={2}>
       <Grid item component={Link} to="/" onClick={()=>props.setValue(0)} className={classes.link} >
           Home
       </Grid>
           </Grid>
           </Grid>
           <Grid item className={classes.gridItem}  >
           <Grid container direction="column"spacing={2} >
           <Grid item component={Link} to="/services" className={classes.link}onClick={()=>{props.setValue(1);props.setSelectedIndex(0)}} >
               Services
           </Grid>
           <Grid item component={Link} to="/customsoftware" className={classes.link} onClick={()=>{props.setValue(1);props.setSelectedIndex(1)}}>
           Custom Software Development
           </Grid>
           <Grid item className={classes.link} component={Link} to="/mobileapps" onClick={()=>{props.setValue(1);props.setSelectedIndex(2)}}>
            Mobile App Development
           </Grid>
           <Grid item className={classes.link}component={Link} to="/websites"onClick={()=>{props.setValue(1);props.setSelectedIndex(3)}} >
              Website Development
           </Grid>
           </Grid>

           </Grid>
           <Grid item className={classes.gridItem}  >
       <Grid container direction="column"spacing={2} >
       <Grid item component={Link} to="/revolution" className={classes.link}onClick={()=>props.setValue(2)} >
          Revelotion
       </Grid>
       <Grid item component={Link} to="/revolution" className={classes.link} onClick={()=>props.setValue(2)}>
        Vision
       </Grid>
       <Grid item component={Link} to="/revolution" className={classes.link} onClick={()=>props.setValue(2)}>
       Technology
       </Grid>
       <Grid item component={Link} to="/revolution" className={classes.link}onClick={()=>props.setValue(2)} >
          Process
       </Grid>
           </Grid>
           </Grid>
           <Grid item  className={classes.gridItem} >
       <Grid container direction="column"spacing={2} >
       <Grid item component={Link} to="/about" className={classes.link}onClick={()=>props.setValue(3)} >
   About Us
       </Grid>
       <Grid item className={classes.link} component={Link} to="/about"onClick={()=>props.setValue(3)} >
   History
       </Grid>
       <Grid item className={classes.link} component={Link} to="/about"onClick={()=>props.setValue(3)} >
   Team
       </Grid>
           </Grid>
           </Grid>
           <Grid item className={classes.gridItem}  >
       <Grid container direction="column" spacing={2} >
       <Grid item component={Link} to="/contact" className={classes.link}onClick={()=>props.setValue(4)}  >
          Contact Us
       </Grid>
           </Grid>
           </Grid>
     
       </Grid>
       </Hidden>
       <img alt='black decorative slash' src={FooterAdornment} className={classes.adornment}/>
       <Grid  container justifyContent= "flex-end"className={classes.socialContainer}>
           <Grid item component={"a"} href="http://www.facebook.com" rel="noopener noreferrer" target="_blank">
               <img alt="facebook logo" src={facebook} className={classes.icon}/>
           </Grid>
           <Grid item component={"a"} href="http://www.twitter.com" rel="noopener noreferrer" target="_blank">
               <img alt="twitter logo" src={twitter} className={classes.icon}/>
           </Grid>
           <Grid item component={"a"} href="http://www.instagram.com" rel="noopener noreferrer" target="_blank">
               <img alt="instagram logo" src={instagram} className={classes.icon}/>
           </Grid>

       </Grid>
       </footer>
  )
} 

export default Footer