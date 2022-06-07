import React from 'react';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@mui/styles';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import backArrow from '../assets/images/backArrow.svg';
import forwardArrow from '../assets/images/forwardArrow.svg';
import bulb from '../assets/images/bulb.svg';
import cash from '../assets/images/cash.svg';
import stopwatch from '../assets/images/stopwatch.svg';
import documentsAnimation from '../animations/documentsAnimation/data.js';
import scaleAnimation from '../animations/scaleAnimation/data.json';
import automationAnimation from '../animations/automationAnimation/data.json';
import uxAnimation from '../animations/uxAnimation/data.js';
import root from '../assets/images/root.svg';
import { Hidden } from '@mui/material';

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
  itemContainer: {
    maxWidth: '40em !important',
  },
}));
const documentsOptions = {
  loop: true,
  autoplay: true,
  animationData: documentsAnimation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};
const scaleOption = {
  loop: true,
  autoplay: true,
  animationData: scaleAnimation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};
const automationOption = {
  loop: true,
  autoplay: true,
  animationData: automationAnimation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};
const uxOption = {
  loop: true,
  autoplay: true,
  animationData: uxAnimation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const CustomSoftware = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid container direction='column' className={classes.mainContainer}>
      <Grid item container direction='row'>
        <Hidden mdDown>
          <Grid
            item
            className={classes.arrowContainer}
            style={{ marginRight: '1em', marginLeft: '-3.5em' }}
          >
            <IconButton
              style={{ backgroundColor: 'transparent' }}
              component={Link}
              to='/services'
              onClick={() => props.setSelectedIndex(0)}
            >
              <img src={backArrow} alt='Back to service page' />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid item container direction='column' className={classes.heading}>
          <Grid item>
            <Typography variant='h2'>Custom SoftWare development</Typography>
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
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              style={{ backgroundColor: 'transparent' }}
              component={Link}
              to='/mobileapps'
              onClick={() => props.setSelectedIndex(2)}
            >
              <img src={forwardArrow} alt='forward to ios/android App development page' />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        item
        container
        direction='row'
        justifyContent='center'
        style={{ marginTop: '10em', marginBottom: '10em' }}
      >
        <Grid item container direction='column' md style={{ maxWidth: '40em' }} alignItems='center'>
          <Grid item>
            <Typography variant='h4'>Save Energy</Typography>
          </Grid>
          <Grid item>
            <img src={bulb} alt='light bulb' />
          </Grid>
        </Grid>
        <Grid item container direction='column' md style={{ maxWidth: '40em' }} alignItems='center'>
          <Grid item>
            <Typography variant='h4'>Save Money</Typography>
          </Grid>
          <Grid item>
            <img src={cash} alt='cash' />
          </Grid>
        </Grid>
        <Grid item container direction='column' md style={{ maxWidth: '40em' }} alignItems='center'>
          <Grid item>
            <Typography variant='h4'>Save Time</Typography>
          </Grid>
          <Grid item>
            <img src={stopwatch} alt='time' />
          </Grid>
        </Grid>
      </Grid>
      <Grid item container direction='row' justifyContent='center'>
        <Grid item container className={classes.itemContainer} lg={6}>
          <Grid item container direction='column' md>
            <Grid item>
              <Typography variant='h4'>Digital document data</Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1' paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate culpa magni
                incidunt repellat excepturi, pariatur laborum laudantium. Ad molestias, vitae
                veniam, aperiam nihil maxime alias repudiandae debitis officiis aliquid ab.
              </Typography>
              <Typography variant='body1' paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo pariatur optio maxime
                eius velit temporibus fuga incidunt, beatae ex id vero non commodi cum ipsum
                provident placeat sequi. Asperiores, cupiditate.
              </Typography>
              <Typography variant='body1' paragraph>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md direction='column'>
            <Lottie
              options={documentsOptions}
              style={{ maxHeight: '275px', maxWidth: '275px', minHeight: '250px' }}
            />
          </Grid>
        </Grid>
        <Grid item container className={classes.itemContainer} lg={6}>
          <Grid item md direction='column'>
            <Lottie options={scaleOption} style={{ maxHeight: '260px', maxWidth: '275px' }} />
          </Grid>
          <Grid item container direction='column' md>
            <Grid item>
              <Typography variant='h4'>Scale</Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1' paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate culpa magni
                incidunt repellat excepturi, pariatur laborum laudantium. Ad molestias, vitae
                veniam, aperiam nihil maxime alias repudiandae debitis officiis aliquid ab.
              </Typography>
              <Typography variant='body1' paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo pariatur optio maxime
                eius velit temporibus fuga incidunt, beatae ex id vero non commodi cum ipsum
                provident placeat sequi. Asperiores, cupiditate.
              </Typography>
              <Typography variant='body1' paragraph>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item container direction='row'>
        <Grid item container direction='column' alignItems='center'>
          <Grid item>
            <img
              src={root}
              alt='roots'
              height='450em'
              width='
    450em'
            />
          </Grid>
          <Grid item className={classes.itemContainer}>
            <Typography variant='h4' gutterBottom>
              Root-Analysis
            </Typography>
            <Typography variant='body1' paragraph>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero mollitia tempora maxime
              qui magnam beatae laborum sequi repudiandae, nisi suscipit aliquid voluptatem nobis
              veritatis fuga libero. Quaerat numquam officia magnam.
            </Typography>
            <Typography variant='body1' paragraph>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero mollitia tempora maxime
              qui magnam beatae laborum sequi repudiandae, nisi suscipit aliquid voluptatem nobis
              veritatis fuga libero. Quaerat numquam officia magnam.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item container direction='row' justifyContent='center'>
        <Grid item container className={classes.itemContainer} direction='column'>
          <Grid item container direction='column' md>
            <Grid item>
              <Typography variant='h4'>Digital document data</Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1' paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate culpa magni
                incidunt repellat excepturi, pariatur laborum laudantium. Ad molestias, vitae
                veniam, aperiam nihil maxime alias repudiandae debitis officiis aliquid ab.
              </Typography>
              <Typography variant='body1' paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo pariatur optio maxime
                eius velit temporibus fuga incidunt, beatae ex id vero non commodi cum ipsum
                provident placeat sequi. Asperiores, cupiditate.
              </Typography>
              <Typography variant='body1' paragraph>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque perferendis, labore
                expedita magnam id pariatur hic ipsa necessitatibus ipsam est cum inventore
                consectetur sequi tempore rerum debitis delectus fuga! Modi?
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie
              options={automationOption}
              style={{ maxHeight: '275px', maxWidth: '275px', minHeight: '250px' }}
            />
          </Grid>
        </Grid>
        <Grid item container className={classes.itemContainer} direction='column'>
          <Grid item container direction='column' md>
            <Grid item>
              <Typography variant='h4'>Scale</Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1' paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate culpa magni
                incidunt repellat excepturi, pariatur laborum laudantium. Ad molestias, vitae
                veniam, aperiam nihil maxime alias repudiandae debitis officiis aliquid ab.
              </Typography>
              <Typography variant='body1' paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo pariatur optio maxime
                eius velit temporibus fuga incidunt, beatae ex id vero non commodi cum ipsum
                provident placeat sequi. Asperiores, cupiditate.
              </Typography>
              <Typography variant='body1' paragraph>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque perferendis, labore
                expedita magnam id pariatur hic ipsa necessitatibus ipsam est cum inventore
                consectetur sequi tempore rerum debitis delectus fuga! Modi?
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie options={uxOption} style={{ maxHeight: '260px', maxWidth: '275px' }} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CustomSoftware;
