import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography'
import logo192 from '../../assets/logo192.png'
import { makeStyles } from '@mui/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';


const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
    logo:{
        height:'40px'
    },
    tabContainer:{
        marginLeft:'150px'
    },
    tab:{
     
      minWidth:10,
      marginLeft:'25px'
    },
//     button:{
//       borderRadius:50,
//       marginLeft:'50px',
// marginRight:'25px',
// fontSize:'1rem'

//     }
  
  });
const Header = (props) => {
    const classes = useStyles();
    const [value,setValue]=useState(0);

    const handleChange=(e,value)=>{
      setValue(value)
    }
  return (
   <>
   <AppBar position='fixed' >
       <Toolbar className={classes.root}>
           <img alt='compony logo ' src={logo192} className={classes.logo}/>
        
           <Typography variant='h4' sx={{ letterSpacing: 2 }}>
          Arc Development
          </Typography>
          <Tabs value={value} onChange={handleChange} className={classes.tabContainer}
          indicatorColor='primary'>
          <Tab label="Home" className={classes.tab}/>
               <Tab label="Services"className={classes.tab}/>
          <Tab label="Revolution"className={classes.tab}/>
               <Tab label="About Us"className={classes.tab}/>
               <Tab label="Contact Us"className={classes.tab}/>
               </Tabs>
               <Button variant="contained" color="success" sx={{ borderRadius: 50 }} className={classes.button}>Search</Button>
       </Toolbar>
   </AppBar>
   </>
  )
}

export default Header