import React, { useEffect, useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography'
import useScrollTrigger from '@mui/material/useScrollTrigger';
import favicon from '../../assets/images/favicon.png'
import { makeStyles } from '@mui/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Drawer from '@mui/material/Drawer';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


    const useStyles=makeStyles(theme =>({
      root: {
        background: 'linear-gradient(to right, #373b44, #4286f4)',
   
      },
      toolbarMargin:{
           ...theme.mixins.toolbar,
           marginBottom:"3em",
           [theme.breakpoints.down("md")]:{
            height:"2em"
          },
          [theme.breakpoints.down("xs")]:{
            height:"1.25em !important"
          }
      } ,
      logo:{
        height:"6em",
        [theme.breakpoints.down("md")]:{
          height:"5em"
        },
        [theme.breakpoints.down("xs")]:{
          height:"3.5em !important"
        }

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
       borderRadius:"20px  !important",
       marginRight:"25px  !important" ,
       marginLeft:"50px  !important",
       height:"45px  !important",
       width:"100px !important"
     
   
      },
 
    logoContainer:{
      padding:0,
      "&:hover":{backgroundColor:"transparent"} 
    },
  menu:{
    backgroundColor:"#2980b9 !important",
  color:"white !important"
   
  },
  menuItem:{
    ...theme.typography.tab,
    "&:hover":{
      opacity:1
    }
  },
  drawerIconContainer:{
    marginLeft:"auto !important",
    "&:hover":{
      backgroundColor:"transparent"
    }

  },
  drawerIcon:{
    height:"40px !important",
    width:"40px !important"
  },

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
    const theme = useTheme();
    const iOS =typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const matches = useMediaQuery(theme.breakpoints.down('md'));

  
    const [value,setValue]=useState(0);
    const [anchorEl, setAnchorEl] = useState(null);
    const [openMenu,setOpenMenu]=useState(false);
    const [selectedIndex , setSelectedIndex]=useState(0);
    const [openDrawer ,setOpenDrawer]=useState(false);

    const handleChange=(e,newValue)=>{
      setValue(newValue)
    }
  
    const handleClick=(e)=>{
      setAnchorEl(e.currentTarget)
      setOpenMenu(true)

    }
    const handleMenuItemClick=(e,index)=>{
      setAnchorEl(null);
      setOpenMenu(false);
      setSelectedIndex(index)
    }
      const handleClose=(e)=>{
        setAnchorEl(null)
        setOpenMenu(false)
    }

const menuOptions=[{name:"Services", link:"/services"},{name:"Custom Software Development" ,link:"/customsoftware"},{name:"Mobile App development" ,link:"/mobileapps"},{name:"Website development" ,link:"/websites"}]

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
   
    switch(window.location.pathname){
      case "/" :
        if(value !==0){
          setValue(0)
        }
        break;
        case "/services" :
          if(value !==1){
            setValue(1);
            selectedIndex(0)
          }
          break;
          case "/customsoftware" :
            if(value !==1){
              setValue(1);
              setSelectedIndex(1)
            }
            break;
            case "/mobileapps" :
            if(value !==1){
              setValue(1);
              setSelectedIndex(2)
            }
            break;
            case "/websites" :
              if(value !==1){
                setValue(1);
                setSelectedIndex(3)
              }
              break;
              case "/revolution" :
                if(value !==2){
                  setValue(2);
              
                }
                break;
              
                
                case "/about" :
                 if(value !==3){
                    setValue(3);
                
                  }
                  break;
                 
                  case "/contact" :
                  if(value !==4){
                    setValue(4);
                
                  }
                  break;
                 
          default :
          break;
   
    }


},[value]);

const tabs =(
  <React.Fragment>
  <Tabs value={value} onChange={handleChange} className={classes.tabContainer}
          indicatorColor='primary'>
               <Tab  label="Home" className={classes.tab}  component={Link} to='/'/>
               <Tab aria-owns={anchorEl ? "basic-menu" :undefined} aria-haspopup={anchorEl ?"true" : undefined } onMouseOver={event =>handleClick(event)} label="Services"className={classes.tab}  component={Link} to='/services'/>
               <Tab label="Revolution"className={classes.tab}  component={Link} to='/revolution'/>
               <Tab label="About Us"className={classes.tab}  component={Link} to='/about'/>
               <Tab label="Contact Us"className={classes.tab}  component={Link} to='/contact'/>
               </Tabs>
               <Button variant="contained" color="primary"  className={classes.button}>Estimate</Button>
               <Menu  id="basic-menu"  anchorEl={anchorEl}open={openMenu}
        onClose={handleClose}   MenuListProps={{onMouseLeave:handleClose }} classes={{paper:classes.menu}} elevation={0}>
{menuOptions.map((option,index)=>(
  <MenuItem key={option} component={Link} to={option.link} classes={{root:classes.menuItem}} onClick={(event)=>{handleMenuItemClick(event,index);setValue(1);handleClose()}} selected={index===selectedIndex && value===1}>
  {option.name}

  </MenuItem>
))}
        </Menu>
  </React.Fragment>
);
 const drawer=(
   <React.Fragment>
   <SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS} open={openDrawer}
   onClose={()=>setOpenDrawer(false) } onOpen={()=>setOpenDrawer(true)}>
<List disablePadding>
  <ListItem onClick={()=>setOpenDrawer(false)} divider button component={Link} to="/"><ListItemText disableTypography>Home</ListItemText></ListItem>
  <ListItem onClick={()=>setOpenDrawer(false)} divider button  component={Link} to="/services"><ListItemText disableTypography>Services</ListItemText></ListItem>
  <ListItem onClick={()=>setOpenDrawer(false)} divider button  component={Link} to="/revolution"><ListItemText disableTypography>Revolution</ListItemText></ListItem>
  <ListItem onClick={()=>setOpenDrawer(false)} divider button  component={Link} to="/about"><ListItemText disableTypography>About Us</ListItemText></ListItem>
  <ListItem onClick={()=>setOpenDrawer(false)} divider button  component={Link} to="/contact"><ListItemText disableTypography>Contact Us</ListItemText></ListItem>

</List>
   </SwipeableDrawer>
<IconButton className={classes.drawerIconContainer} onClick={()=>setOpenDrawer(!openDrawer)} disableRipple>
  <MenuIcon className={classes.drawerIcon}/>
</IconButton>
  </React.Fragment>
 )


  return (
   <>
      <ElevationScroll {...props}>
   <AppBar position='static' >
       <Toolbar className={classes.root}>
         <Button  component={Link} to='/' className={classes.logoContainer} onClick={()=>setValue(0)} disableRipple> <img alt='compony logo ' src={favicon} className={classes.logo}/></Button>
          
           <Typography variant='h5'>
          Arc Development
          </Typography>
        {matches ? drawer :tabs}
       </Toolbar>
   </AppBar>
   </ElevationScroll>
   </>
  )
}

export default Header