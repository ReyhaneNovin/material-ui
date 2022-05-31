import React from 'react';
import Lottie from 'react-lottie';
import { makeStyles, useTheme } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import check from '../assets/images/check.svg';
import website from '../assets/images/website.svg';
import backArrow from '../assets/images/backArrow.svg';
import backArrowDisabled from '../assets/images/backArrowDisabled.svg';
import forwardArrowDisabled from '../assets/images/forwardArrowDisabled.svg';
import camera from '../assets/images/camera.svg';
import forwardArrow from '../assets/images/forwardArrow.svg';
import upload from '../assets/images/upload.svg';
import person from '../assets/images/person.svg';
import persons from '../assets/images/persons.svg';
import people from '../assets/images/people.svg';
import info from '../assets/images/info.svg';
import bell from '../assets/images/bell.svg';
import users from '../assets/images/users.svg';
import iphone from '../assets/images/iphone.svg';
import gps from '../assets/images/gps.svg';
import customized from '../assets/images/customized.svg';
import data from '../assets/images/data.svg';
import android from '../assets/images/android.svg';
import globe from '../assets/images/globe.svg';
import biometrics from '../assets/images/biometrics.svg';
import software from '../assets/images/software.svg';
import mobile from '../assets/images/mobile.svg';
import estimateAnimation from '../animations/estimateAnimation/data.json';

const useStyles = makeStyles((theme) => ({
  icon: {
    width: '12em',
    height: '10em',
  },
}));

const Estimate = () => {
  const classes = useStyles();
  const theme = useTheme();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: estimateAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <Grid container direction='row'>
      <Grid item container direction='column' lg={6} mt={2} mb={25} alignItems='center'>
        <Grid item mt={2} ml={5}>
          <Typography variant='h2'>Estimate</Typography>
          <Grid item style={{ marginRight: '10em', maxWidth: '50em', marginTop: '5em' }}>
            <Lottie options={defaultOptions} height='100%' width='100%' />
          </Grid>
        </Grid>
        <Grid item container direction='column' lg={6}>
          <Grid item>
            <Typography
              variant='h2'
              textAlign='center'
              style={{ fontWeight: ' 500em', marginBottom: '2.5em', marginTop: '4.5em' }}
              gutterBottom
            >
              Wich service Are you intersted in?
            </Typography>
          </Grid>
          <Grid item container>
            <Grid item container direction='column' md>
              <Grid item style={{ maxWidth: '12em' }}>
                <Typography variant='h6' alignItems='center' style={{ marginBottom: ' 1em' }}>
                  Custom softWare Development
                </Typography>
              </Grid>

              <Grid item>
                <img src={software} alt='software' className={classes.icon} />
              </Grid>
            </Grid>
            <Grid item container direction='column' md>
              <Grid item style={{ maxWidth: '12em' }}>
                <Typography variant='h6' alignItems='center' style={{ marginBottom: ' 1em' }}>
                  Ios/Android App Development
                </Typography>
              </Grid>

              <Grid item>
                <img src={mobile} alt='mobile' className={classes.icon} />
              </Grid>
            </Grid>
            <Grid item container direction='column' md>
              <Grid item style={{ maxWidth: '12em' }}>
                <Typography variant='h6' alignItems='center' style={{ marginBottom: ' 1em' }}>
                  Websites Development
                </Typography>
              </Grid>

              <Grid item>
                <img src={website} alt='camputer' className={classes.icon} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container justifyContent='space-between'>
          <Grid item>
            <img src={backArrow} alt='backArrow' />
          </Grid>
          <Grid item>
            <img src={forwardArrow} alt='forwardArrow' />
          </Grid>
        </Grid>
        <Grid item>
          <Button variant='contained' className={classes.estimateButton}></Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Estimate;
