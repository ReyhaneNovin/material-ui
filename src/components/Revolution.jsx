import React from 'react';
import Lottie from 'react-lottie';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import { makeStyles, useTheme } from '@mui/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import vision from '../assets/images/vision.svg';
import consultation from '../assets/images/consultationIcon.svg';
import mockup from '../assets/images/mockupIcon.svg';
import review from '../assets/images/reviewIcon.svg';
import design from '../assets/images/designIcon.svg';
import build from '../assets/images/buildIcon.svg';
import launch from '../assets/images/launchIcon.svg';
import maintain from '../assets/images/maintainIcon.svg';
import iterate from '../assets/images/iterateIcon.svg';
import technologyAnimation from '../animations/technologyAnimation/data.json';

import CallToAction from './ui/CallToAction';

const useStyles = makeStyles((theme) => ({
  rowContainer: {
    paddingLeft: '5em',
    paddingRight: '5em',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1.5em',
      paddingRight: '1.5em',
    },
  },
}));

function Revolution() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: technologyAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Grid container direction='column'>
      <Grid item className={classes.rowContainer} style={{ marginTop: matchesMD ? '1em' : '2em' }}>
        <Typography
          align={matchesMD ? 'center' : undefined}
          variant='h2'
          style={{ fontFamily: 'Pacifico' }}
        >
          The Revolution
        </Typography>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        alignItems='center'
        className={classes.rowContainer}
        style={{ marginTop: '5em' }}
      >
        <Grid item lg>
          <img
            src={vision}
            alt='mountain through binoculars'
            style={{
              maxWidth: matchesSM ? 300 : '40em',
              marginRight: matchesMD ? 0 : '5em',
              marginBottom: matchesMD ? '5em' : 0,
            }}
          />
        </Grid>
        <Grid item container direction='column' lg style={{ maxWidth: '40em' }}>
          <Grid item>
            <Typography align={matchesMD ? 'center' : 'right'} variant='h4' gutterBottom>
              Vision
            </Typography>
          </Grid>
          <Grid item>
            <Typography align={matchesMD ? 'center' : 'right'} variant='body1' paragraph>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae provident incidunt
              dignissimos ea est corrupti tempora similique dolore? Error veniam et ex eligendi
              aliquid dolor est obcaecati autem molestiae labore.
            </Typography>
            <Typography align={matchesMD ? 'center' : 'right'} variant='body1' paragraph>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae provident incidunt
              dignissimos ea est corrupti tempora similique dolore? Error veniam et ex eligendi
              aliquid dolor est obcaecati autem molestiae labore.
            </Typography>
            <Typography align={matchesMD ? 'center' : 'right'} variant='body1' paragraph>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae provident incidunt
              dignissimos ea est corrupti tempora similique dolore? Error veniam et ex eligendi
              aliquid dolor est obcaecati autem molestiae labore.
            </Typography>
            <Typography align={matchesMD ? 'center' : 'right'} variant='body1' paragraph>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae provident incidunt
              dignissimos ea est corrupti tempora similique dolore? Error veniam et ex eligendi
              aliquid dolor est obcaecati autem molestiae labore.
            </Typography>
            <Typography align={matchesMD ? 'center' : 'right'} variant='body1' paragraph>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae provident incidunt
              dignissimos ea est corrupti tempora similique dolore? Error veniam et ex eligendi
              aliquid dolor est obcaecati autem molestiae labore.
            </Typography>
          </Grid>
        </Grid>

        <Grid
          item
          container
          direction={matchesMD ? 'column' : 'row'}
          alignItems='center'
          className={classes.rowContainer}
          style={{ marginTop: '10em', marginBottom: '10em' }}
        >
          <Grid item container direction='column' lg style={{ maxWidth: '40em' }}>
            <Grid item>
              <Typography align={matchesMD ? 'center' : undefined} variant='h4' gutterBottom>
                technology
              </Typography>
            </Grid>
            <Grid item>
              <Typography align={matchesMD ? 'center' : undefined} variant='body1' paragraph>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae provident
                incidunt dignissimos ea est corrupti tempora similique dolore? Error veniam et ex
                eligendi aliquid dolor est obcaecati autem molestiae labore.
              </Typography>
              <Typography align={matchesMD ? 'center' : undefined} variant='body1' paragraph>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae provident
                incidunt dignissimos ea est corrupti tempora similique dolore? Error veniam et ex
                eligendi aliquid dolor est obcaecati autem molestiae labore.
              </Typography>
              <Typography align={matchesMD ? 'center' : undefined} variant='body1' paragraph>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae provident
                incidunt dignissimos ea est corrupti tempora similique dolore? Error veniam et ex
                eligendi aliquid dolor est obcaecati autem molestiae labore.
              </Typography>
              <Typography align={matchesMD ? 'center' : undefined} variant='body1' paragraph>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae provident
                incidunt dignissimos ea est corrupti tempora similique dolore? Error veniam et ex
                eligendi aliquid dolor est obcaecati autem molestiae labore.
              </Typography>
              <Typography align={matchesMD ? 'center' : undefined} variant='body1' paragraph>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae provident
                incidunt dignissimos ea est corrupti tempora similique dolore? Error veniam et ex
                eligendi aliquid dolor est obcaecati autem molestiae labore.
              </Typography>
            </Grid>
          </Grid>
          <Grid item container justify={matchesMD ? 'center' : 'flex-end'} lg>
            <Lottie
              options={defaultOptions}
              isStopped={true}
              style={{ maxWidth: '40em', margin: 0 }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item container direction='row' justifyContent='center' className={classes.rowContainer}>
        <Grid item>
          <Typography variant='h4' gutterBottom>
            Process
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction='row'
        className={classes.rowContainer}
        style={{ backgroundColor: '#B3B3B3', height: '60em' }}
      >
        <Grid item container direction='column' alignItems={matchesMD ? 'center' : undefined} lg>
          <Grid item>
            <Typography
              variant='h4'
              align={matchesMD ? 'center' : undefined}
              gutterBottom
              style={{ color: '#000', marginTop: matchesMD ? 0 : '5em' }}
            >
              Consultation
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae autem placeat,
              reprehenderit aliquid beatae eaque magni provident laudantium dolorum illum sit
              repellendus voluptatum earum doloremque. Unde accusantium amet delectus quae?
            </Typography>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae autem placeat,
              reprehenderit aliquid beatae eaque magni provident laudantium dolorum illum sit
              repellendus voluptatum earum doloremque. Unde accusantium amet delectus quae?
            </Typography>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae autem placeat,
              reprehenderit aliquid beatae eaque magni provident laudantium dolorum illum sit
              repellendus voluptatum earum doloremque. Unde accusantium amet delectus quae?
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: 'center' }}>
          <img src={consultation} alt='handshake' width='100%' style={{ maxWidth: 700 }} />
        </Grid>
      </Grid>
      {/*  mockup*/}
      <Grid
        item
        container
        direction='row'
        className={classes.rowContainer}
        style={{ backgroundColor: '#FF7373', height: '60em' }}
      >
        <Grid item container direction='column' alignItems={matchesMD ? 'center' : undefined} lg>
          <Grid item>
            <Typography
              variant='h4'
              align={matchesMD ? 'center' : undefined}
              gutterBottom
              style={{ color: '#000', marginTop: matchesMD ? 0 : '5em' }}
            >
              mockup
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae autem placeat,
              reprehenderit aliquid beatae eaque magni provident laudantium dolorum illum sit
              repellendus voluptatum earum doloremque. Unde accusantium amet delectus quae?
            </Typography>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae autem placeat,
              reprehenderit aliquid beatae eaque magni provident laudantium dolorum illum sit
              repellendus voluptatum earum doloremque. Unde accusantium amet delectus quae?
            </Typography>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae autem placeat,
              reprehenderit aliquid beatae eaque magni provident laudantium dolorum illum sit
              repellendus voluptatum earum doloremque. Unde accusantium amet delectus quae?
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: 'center' }}>
          <img src={mockup} alt='handshake' width='100%' style={{ maxWidth: 700 }} />
        </Grid>
      </Grid>
      {/* design */}
      <Grid
        item
        container
        direction='row'
        className={classes.rowContainer}
        style={{ backgroundColor: '#A67C52', height: '60em' }}
      >
        <Grid item container direction='column' alignItems={matchesMD ? 'center' : undefined} lg>
          <Grid item>
            <Typography
              variant='h4'
              align={matchesMD ? 'center' : undefined}
              gutterBottom
              style={{ color: '#000', marginTop: matchesMD ? 0 : '5em' }}
            >
              design
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae autem placeat,
              reprehenderit aliquid beatae eaque magni provident laudantium dolorum illum sit
              repellendus voluptatum earum doloremque. Unde accusantium amet delectus quae?
            </Typography>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae autem placeat,
              reprehenderit aliquid beatae eaque magni provident laudantium dolorum illum sit
              repellendus voluptatum earum doloremque. Unde accusantium amet delectus quae?
            </Typography>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae autem placeat,
              reprehenderit aliquid beatae eaque magni provident laudantium dolorum illum sit
              repellendus voluptatum earum doloremque. Unde accusantium amet delectus quae?
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: 'center' }}>
          <img src={design} alt='handshake' width='100%' style={{ maxWidth: 700 }} />
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction='row'
        className={classes.rowContainer}
        style={{ backgroundColor: '#39B54A', height: '60em' }}
      >
        <Grid item container direction='column' alignItems={matchesMD ? 'center' : undefined} lg>
          <Grid item>
            <Typography
              variant='h4'
              align={matchesMD ? 'center' : undefined}
              gutterBottom
              style={{ color: '#000', marginTop: matchesMD ? 0 : '5em' }}
            >
              review
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae autem placeat,
              reprehenderit aliquid beatae eaque magni provident laudantium dolorum illum sit
              repellendus voluptatum earum doloremque. Unde accusantium amet delectus quae?
            </Typography>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae autem placeat,
              reprehenderit aliquid beatae eaque magni provident laudantium dolorum illum sit
              repellendus voluptatum earum doloremque. Unde accusantium amet delectus quae?
            </Typography>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae autem placeat,
              reprehenderit aliquid beatae eaque magni provident laudantium dolorum illum sit
              repellendus voluptatum earum doloremque. Unde accusantium amet delectus quae?
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: 'center' }}>
          <img src={review} alt='handshake' width='100%' style={{ maxWidth: 700 }} />
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction='row'
        className={classes.rowContainer}
        style={{ backgroundColor: '#FBB03B', height: '60em' }}
      >
        <Grid item container direction='column' alignItems={matchesMD ? 'center' : undefined} lg>
          <Grid item>
            <Typography
              variant='h4'
              align={matchesMD ? 'center' : undefined}
              gutterBottom
              style={{ color: '#000', marginTop: matchesMD ? 0 : '5em' }}
            >
              build
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae autem placeat,
              reprehenderit aliquid beatae eaque magni provident laudantium dolorum illum sit
              repellendus voluptatum earum doloremque. Unde accusantium amet delectus quae?
            </Typography>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae autem placeat,
              reprehenderit aliquid beatae eaque magni provident laudantium dolorum illum sit
              repellendus voluptatum earum doloremque. Unde accusantium amet delectus quae?
            </Typography>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae autem placeat,
              reprehenderit aliquid beatae eaque magni provident laudantium dolorum illum sit
              repellendus voluptatum earum doloremque. Unde accusantium amet delectus quae?
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: 'center' }}>
          <img src={build} alt='handshake' width='100%' style={{ maxWidth: 700 }} />
        </Grid>
      </Grid>
      {/* launch */}
      <Grid
        item
        container
        direction='row'
        className={classes.rowContainer}
        style={{ backgroundColor: '#C1272D', height: '60em' }}
      >
        <Grid item container direction='column' alignItems={matchesMD ? 'center' : undefined} lg>
          <Grid item>
            <Typography
              variant='h4'
              align={matchesMD ? 'center' : undefined}
              gutterBottom
              style={{ color: '#000', marginTop: matchesMD ? 0 : '5em' }}
            >
              launch
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae autem placeat,
              reprehenderit aliquid beatae eaque magni provident laudantium dolorum illum sit
              repellendus voluptatum earum doloremque. Unde accusantium amet delectus quae?
            </Typography>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae autem placeat,
              reprehenderit aliquid beatae eaque magni provident laudantium dolorum illum sit
              repellendus voluptatum earum doloremque. Unde accusantium amet delectus quae?
            </Typography>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae autem placeat,
              reprehenderit aliquid beatae eaque magni provident laudantium dolorum illum sit
              repellendus voluptatum earum doloremque. Unde accusantium amet delectus quae?
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: 'center' }}>
          <img src={launch} alt='handshake' width='100%' style={{ maxWidth: 300 }} />
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction='row'
        className={classes.rowContainer}
        style={{ backgroundColor: '#8E45CE', height: '60em' }}
      >
        <Grid item container direction='column' alignItems={matchesMD ? 'center' : undefined} lg>
          <Grid item>
            <Typography
              variant='h4'
              align={matchesMD ? 'center' : undefined}
              gutterBottom
              style={{ color: '#000', marginTop: matchesMD ? 0 : '5em' }}
            >
              maintain
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae autem placeat,
              reprehenderit aliquid beatae eaque magni provident laudantium dolorum illum sit
              repellendus voluptatum earum doloremque. Unde accusantium amet delectus quae?
            </Typography>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae autem placeat,
              reprehenderit aliquid beatae eaque magni provident laudantium dolorum illum sit
              repellendus voluptatum earum doloremque. Unde accusantium amet delectus quae?
            </Typography>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae autem placeat,
              reprehenderit aliquid beatae eaque magni provident laudantium dolorum illum sit
              repellendus voluptatum earum doloremque. Unde accusantium amet delectus quae?
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: 'center' }}>
          <img src={maintain} alt='handshake' width='100%' style={{ maxWidth: 700 }} />
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction='row'
        className={classes.rowContainer}
        style={{ backgroundColor: '#29ABE2', height: '60em' }}
      >
        <Grid item container direction='column' alignItems={matchesMD ? 'center' : undefined} lg>
          <Grid item>
            <Typography
              variant='h4'
              align={matchesMD ? 'center' : undefined}
              gutterBottom
              style={{ color: '#000', marginTop: matchesMD ? 0 : '5em' }}
            >
              iterate
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae autem placeat,
              reprehenderit aliquid beatae eaque magni provident laudantium dolorum illum sit
              repellendus voluptatum earum doloremque. Unde accusantium amet delectus quae?
            </Typography>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae autem placeat,
              reprehenderit aliquid beatae eaque magni provident laudantium dolorum illum sit
              repellendus voluptatum earum doloremque. Unde accusantium amet delectus quae?
            </Typography>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae autem placeat,
              reprehenderit aliquid beatae eaque magni provident laudantium dolorum illum sit
              repellendus voluptatum earum doloremque. Unde accusantium amet delectus quae?
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: 'center' }}>
          <img src={iterate} alt='handshake' width='100%' style={{ maxWidth: 700 }} />
        </Grid>
      </Grid>
    </Grid>
  );
}
export default Revolution;
