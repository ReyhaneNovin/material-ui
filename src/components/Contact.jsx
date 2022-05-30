import React,{useState} from 'react'
import {Link} from "react-router-dom"
import { makeStyles, useTheme } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import background from "../assets/images/background.jpg";
import mobileBackground from "../assets/images/mobileBackground.jpg"
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
        paddingBottom:"10em important",
        [theme.breakpoints.down("md")]: {
          backgroundImage:`url(${mobileBackground})`,
                   },
          
     
    
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
        [theme.breakpoints.down("md")]: {
marginLeft:"0 !important",
marginRight:"0 !important",
         },

    },
    lernButton: {
        borderRadius: "80px !important",
      },
      message:{
        border:`2px solid ${theme.palette.common.red}`,
        marginTop:"5em !important",
        marginBottom:"2em!important ",
        borderRadius:"0.75em !important"
      },
      sendButton:{
        ...theme.typography.estimate,
        borderRadius:"0.75em !important",
        "&:hover":{
          backgroundColor:theme.palette.secondary.light
        }
      }
  
    
    }));
const Contact = (props) => {
    const classes = useStyles();
    const theme = useTheme();

    const [name,setName]=useState("")
    

    const [email,setEmail]=useState("")
    const [emailHelper,setEmailHelper]=useState("")

    const [phone,setPhone]=useState("")
    const [phoneHelper,setPhoneHelper]=useState("")

    const [message,setMessage]=useState("")

const onChange=(event)=>{
  let valid;
  switch(event.target.id){
    case 'email':
      setEmail(event.target.value)
      valid=/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value)
      if(!valid){
setEmailHelper("Invalid email")
      }
      else{
        setEmailHelper("")
      }
break;
case 'phone':
  setPhone(event.target.value)
  valid=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(event.target.value)
  if(!valid){
    setPhoneHelper("Invalid phone")
          }
          else{
            setPhoneHelper("")
          }
          break;
default:
  break;
  }

}
 
    const matchesMD=useMediaQuery(theme.breakpoints.down("md"))

  return (
  <Grid container direction="row" >
      <Grid item container direction="column" justifyContent="center" alignItems="center" lg={4} xl={3}  style={{marginBottom:matchesMD ? "5em" :"0em" ,marginTop: matchesMD ? "5em" : "0em"}}>
<Grid item>
  <Grid container direction="column">
  <Grid item>
    <Typography variant="h2"  textAlign={matchesMD ? "center" :"undefined"}> 
    Contact Us
    </Typography>
    <Typography variant="body1"textAlign={matchesMD ? "center" :"undefined"} > 
    we are Wating
    </Typography>

</Grid>
<Grid item container mt={2} >
<Grid item>
    <img src={phoneIcon} alt="phone" style={{marginRight:"0.5em"}}/>
</Grid>
<Grid item >
 <Typography variant="body1" style={{color:"theme.pallete.common.red",fontSize:"1rem"}} ><a href="tel:(5555)5555-555"  style={{textDecoration:"none" ,color:"inherit"}}> (5555)5555-555</a></Typography>
</Grid>
</Grid>
<Grid item container mb={2}>
<Grid item>
    <img src={emailIcon} alt="email" style={{marginRight:"0.5em",verticalAlign:"bottom"}}/>
</Grid>
<Grid item>
 <Typography variant="body1" style={{color:"theme.pallete.common.red" ,fontSize:"1rem"}}><a href="mailto:reihanehnovin@gmail.com"  style={{textDecoration:"none" ,color:"inherit"}}>reihanehnovin@gmail.com</a></Typography>
</Grid>
</Grid>
<Grid item container direction="column" style={{maxWidth:"20em"}}>
    <Grid item style={{marginBottom:"0.5em"}}>
    <TextField
         id="name"
       
          label="Name"
          variant="standard" 
          value={name}
          fullWidth
          onChange={(event)=> setName(event.target.value)}
        />
      
    </Grid>
    <Grid item style={{marginBottom:"0.5em"}}>
    <TextField
         id="email"
         error={emailHelper.length !== 0}
         helperText={emailHelper}
          label="Email"
          variant="standard" 
          value={email}
          fullWidth
          onChange={onChange}
        />
    </Grid>
    <Grid item style={{marginBottom:"0.5em"}}>
    <TextField
         id="phone"
          label="Phone"
          error={phoneHelper.length !== 0}
          helperText={phoneHelper}
          variant="standard" 
          value={phone}
          fullWidth
          onChange={onChange}
        />
    </Grid>
</Grid>
<Grid item style={{maxWidth:"20em"}}>
<TextField id="message" style={{marginBottom:"0.5em"}}   fullWidth InputProps={{disableUnderline:true}} className={classes.message} multiline rows={10} label="Message" variant="standard" value={message} onChange={(event)=> setMessage(event.target.value)}/>
</Grid>
<Grid item container justifyContent="center" mt={2}>
    <Button variant="contained"  disabled={name.length ===0 || message.length===0 || phoneHelper.length !==0 || emailHelper.length !==0} className={classes.sendButton}>send Message
    <img src={airplane} alt="airplane" style={{marginLeft:"1em"}} />
    </Button>
</Grid>
  </Grid>

</Grid>
      </Grid>
      <Grid item container justifyContent={matchesMD ? "center" :"undefined"} direction={matchesMD ? "column" :"row"} className={classes.background} lg={8} xl={9} alignItems="center" >
      <Grid item style={{marginLeft:matchesMD ? 0 : "3em", textAlign:matchesMD ? "center" : "inherit"}}>

         <Grid container direction="column">
             <Grid item>
                 <Typography variant="h2"  textAlign={matchesMD ? "center" : "undefined"}>
                     Lorem ipsum dolor <br/> adipisicing elit 
                 </Typography>
                 <Typography variant="subtitle2" textAlign={matchesMD ? "center" : "undefined"}>
                 Lorem ipsum dolor sit, amet consectetur
                 </Typography>
                 <Grid container item justifyContent={matchesMD ? "center" :undefined }>


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