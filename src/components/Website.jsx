import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Lottie from 'react-lottie';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import Hidden from '@mui/material/Hidden';
import backArrow from '../assets/images/backArrow.svg';
import forwardArrow from '../assets/images/forwardArrow.svg';
import analytics from '../assets/images/analytics.svg';
import seo from '../assets/images/seo.svg';
import outreach from '../assets/images/outreach.svg';
import ecommerce from '../assets/images/ecommerce.svg';
import CallToAction from './ui/CallToAction';

const useStyles = makeStyles((theme) => ({
  heading: {
    maxWidth: '40em !important',
  },
  arrowContainer: {
    marginTop: '0.5em',
  },
  mainContainer: {
    paddingLeft: '5em !important',
    paddingRight: '5em !important',
    paddingTop: '2em !important',
    paddingBottom: '10em  !important',
  },
  paragraphContainer: {
    maxWidth: '30em',
  },
}));
const Website = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));
  return (
    <Grid container direction='column' className={classes.mainContainer}>
      <Grid item container direction='row'>
        <Grid
          item
          className={classes.arrowContainer}
          style={{ marginRight: '1em', marginLeft: '-3.5em' }}
        >
          <IconButton
            style={{ backgroundColor: 'transparent' }}
            component={Link}
            to='/mobileapps'
            onClick={() => props.setSelectedIndex(2)}
          >
            <img src={backArrow} alt='IOS?Android page' />
          </IconButton>
        </Grid>
        <Grid item container direction='column' className={classes.heading}>
          <Grid item>
            <Typography variant='h2'>Website development</Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1' paragraph>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae dolorem omnis
              veritatis <br />
            </Typography>

            <Typography variant='body1'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, ex. Sint recusandae
              officiis magnam, ea sit, eveniet non ullam iusto voluptas, totam esse reiciendis earum
              sed modi delectus doloremque natus.
              <br />
            </Typography>

            <Typography variant='body1'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae dolorem omnis
              veritatis
              <br />
            </Typography>

            <Typography variant='body1'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi modi repudiandae
              ab, accusamus, rem suscipit, pariatur mollitia provident et rerum in repellat
              temporibus doloremque soluta dolor? Nisi repellendus asperiores soluta?
              <br />
            </Typography>
          </Grid>
        </Grid>
        <Grid item className={classes.arrowContainer}>
          <IconButton
            style={{ backgroundColor: 'transparent' }}
            component={Link}
            to='/services'
            onClick={() => props.setSelectedIndex(0)}
          >
            <img src={forwardArrow} alt='services page' />
          </IconButton>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? 'column ' : 'row'}
        alignItems='center'
        className={classes.rowContainer}
        style={{ marginTop: '15em' }}
      >
        <Grid item>
          <Grid container direction='column'>
            <Grid item>
              <Typography variant='h4' gutterBottom>
                Analytics
              </Typography>
            </Grid>
            <Grid item>
              <img src={analytics} alt='analytics' style={{ marginLeft: '-2.75em' }} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.paragraphContainer}>
          <Typography variant='body1' alignItems={matchesSM ? 'center' : 'undefined'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem reiciendis ducimus quod
            et voluptatum non aperiam porro. Soluta illo repudiandae repellat ducimus pariatur?
            Soluta dolorum sed nam voluptate, explicabo laboriosam.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? 'column ' : 'row'}
        alignItems='center'
        justifyContent='flex-end'
        className={classes.rowContainer}
        style={{ marginBottom: '15em', marginTop: '15em' }}
      >
        <Grid item>
          <Grid container direction='column'>
            <Grid item>
              <Typography textAlign='center' variant='h4' gutterBottom>
                E-Commerce
              </Typography>
            </Grid>
            <Grid item>
              <img src={ecommerce} alt='ecommerce' />
            </Grid>
          </Grid>
        </Grid>
        <Grid item style={{ marginLeft: '1em' }} className={classes.paragraphContainer}>
          <Typography variant='body1' paragraph alignItems={matchesSM ? 'center' : 'undefined'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem reiciendis ducimus quod
          </Typography>
          <Typography variant='body1' paragraph alignItems={matchesSM ? 'center' : 'undefined'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem reiciendis ducimus quod
          </Typography>
        </Grid>
      </Grid>
      <Grid item container direction='row' alignItems='center' className={classes.rowContainer}>
        <Grid item>
          <Grid container direction='column'>
            <Grid item>
              <Typography variant='h4' gutterBottom>
                OutReach
              </Typography>
            </Grid>
            <Grid item>
              <img src={outreach} alt='outreach' />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{ marginLeft: '1em' }}
          alignItems={matchesSM ? 'center' : 'undefined'}
          className={classes.paragraphContainer}
        >
          <Typography variant='body1'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem reiciendis ducimus quod
            et voluptatum non aperiam porro. Soluta illo repudiandae repellat ducimus pariatur?
            Soluta dolorum sed nam voluptate, explicabo laboriosam.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? 'column ' : 'row'}
        alignItems='center'
        justifyContent='flex-end'
        className={classes.rowContainer}
        style={{ marginBottom: '15em', marginTop: '15em' }}
      >
        <Grid item>
          <Grid container direction='column'>
            <Grid item>
              <Typography textAlign='center' variant='h4' gutterBottom>
                Search Engin <br /> Optimization
              </Typography>
            </Grid>
            <Grid item>
              <img src={seo} alt='seo' />
            </Grid>
          </Grid>
        </Grid>
        <Grid item style={{ marginLeft: '1em' }} className={classes.paragraphContainer}>
          <Typography variant='body1' paragraph alignItems={matchesSM ? 'center' : 'undefined'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem reiciendis ducimus quod
          </Typography>
          <Typography variant='body1' paragraph alignItems={matchesSM ? 'center' : 'undefined'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem reiciendis ducimus quod
          </Typography>
          <Typography variant='body1' paragraph alignItems={matchesSM ? 'center' : 'undefined'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem reiciendis ducimus quod
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
};

export default Website;
