import React from 'react'
import {Link} from "react-router-dom"
import { makeStyles, useTheme } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import ButtonArrow from "../components/ui/ButtonArrow";


import CustomSoftwareIcon from "../assets/images/CustomSoftwareIcon.svg";
import mobileAppsIcon from "../assets/images/mobileIcon.svg";
import websiteIcon from "../assets/images/websiteIcon.svg";

const useStyles = makeStyles((theme) => ({
    specialText:{
        fontFamily: "Pacifico !important",
        color:theme.palette.common.red
      },
      icon:{
        marginLeft: "2em !important",
        [theme.breakpoints.down("xs")]: {
          marginLeft: "0 !important",
        },
    
      },
      servicesContainer:{
        marginTop:"10em ",
        [theme.breakpoints.down("sm")]: {
          padding: "25 !important",
        },
    
      },
      lernButton: {
        borderRadius: "80px !important",
      },

  

   
 
 
 
  }));

const Services = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM=useMediaQuery(theme.breakpoints.down("sm"))

  return (
<Grid container direction="column">
    <Grid item>
<Typography variant="h2" align={matchesSM ? "center" : undefined} gutterBottom style={{marginLeft:matchesSM ? "0" : "5em" , marginTop:matchesSM ? "1em" :"2em" }}>Services</Typography>
    </Grid>
<Grid item>
          {" "}
          {/*-----Ios/Android Block----*/}
          <Grid container direction="row" justifyContent={matchesSM ? "center" :"flex-end"} className={classes.servicesContainer} style={{marginTop: matchesSM ? "1em" : "5em"}}>
            <Grid item style={{ textAlign:matchesSM ? "center" :undefined,width :matchesSM ? undefined :"35em"}}>
              <Typography variant="h4">Ios/Android App Development </Typography>
              <Typography variant="subtitle1">
            Extend Functionality.  Compelete digutal.  Compelete digutal
              </Typography>
              <Typography variant="subtitle1">
               entegratde your web
              </Typography>
              <Button
              component={Link} to="/mobileapps"
                variant="outlined"
                color="error"
                className={classes.lernButton}
                onClick={()=>{props.setValue(1);props.setSelectedIndex(2)}}

              >
                Learn more{" "}
                <ButtonArrow
                  width={20}
                  height={20}
                  fill={theme.palette.common.red}
                />
              </Button>
            </Grid>
            <Grid item style={{marginRight:matchesSM ? 0 :"5em" }}>
              <img alt="mobile Apps Icon" src={mobileAppsIcon} className={classes.icon}width="250em" />
            </Grid>
          </Grid>
        </Grid>
<Grid item>
          {" "}
          {/*-----CustomSoftware  Block----*/}
          <Grid container direction="row" justifyContent={matchesSM ? "center" :undefined } className={classes.servicesContainer} >
            <Grid item style={{marginLeft:matchesSM ? 0 :"5em" , textAlign:matchesSM ? "center" :undefined}}>
              <Typography variant="h4">Custom Software Development </Typography>
              <Typography variant="subtitle1">
                Save Energy,Save Time, Save Money{" "}
              </Typography>
              <Typography variant="subtitle1">
                Compelete digutal<span className={classes.specialText}>celeberation</span>
              </Typography>
              <Button component={Link} to="/customsoftware"
                variant="outlined"
                color="error"
                className={classes.lernButton}
                onClick={()=>{props.setValue(1);props.setSelectedIndex(1)}}

              >
                Learn more{" "}
                <ButtonArrow
                  width={20}
                  height={20}
                  fill={theme.palette.common.red}
                />
              </Button>
            </Grid>
            <Grid item>
              <img alt="Custom Software Icon" src={CustomSoftwareIcon} className={classes.icon} />
            </Grid>
          </Grid>
        </Grid>
   
        <Grid item>
          {" "}
          {/*-----Websites  Block----*/}
          <Grid container direction="row" justifyContent={matchesSM ? "center" :"flex-end" } className={classes.servicesContainer}style={{marginBottom:"10em"}}>
            <Grid item style={{ textAlign:matchesSM ? "center" :undefined ,width :matchesSM ? undefined :"35em"}}>
              <Typography variant="h4">Website Development </Typography>
              <Typography variant="subtitle1">
                Save Energy,Save Time, Save Money{" "}
              </Typography>
              <Typography variant="subtitle1">
                Compelete digutal<span className={classes.specialText}>celeberation</span>
              </Typography>
              <Button
              component={Link} to="/websites"
                variant="outlined"
                color="error"
                className={classes.lernButton}
                onClick={()=>{props.setValue(1);props.setSelectedIndex(3)}}
              >
                Learn more{" "}
                <ButtonArrow
                  width={20}
                  height={20}
                  fill={theme.palette.common.red}
                />
              </Button>
            </Grid>
            <Grid item style={{marginRight:matchesSM ? 0 :"5em" }}>
              <img alt="website Icon" src={websiteIcon} className={classes.icon}
              width="250em" />
            </Grid>
          </Grid>
        </Grid>
</Grid>
  )
}

export default Services