import Lottie from 'react-lottie';
import { makeStyles, useTheme } from '@mui/styles';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import animationData from '../animations/landinganimation/data';
import ButtonArrow from '../components/ui/ButtonArrow';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import CallToAction from './ui/CallToAction';

import CustomSoftwareIcon from '../assets/images/CustomSoftwareIcon.svg';
import mobileAppsIcon from '../assets/images/mobileIcon.svg';
import websiteIcon from '../assets/images/websiteIcon.svg';
import repeatingBackground from '../assets/images/repeatingBackground.svg';
import infoBackground from '../assets/images/infoBackground.svg';

const useStyles = makeStyles((theme) => ({
  content: {
    height: '100%',
    width: '100%',
  },
  animation: {
    maxWidth: '50em !important',
    minWidth: '21em !important',
    marginTop: '2em !important',
    marginLeft: '10% !important',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '30em !important',
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: '80px !important',
    marginRight: '40px!important ',
  },
  lernButton: {
    borderRadius: '80px !important',
  },
  buttonContainer: {
    marginTop: '1em !important',
  },
  mainContainer: {
    marginTop: '5em !important',
    [theme.breakpoints.down('md')]: {
      marginTop: '3em !important',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '2em !important',
    },
  },
  heroTextContainer: {
    minWidth: '21.5em !important',
    marginLeft: '1em !important',
    [theme.breakpoints.down('xs')]: {
      marginLeft: '0 !important',
    },
  },
  specialText: {
    fontFamily: 'Pacifico !important',
    color: theme.palette.common.red,
  },
  icon: {
    marginLeft: '2em !important',
    [theme.breakpoints.down('xs')]: {
      marginLeft: '0 !important',
    },
  },
  servicesContainer: {
    marginTop: '12em !important',
    [theme.breakpoints.down('sm')]: {
      padding: '25 !important',
    },
  },
  revolutionBackground: {
    backgroundImage: `url(${repeatingBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  },
  revolutionCard: {
    position: 'absolute',
    boxShadow: theme.shadows[10],
    borderRadius: '20px !important',
    padding: '10em',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '8em !important',
      paddingBottom: '8em !important',
      paddingLeft: '0px !important',
      paddingRight: '0px !important',
    },
  },
  infoBackground: {
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  },
}));

const LandingPage = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className={classes.content}>
      <Grid container direction='column' className={classes.mainContainer}>
        <Grid item>
          {/*-----Hero Block----*/}
          <Grid container justifyContent='flex-end' alignItems='center' direction='row'>
            <Grid sm item className={classes.heroTextContainer}>
              <Typography variant='h2' align='center' direction='row'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </Typography>
              <Grid container justifyContent='center' className={classes.buttonContainer}>
                <Grid item>
                  <Button
                    className={classes.estimateButton}
                    variant='contained'
                    component={Link}
                    to='/estimate'
                  >
                    Free estimate
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    component={Link}
                    to='/revolution'
                    variant='outlined'
                    color='error'
                    className={classes.lernButton}
                    onClick={() => props.setValue(2)}
                  >
                    Learn more{' '}
                    <ButtonArrow width={20} height={20} fill={theme.palette.common.red} />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid sm item className={classes.animation}>
              <Lottie options={defaultOptions} width='500px' height='auto' />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          {' '}
          {/*-----CustomSoftware  Block----*/}
          <Grid
            container
            direction='row'
            justifyContent={matchesSM ? 'center' : undefined}
            className={classes.servicesContainer}
          >
            <Grid
              item
              style={{
                marginLeft: matchesSM ? 0 : '5em',
                textAlign: matchesSM ? 'center' : undefined,
              }}
            >
              <Typography variant='h4'>Custom Software Development </Typography>
              <Typography variant='subtitle1'>Save Energy,Save Time, Save Money </Typography>
              <Typography variant='subtitle1'>
                Compelete digutal<span className={classes.specialText}>celeberation</span>
              </Typography>
              <Button
                component={Link}
                to='/customsoftware'
                variant='outlined'
                color='error'
                className={classes.lernButton}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(1);
                }}
              >
                Learn more <ButtonArrow width={20} height={20} fill={theme.palette.common.red} />
              </Button>
            </Grid>
            <Grid item>
              <img alt='Custom Software Icon' src={CustomSoftwareIcon} className={classes.icon} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          {' '}
          {/*-----Ios/Android Block----*/}
          <Grid
            container
            direction='row'
            justifyContent={matchesSM ? 'center' : 'flex-end'}
            className={classes.servicesContainer}
          >
            <Grid item style={{ textAlign: matchesSM ? 'center' : undefined }}>
              <Typography variant='h4'>Ios/Android App Development </Typography>
              <Typography variant='subtitle1'>
                Extend Functionality. Compelete digutal. Compelete digutal
              </Typography>
              <Typography variant='subtitle1'>entegratde your web</Typography>
              <Button
                component={Link}
                to='/mobileapps'
                variant='outlined'
                color='error'
                className={classes.lernButton}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(2);
                }}
              >
                Learn more <ButtonArrow width={20} height={20} fill={theme.palette.common.red} />
              </Button>
            </Grid>
            <Grid item style={{ marginRight: matchesSM ? 0 : '5em' }}>
              <img alt='mobile Apps Icon' src={mobileAppsIcon} className={classes.icon} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          {' '}
          {/*-----Websites  Block----*/}
          <Grid
            container
            direction='row'
            justifyContent={matchesSM ? 'center' : undefined}
            className={classes.servicesContainer}
          >
            <Grid
              item
              style={{
                marginLeft: matchesSM ? 0 : '5em',
                textAlign: matchesSM ? 'center' : undefined,
              }}
            >
              <Typography variant='h4'>Website Development </Typography>
              <Typography variant='subtitle1'>Save Energy,Save Time, Save Money </Typography>
              <Typography variant='subtitle1'>
                Compelete digutal<span className={classes.specialText}>celeberation</span>
              </Typography>
              <Button
                component={Link}
                to='/websites'
                variant='outlined'
                color='error'
                className={classes.lernButton}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(3);
                }}
              >
                Learn more <ButtonArrow width={20} height={20} fill={theme.palette.common.red} />
              </Button>
            </Grid>
            <Grid item>
              <img alt='website Icon' src={websiteIcon} className={classes.icon} />
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          {/*-----Revolution Block----*/}
          <Grid
            container
            alignItems='center'
            justifyContent='center'
            style={{ height: '100em', marginTop: '12em' }}
          >
            <Card className={classes.revolutionCard}>
              <CardContent>
                <Grid container direction='column' style={{ textAlign: 'center' }}>
                  <Grid item>
                    <Typography variant='h3'>The Revolution</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant='subtitle1'>
                      Lorem ipsum dolor sit amet consectetur
                    </Typography>
                    <Button
                      component={Link}
                      to='/revolution'
                      variant='outlined'
                      color='error'
                      className={classes.lernButton}
                      onClick={() => props.setValue(2)}
                    >
                      Learn more{' '}
                      <ButtonArrow width={20} height={20} fill={theme.palette.common.red} />
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            <div className={classes.revolutionBackground} />
          </Grid>
        </Grid>
        <Grid item>
          {/* The Information block */}
          <Grid container style={{ height: '50em' }} direction='row' alignItems='center'>
            <Grid
              item
              container
              style={{ position: 'absolute', textAlign: matchesSM ? 'center' : 'inherit' }}
              direction={matchesSM ? 'column' : 'row'}
              spacing={matchesSM ? 10 : 0}
            >
              <Grid item sm style={{ marginLeft: matchesSM ? 0 : matchesSM ? '2em' : '5em' }}>
                <Grid container direction='column'>
                  <Typography variant='h2' style={{ color: 'white' }}>
                    About Us
                  </Typography>
                  <Typography variant='subtitle2'> Let's get personal.</Typography>
                  <Grid item>
                    <Button
                      variant='outlined'
                      className={classes.lernButton}
                      style={{ border: '1px solid white', borderColor: 'white' }}
                      component={Link}
                      to='/about'
                      onClick={() => {
                        props.setValue(1);
                        props.setSelectedIndex(3);
                      }}
                    >
                      {' '}
                      <span style={{ marginRight: '10px' }}>Learn More</span>
                      <ButtonArrow width={15} height={15} fill='white' />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>

              <Grid
                item
                sm
                style={{
                  marginRight: matchesSM ? 0 : matchesSM ? '2em' : '5em',
                  textAlign: matchesSM ? 'center' : 'right',
                }}
              >
                <Grid container direction='column'>
                  <Typography variant='h2' style={{ color: 'white' }}>
                    Contact Us
                  </Typography>
                  <Typography variant='subtitle2'>say hello</Typography>
                  <Grid item>
                    <Button
                      variant='outlined'
                      className={classes.lernButton}
                      style={{ border: '1px solid white', borderColor: 'white' }}
                      component={Link}
                      to='/contact'
                      onClick={() => {
                        props.setValue(1);
                        props.setSelectedIndex(4);
                      }}
                    >
                      {' '}
                      <span style={{ marginRight: '10px' }}>Learn More</span>
                      <ButtonArrow width={15} height={15} fill='white' />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <div className={classes.infoBackground} />
          </Grid>
        </Grid>
        <Grid item>
          {/*-----Call To Action Block----*/}
          <CallToAction setValue={props.setValue} />
        </Grid>
      </Grid>
    </div>
  );
};
export default LandingPage;
