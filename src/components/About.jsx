import React from 'react'
import { makeStyles, useTheme } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import history from "../assets/images/history.svg";
import Avatar from '@mui/material/Avatar';
import founder from "../assets/images/founder.jpg"
import yearbook from "../assets/images/yearbook.svg";
import puppy from "../assets/images/puppy.svg";
import useMediaQuery from '@mui/material/useMediaQuery';

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
  },
  avatar:{
     height:"25em !important" ,
     width:"25em !important"
  }

  
  }));
const About = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMd=useMediaQuery(theme.breakpoints.down("md"))

  return (
<Grid container direction="column">
<Grid item className={classes.rowContainer} style={{marginTop:"2em"}}>
    <Typography variant="h2">
About Us
    </Typography>

</Grid>
<Grid item container justifyContent="center" className={classes.rowContainer}>
    <Typography variant="h4"textAlign="center" className={classes.missionStatement}>
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, earum ullam, incidunt aliquam nostrum illo nihil est dolor laborum blanditiis mollitia rem ducimus, minus soluta eius fugiat sapiente illum quod.
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, earum ullam, incidunt aliquam nostrum illo nihil est dolor laborum blanditiis mollitia rem ducimus, minus soluta eius fugiat sapiente illum quod.
    </Typography>

</Grid>
<Grid item container justifyContent="space-around" className={classes.rowContainer} direction={matchesMd ? "column" : "row"} alignItems={matchesMd ? "center" : undefined} >
    <Grid item>
    <Grid item container direction="column" lg={6} style={{maxWidth:"35em"}}>
        <Grid item>
            <Typography variant="h4"  gutterBottom>
History
            </Typography>

        </Grid>
        <Grid item>
            <Typography variant="body1"  paragraph style={{fontWeight:700,fontStyle:"italic"}}>
            Lorem ipsum, dolor sit amet 
            </Typography>
            <Typography variant="body1"  paragraph textAlign="center" >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit            </Typography>
            <Typography variant="body1"  paragraph textAlign="center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid nam dolorum porro libero. Quae atque sapiente, amet vel, nemo temporibus molestias vitae quaerat odio fugit, distinctio consequatur similique tempora laboriosam?
            </Typography>
            <Typography variant="body1"  paragraph textAlign="center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam fugiat quo aliquid animi soluta. Officiis nihil et consequatur natus fugiat eaque distinctio. Nemo eius ratione sunt quae quo iusto magni!
            </Typography>
            <Typography variant="body1"  paragraph textAlign="center">
            Lorem ipsum dolor, sit amet consectetur
            </Typography>
          

        </Grid>

    </Grid>
    </Grid>
    <Grid item>
    <Grid item container  lg={6}>
<img src={history} alt="history" style={{maxHeight:"22em"}}/>
</Grid>
</Grid>
</Grid>
<Grid item container direction="column" alignItems="center" className={classes.rowContainer}>
<Grid item>
    <Typography variant="h4" gutterBottom>
Team
    </Typography>

</Grid>
<Grid item>
    <Typography variant="body1" paragraph alignItems="center">
Lorem ipsum ,dolor sit amet,amet consectetur
    </Typography>
    <Typography variant="body1" paragraph alignItems="center">
Lorem ipsum ,dolor sit amet,amet consectetur
    </Typography>

</Grid>

<Grid item >
    <Avatar alt="founder" src={founder} className={classes.avatar}/>
</Grid>
<Grid item container direction="row">
<Grid item containerlg={6}>
<Grid item>
    <img  src={yearbook} alt="yearbook page"/>
</Grid>
<Grid item>
  <Typography variant="caption">
page from yearbook
  </Typography>
</Grid>
</Grid>
<Grid item lg={6}  pt={15}>
  <Typography variant="body1" textAlign="center" paragraph>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non eum magnam itaque eaque cum. Doloremque eveniet tempora, vel, minus aspernatur ipsam vitae recusandae vero suscipit alias temporibus quam quas dicta?
  </Typography>
  <Typography variant="body1" textAlign="center" paragraph>
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci ea minus asperiores repellendus, deserunt eos dolores rerum dicta repudiandae dolore omnis, delectus temporibus tenetur minima blanditiis! Voluptate esse vitae neque?
</Typography>
</Grid>
<Grid item container direction="column"  lg={3}>
    <Grid item >
        <img src={puppy} alt="puppy"/>
    </Grid>
    <Grid item >
       <Typography variant="caption">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus delectus quibusdam praesentium ad voluptatum

       </Typography>
    </Grid>
</Grid>

</Grid>
</Grid >

</Grid>
  )
}

export default About