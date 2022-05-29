import React from 'react'
import { makeStyles, useTheme } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
const useStyles = makeStyles((theme) => ({
  missionStatement:{
      fontStyle:"italic",
      fontWeight: " 300 ",
      fontSize: "23px !important",
      maxWidth:"50em",
      lineHeight:"1px"
  },
  rowContainer:{
      paddingLeft:"5em",
      paddingRight:"5em",
      [theme.breakpoints.down("sm")]:{
        paddingLeft:"1.5em !important",
        paddingRight:"1.5em !important"
        },
  }

  
  }));
const About = () => {
    const classes = useStyles();
    const theme = useTheme();
  return (
<Grid container direction="column">
<Grid item className={classes.rowContainer} style={{marginTop:"2em"}}>
    <Typography variant="h2">
About Us
    </Typography>

</Grid>
<Grid item container justifyContent="center" className={classes.rowContainer}>
    <Typography variant="h4" alignItems="center" className={classes.missionStatement}>
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, earum ullam, incidunt aliquam nostrum illo nihil est dolor laborum blanditiis mollitia rem ducimus, minus soluta eius fugiat sapiente illum quod.
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, earum ullam, incidunt aliquam nostrum illo nihil est dolor laborum blanditiis mollitia rem ducimus, minus soluta eius fugiat sapiente illum quod.
    </Typography>

</Grid>
<Grid item container justifyContent="center" className={classes.rowContainer}>
    <Grid item container direction="column">
        <Grid item>
            <Typography variant="h4"  gutterBottom>
History
            </Typography>

        </Grid>
        <Grid item>
            <Typography variant="body1"  paragraph style={{fontWeight:700,fontStyle:"italic"}}>
History
            </Typography>

        </Grid>

    </Grid>

</Grid>
</Grid>
  )
}

export default About