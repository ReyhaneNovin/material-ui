import React, { useEffect, useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography'
import useScrollTrigger from '@mui/material/useScrollTrigger';
import logo192 from '../../assets/logo192.png'
import { makeStyles } from '@mui/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


    const useStyles=makeStyles(theme =>({
      root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
   
      },
      toolbarMargin:{
           ...theme.mixins.toolbar,
           marginBottom:"2em"
      } ,
      logo:{
        height:"7em",
    },
    
      tabContainer:{
          marginLeft:"auto",
      },
      tab:{
    
      ...theme.typography.tab,
       minWidth:10,
      marginLeft:"25px",
      
      },
      button:{
       
        ...theme.typography.estimate,
       borderRadius:"50px",
       marginRight:"25px",
       marginLeft:"50px",
       height:"45px",
     
   
      },
 
    logoContainer:{
      padding:0,
      "&:hover":{backgroundColor:"transparent"}
    }
  
  }))
  function ElevationScroll(props) {
    const { children } = props;
    
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
     
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }
  
 
  
const Header = (props) => {
    const classes = useStyles();
    const [value,setValue]=useState(0);
    const [anchorEl, setAnchorEl] = useState(null);
    const [open,setOpen]=useState(false);

    const handleChange=(e,value)=>{
      setValue(value)
    }
  
    const handleClick=(e)=>{
      setAnchorEl(null)
      setOpen(false)

    }
      const handleClose=(e,value)=>{
      setValue(value)
    }

    useEffect(()=>{
      if(window.location.pathname==="/" && value!==0){    setValue(0)}
  
    else if(window.location.pathname==="/services" && value!==1)
    { setValue(1)}
    else if(window.location.pathname==="/revolution" && value!==2)
    { setValue(2)}
    else if(window.location.pathname==="/about" && value!==3)
    { setValue(3)}
    else if(window.location.pathname==="/contact" && value!==4)
    { setValue(4)}
   
})
  return (
   <>
      <ElevationScroll {...props}>
   <AppBar position='static' >
       <Toolbar className={classes.root}>
         <Button  component={Link} to='/' className={classes.logoContainer} onClick={()=>setValue(0)} disableRipple> <img alt='compony logo ' src={logo192} className={classes.logo}/></Button>
          
        
           <Typography variant='h5'>
          Arc Development
          </Typography>
          <Tabs value={value} onChange={handleChange} className={classes.tabContainer}
          indicatorColor='primary'>
               <Tab aria-owns={anchorEl ? "simple-menu" : undefined} 
               aria-
               label="Home" className={classes.tab}  component={Link} to='/'/>
               <Tab label="Services"className={classes.tab}  component={Link} to='/services'/>
               <Tab label="Revolution"className={classes.tab}  component={Link} to='/revolution'/>
               <Tab label="About Us"className={classes.tab}  component={Link} to='/about'/>
               <Tab label="Contact Us"className={classes.tab}  component={Link} to='/contact'/>
               </Tabs>
               <Button variant="contained" color="primary"  className={classes.button}>estimate</Button>
       </Toolbar>
   </AppBar>
   </ElevationScroll>
   </>
  )
}

export default Header