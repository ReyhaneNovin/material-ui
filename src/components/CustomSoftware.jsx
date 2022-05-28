import React from 'react'
import Lottie from "react-lottie";
import {Link} from "react-router-dom"
import { makeStyles, useTheme } from "@mui/styles";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import useMediaQuery from '@mui/material/useMediaQuery';
import backArrow from "../assets/images/backArrow.svg"
import forwardArrow from "../assets/images/forwardArrow.svg"

const useStyles = makeStyles((theme) => ({
   
  

  
  }));

const CustomSoftware = () => {
    const classes = useStyles();
  const theme = useTheme();
  const matchesSM=useMediaQuery(theme.breakpoints.down("sm"))

  return (
  <Grid container direction="column">
<Grid item container direction="row">
    <Grid item>
<IconButton>
    <img src={backArrow} alt="Back to service page"/>
</IconButton>
    </Grid>
    <Grid item container direction="column">
<Grid item>
    <Typography variant="h2" >
Custom SoftWare development
    </Typography>
</Grid>
<Grid item>
    <Typography variant="body1" paragraph >
Lorem ipsum dolor, 
sit amet consectetur adipisicing elit. Molestiae dolorem omnis veritatis 
    </Typography>

    <Typography variant="body1">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, ex. Sint recusandae officiis magnam, ea sit, eveniet non ullam iusto voluptas, totam esse reiciendis earum sed modi delectus doloremque natus.
    </Typography>

    <Typography variant="body1">
    Lorem ipsum dolor, 
sit amet consectetur adipisicing elit. Molestiae dolorem omnis veritatis
</Typography>

<Typography variant="body1">
Lorem ipsum dolor, 
sit amet consectetur adipisicing elit
</Typography>
</Grid>
    </Grid>
<Grid item>
<IconButton>
    <img src={forwardArrow} alt="forward to ios/android App development page"/>
</IconButton>
</Grid>
</Grid>
  </Grid>
  )
}

export default CustomSoftware