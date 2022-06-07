import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import logo from '../../assets/images/logo.svg';
import { makeStyles } from '@mui/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import zIndex from '@mui/material/styles/zIndex';

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'linear-gradient(to right, #000000, #4286f4)',
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em',
    [theme.breakpoints.down('md')]: {
      height: '2em',
    },
    [theme.breakpoints.down('xs')]: {
      height: '1.25em !important',
    },
  },
  logo: {
    height: '6em',
    [theme.breakpoints.down('md')]: {
      height: '5em',
    },
    [theme.breakpoints.down('xs')]: {
      height: '3.5em !important',
    },
  },

  tabContainer: {
    marginLeft: 'auto',
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: '25px',
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: '20px  !important',
    marginRight: '25px  !important',
    marginLeft: '50px  !important',
    height: '45px  !important',
    // width: "100px !important",
  },

  logoContainer: {
    padding: 0,
    '&:hover': { backgroundColor: 'transparent' },
  },
  menu: {
    backgroundColor: theme.palette.common.red,
    color: 'black !important',
  },
  menuItem: {
    ...theme.typography.tab,
    '&:hover': {
      opacity: 1,
    },
  },
  drawerIconContainer: {
    marginLeft: 'auto !important',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  drawerIcon: {
    height: '40px !important',
    // width: '40px !important',
  },
  drawer: {
    backgroundColor: theme.palette.common.red,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: 'white',
    opacity: 0.7,
  },
  drawerItemSelected: {
    '& .MuiListItemText-root': { opacity: 1 },
  },
  //   appbar:{
  //     zIndex:theme.zIndex.modal+1,

  //  }
}));
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
  const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  const [openDrawer, setOpenDrawer] = useState(false);

  const handleChange = (e, newValue) => {
    props.setValue(newValue);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };
  const handleMenuItemClick = (e, index) => {
    setAnchorEl(null);
    setOpenMenu(false);
    props.setSelectedIndex(index);
  };
  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const menuOptions = [
    { name: 'Services', link: '/services', activeIndex: 1, selectedIndex: 0 },
    {
      name: 'Custom Software Development',
      link: '/customsoftware',
      activeIndex: 1,
      selectedIndex: 1,
    },
    {
      name: 'Ios/Android development',
      link: '/mobileapps',
      activeIndex: 1,
      selectedIndex: 2,
    },
    {
      name: 'Website development',
      link: '/websites',
      activeIndex: 1,
      selectedIndex: 3,
    },
  ];

  const routes = [
    { name: 'Home', link: '/', activeIndex: 0 },
    {
      name: 'Services',
      link: '/services',
      activeIndex: 1,
      ariaOwns: anchorEl ? 'basic-menu' : undefined,
      ariaPopup: anchorEl ? 'true' : undefined,
      onMouseOver: (event) => handleClick(event),
    },
    { name: 'Revolution', link: '/revolution', activeIndex: 2 },
    { name: 'About Us', link: '/about', activeIndex: 3 },
    { name: 'Contact Us', link: '/contact', activeIndex: 4 },
  ];

  useEffect(() => {
    [...menuOptions, ...routes].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (props.value !== route.activeIndex) {
            props.setValue(route.activeIndex);
            if (route.selectedIndex && route.selectedIndex !== props.selectedIndex) {
              props.setSelectedIndex(route.selectedIndex);
            }
          }
          break;
        default:
          break;
      }
    });
  }, [props.value, menuOptions, props.selectedIndex, routes, props]);

  const tabs = (
    <React.Fragment>
      <Tabs
        value={props.value}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor='primary'
      >
        {routes.map((route, index) => (
          <Tab
            key={`${route}${index}`}
            className={classes.tab}
            component={Link}
            to={route.link}
            label={route.name}
            aria-owns={route.ariaOwns}
            aria-haspopup={route.ariaPopup}
            onMouseOver={route.onMouseOver}
          />
        ))}
      </Tabs>
      <Button
        variant='contained'
        color='primary'
        className={classes.button}
        component={Link}
        to='/estimate'
      >
        Estimate
      </Button>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        classes={{ paper: classes.menu }}
        elevation={0}
        style={{ zIndex: 1302 }}
        keepMounted
      >
        {menuOptions.map((option, index) => (
          <MenuItem
            key={'${option}${i}'}
            component={Link}
            to={option.link}
            classes={{ root: classes.menuItem }}
            onClick={(event) => {
              handleMenuItemClick(event, index);
              props.setValue(1);
              handleClose();
            }}
            selected={index === props.selectedIndex && props.value === 1}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );
  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        {/* <div className={classes.toolbarMargin}/> */}
        <List disablePadding>
          {routes.map((route) => (
            <ListItem
              key={`${route}${route.activeIndex}`}
              divider
              button
              component={Link}
              to={route.link}
              selected={props.value === route.activeIndex}
              classes={{ selected: classes.drawerItemSelected }}
              onClick={() => {
                setOpenDrawer(false);
                props.setValue(route.activeIndex);
              }}
            >
              <ListItemText disableTypography className={classes.drawerItem}>
                {route.name}
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  );

  return (
    <>
      <ElevationScroll {...props}>
        <AppBar position='static' className={classes.appbar}>
          <Toolbar className={classes.root}>
            <Button
              component={Link}
              to='/'
              className={classes.logoContainer}
              onClick={() => props.setValue(0)}
              disableRipple
            >
              {' '}
              <img alt='compony logo ' src={logo} className={classes.logo} />
            </Button>

            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      {/* <div className={classes.toolbarMargin}/> */}
    </>
  );
};

export default Header;
