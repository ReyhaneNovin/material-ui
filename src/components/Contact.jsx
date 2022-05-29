import React,{useState} from 'react'
import {Link} from "react-router-dom"
import { makeStyles, useTheme } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import background from "../assets/images/background.jpg";
import phoneIcon from "../assets/images/phone.svg";
import emailIcon from "../assets/images/email.svg"
import airplane from "../assets/images/send.svg";
import useMediaQuery from '@mui/material/useMediaQuery';
import ButtonArrow from "../components/ui/ButtonArrow";

 const useStyles = makeStyles((theme) => ({
  background:{
        backgroundImage:`url(${background})`,
        backgroundPosition:"center",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        height:"60em",
     
    
      },estimateButton:{
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

    },
    lernButton: {
        borderRadius: "80px !important",
      },
  
    
    }));
const Contact = (props) => {
    const classes = useStyles();
    const theme = useTheme();

    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [phone,setPhone]=useState("")
    const [message,setMessage]=useState("")
    const matchesSM=useMediaQuery(theme.breakpoints.down("sm"))

  return (
  <Grid container direction="row">
      <Grid item container direction="column" justifyContent="center" lg={3}>
<Grid item>
    <Typography variant="h2"> 
    Contact Us
    </Typography>
    <Typography variant="body1" > 
    we are Wating
    </Typography>

</Grid>
<Grid item container>
<Grid item>
    <img src={phoneIcon} alt="phone" style={{marginRight:"0.5em"}}/>
</Grid>
<Grid item>
 <Typography variant="body1" style={{color:"theme.pallete.common.red",fontSize:"1rem"}} >(5555)5555-555</Typography>
</Grid>
</Grid>
<Grid item container>
<Grid item>
    <img src={emailIcon} alt="email" style={{marginRight:"0.5em",verticalAlign:"bottom"}}/>
</Grid>
<Grid item>
 <Typography variant="body1" style={{color:"theme.pallete.common.red" ,fontSize:"1rem"}}>reihane@gmail.com</Typography>
</Grid>
</Grid>
<Grid item container>
    <Grid item>
    <TextField
         id="name"
          label="Name"
          variant="standard" 
          value={name}
          onChange={(event)=> setName(event.target.value)}
        />
      
    </Grid>
    <Grid item>
    <TextField
         id="email"
          label="Email"
          variant="standard" 
          value={email}
          onChange={(event)=> setEmail(event.target.value)}
        />
    </Grid>
    <Grid item>
    <TextField
         id="phone"
          label="Phone"
          variant="standard" 
          value={phone}
          onChange={(event)=> setPhone(event.target.value)}
        />
    </Grid>
</Grid>
<Grid item>
<TextField id="message" multiline rows={10} label="Message" variant="standard" value={message} onChange={(event)=> setMessage(event.target.value)}/>
</Grid>
<Grid item>
    <Button variant="contained">send Message
    <img src={airplane} alt="airplane" />
    </Button>
</Grid>
      </Grid>
      <Grid item container className={classes.background} lg={9}alignItems="center" >
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

          </Grid>

  </Grid>
  )
}

export default Contact