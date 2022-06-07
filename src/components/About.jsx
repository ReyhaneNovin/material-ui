import React from 'react';
import { makeStyles, useTheme } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import history from '../assets/images/history.svg';
import Avatar from '@mui/material/Avatar';
import founder from '../assets/images/founder.jpg';
import yearbook from '../assets/images/yearbook.svg';
import puppy from '../assets/images/puppy.svg';
import useMediaQuery from '@mui/material/useMediaQuery';

const useStyles = makeStyles((theme) => ({
  missionStatement: {
    fontStyle: 'italic',
    fontSize: '1.5rem',
    maxWidth: '50em',
  },
  rowContainer: {
    paddingLeft: '5em',
    paddingRight: '5em',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1.5em !important',
      paddingRight: '1.5em !important',
    },
  },
  avatar: {
    height: '25em !important',
    width: '25em !important',
  },
}));
const About = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Grid container direction='column'>
      <Grid item className={classes.rowContainer} style={{ marginTop: '2em' }}>
        <Typography variant='h2'>Abou Us</Typography>
      </Grid>
      <Grid item container justifyContent='center' className={classes.rowContainer}>
        <Typography variant='h4' align='center' className={classes.missionstatement}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Typography>
      </Grid>
      <Grid item container className={classes.rowContainer} justifyContent='space-around' my={10}>
        <Grid item lg>
          <Grid item container direction='column' style={{ maxWidth: '35em' }}>
            <Grid item>
              <Typography variant='h4' gutterBottom>
                History
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant='body1'
                paragraph
                style={{ fontWeight: '600', fontStyle: 'italic' }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </Typography>
              <Typography
                variant='body1'
                paragraph
                style={{ fontWeight: '600', fontStyle: 'italic' }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg>
          <Grid item container justifyContent='center'>
            <img src={history} alt='' style={{ maxHeight: '22em', maxWidth: '100%' }} />
          </Grid>
        </Grid>
      </Grid>

      <Grid item container justifyContent='center' className={classes.rowContainer}>
        <Grid item>
          <Typography variant='h4' gutterBottom>
            Team
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant='body1' paragraph alignItems='center'>
            Lorem ipsum ,dolor sit amet,amet consectetur
          </Typography>
          <Typography variant='body1' paragraph alignItems='center'>
            Lorem ipsum ,dolor sit amet,amet consectetur
          </Typography>
        </Grid>

        <Grid item>
          <Avatar alt='founder' src={founder} className={classes.avatar} />
        </Grid>
        <Grid item container direction='row'>
          <Grid item container lg={6}>
            <Grid item>
              <img src={yearbook} alt='yearbook page' />
            </Grid>
            <Grid item>
              <Typography variant='caption'>page from yearbook</Typography>
            </Grid>
          </Grid>
          <Grid item lg={6} pt={15}>
            <Typography variant='body1' textAlign='center' paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non eum magnam itaque eaque
              cum. Doloremque eveniet tempora, vel, minus aspernatur ipsam vitae recusandae vero
              suscipit alias temporibus quam quas dicta?
            </Typography>
            <Typography variant='body1' textAlign='center' paragraph>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci ea minus asperiores
              repellendus, deserunt eos dolores rerum dicta repudiandae dolore omnis, delectus
              temporibus tenetur minima blanditiis! Voluptate esse vitae neque?
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
