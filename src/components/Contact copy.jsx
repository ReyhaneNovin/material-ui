import React,{useState} from 'react'
import {Link} from "react-router-dom"
import { makeStyles, useTheme } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import background from "../assets/images/background.jpg";
import phone from "../assets/images/phone.svg";
import email from "../assets/images/email.svg"

 const useStyles = makeStyles((theme) => ({
  background:{
        backgroundImage:`url(${background})`,
        backgroundPosition:"center",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        height:"60em",
     
    
      },
  
    
    }));
const Contact = () => {
    const classes = useStyles();
    const theme = useTheme();

    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [phone,setPhone]=useState("")
    const [message,setMessage]=useState("")
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
    <img src={phone} alt="phone" style={{marginRight:"0.5em"}}/>
</Grid>
<Grid item>
 <Typography variant="body1" style={{color:"theme.pallete.common.red",fontSize:"1rem"}} >(5555)5555-555</Typography>
</Grid>
</Grid>
<Grid item container>
<Grid item>
    
    <img src={email} alt="email" style={{marginRight:"0.5em",verticalAlign:"bottom"}}/>
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
<TextField id="message" label="Message" variant="standard" value={message} onChange={(event)=> setMessage(event.target.value)}/>
</Grid>
      </Grid>
      <Grid item container className={classes.background} lg={9}>
          

          </Grid>

  </Grid>
  )
}

export default Contact