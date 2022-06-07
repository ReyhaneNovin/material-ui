import React from 'react';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import Hidden from '@mui/material/Hidden';
import IconButton from '@mui/material/IconButton';
import backArrow from '../assets/images/backArrow.svg';
import forwardArrow from '../assets/images/forwardArrow.svg';
import integrationAnimation from '../animations/integrationAnimation/data.json';
import swissKnife from '../assets/images/swissKnife.svg';
import extendAccess from '../assets/images/extendAccess.svg';
import increaseEngagement from '../assets/images/increaseEngagement.svg';
import CallToAction from './ui/CallToAction';
const useStyles = makeStyles((theme) => ({
  heading: {
    maxWidth: '40em !important',
  },
  arrowContainer: {
    marginTop: '0.5em',
  },
  mainContainer: {
    paddingLeft: '1em !important',
    paddingRight: '1em !important',
    paddingTop: '2em !important',
    paddingBottom: '10em  !important',
  },
  itemContainer: {
    maxWidth: '40em !important',
  },
}));

const MobileApps = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));
  const defaultOption = {
    loop: true,
    autoplay: true,
    animationData: integrationAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
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
            to='/customsoftware'
            onClick={() => props.setSelectedIndex(1)}
          >
            <img src={backArrow} alt='Back to customsoftware page' />
          </IconButton>
        </Grid>
        <Grid item container direction='column' className={classes.heading} justifyContent='center'>
          <Grid item>
            <Typography variant='h2'>IOS/Android APP development</Typography>
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
            to='/websites'
            onClick={() => props.setSelectedIndex(3)}
          >
            <img src={forwardArrow} alt='forward to website development page' />
          </IconButton>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ marginTop: '15em', marginBottom: '15em' }}
      >
        <Grid item container direction='column' md textAlign='center'>
          <Grid item>
            <Typography variant='h4' gutterBottom alignItems={matchesSM ? 'center' : undefined}>
              INTEGERAITION
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1' paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates recusandae
              repellat eos necessitatibus enim quia iure vel omnis nobis, excepturi alias beatae
              cupiditate iste consectetur minima autem voluptatibus delectus deleniti?
            </Typography>
            <Typography variant='body1' paragraph>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam modi excepturi
              aspernatur voluptas rerum, mollitia ullam earum adipisci debitis quam illo illum,
              incidunt nostrum voluptatibus corrupti corporis aut officiis nihil.
            </Typography>
          </Grid>
        </Grid>
        <Grid item md>
          <Lottie options={defaultOption} style={{ maxWidth: '20em' }} />
        </Grid>
        <Grid item container direction='column' md textAlign='center'>
          <Grid item>
            <Typography variant='h4' gutterBottom>
              Simulaton Platforms support
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1' paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates recusandae
              repellat eos necessitatibus enim quia iure vel omnis nobis, excepturi alias beatae
              cupiditate iste consectetur minima autem voluptatibus delectus deleniti?
            </Typography>
            <Typography variant='body1' paragraph>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam modi excepturi
              aspernatur voluptas rerum, mollitia ullam earum adipisci debitis quam illo illum,
              incidunt nostrum voluptatibus corrupti corporis aut officiis nihil.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        className={classes.rowContainer}
      >
        <Grid item container direction='column' md alignItems='center'>
          <Grid item>
            <Typography variant='h4' gutterBottom textAlign='center'>
              Extend Functionality
            </Typography>
          </Grid>
          <Grid item>
            <img src={swissKnife} alt='swiss' />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction='column'
          alignItems='center'
          md
          style={{ marginTop: matchesMD ? '10em' : 0, marginBottom: matchesMD ? '10em' : 0 }}
        >
          <Grid item>
            <Typography variant='h4' gutterBottom textAlign='center'>
              Extend Access
            </Typography>
          </Grid>
          <Grid item>
            <img src={extendAccess} alt='extendAccess' style={{ maxWidth: '28em' }} />
          </Grid>
        </Grid>
        <Grid item container direction='column' md alignItems='center'>
          <Grid item>
            <Typography variant='h4' gutterBottom textAlign='center'>
              Extend Engagment
            </Typography>
          </Grid>
          <Grid item>
            <img src={increaseEngagement} alt='increaseEngagement' />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction />
      </Grid>
    </Grid>
  );
};

export default MobileApps;
