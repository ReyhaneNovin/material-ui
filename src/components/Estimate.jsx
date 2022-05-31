import React, { useState } from 'react';
import { cloneDeep } from 'lodash';
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
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: '20px',
    backgroundColor: theme.palette.common.red,
    height: 50,
    width: '225',
    fontSize: '1.2em !important',
    marginTop: '5em',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
}));
const defaultQuestions = [
  {
    id: 1,
    title: 'Wich service Are you intersted in?',
    active: true,
    options: [
      {
        id: 1,
        title: 'Custom softWare Development',
        subtitle: null,
        icon: software,
        iconAlt: 'software',
        selected: false,
        const: 0,
      },
      {
        id: 2,
        title: 'Ios/Android  Development',
        subtitle: null,
        icon: mobile,
        iconAlt: 'mobile',
        selected: false,
        const: 0,
      },
      {
        id: 3,
        title: 'website',
        subtitle: null,
        icon: website,
        iconAlt: 'camputer',
        selected: false,
        const: 0,
      },
    ],
  },
];
// const newQuestions = cloneDeep(defaultQuestions);
// newQuestions[0].options[0].selected = true;
// console.log(defaultQuestions[0].options[0]);
const softwareQuestions = [
  { ...defaultQuestions[0], active: false },
  {
    id: 2,
    title: 'Which platforms do you need supported?',
    subtitle: 'Select all that apply.',
    options: [
      {
        id: 1,
        title: 'Web Application',
        subtitle: null,
        icon: website,
        iconAlt: 'computer outline',
        selected: false,
        cost: 100,
      },
      {
        id: 2,
        title: 'iOS Application',
        subtitle: null,
        icon: iphone,
        iconAlt: 'outline of iphone',
        selected: false,
        cost: 100,
      },
      {
        id: 3,
        title: 'Android Application',
        subtitle: null,
        icon: android,
        iconAlt: 'outlines of android phone',
        selected: false,
        cost: 100,
      },
    ],
    active: true,
  },
  {
    id: 3,
    title: 'Which features do you expect to use?',
    subtitle: 'Select all that apply.',
    options: [
      {
        id: 1,
        title: 'Photo/Video',
        subtitle: null,
        icon: camera,
        iconAlt: 'camera outline',
        selected: false,
        cost: 25,
      },
      {
        id: 2,
        title: 'GPS',
        subtitle: null,
        icon: gps,
        iconAlt: 'gps pin',
        selected: false,
        cost: 25,
      },
      {
        id: 3,
        title: 'File Transfer',
        subtitle: null,
        icon: upload,
        iconAlt: 'outline of cloud with arrow pointing up',
        selected: false,
        cost: 25,
      },
    ],
    active: false,
  },
  {
    id: 4,
    title: 'Which features do you expect to use?',
    subtitle: 'Select all that apply.',
    options: [
      {
        id: 1,
        title: 'Users/Authentication',
        subtitle: null,
        icon: users,
        iconAlt: 'outline of a person with a plus sign',
        selected: false,
        cost: 25,
      },
      {
        id: 2,
        title: 'Biometrics',
        subtitle: null,
        icon: biometrics,
        iconAlt: 'fingerprint',
        selected: false,
        cost: 25,
      },
      {
        id: 3,
        title: 'Push Notifications',
        subtitle: null,
        icon: bell,
        iconAlt: 'outline of a bell',
        selected: false,
        cost: 25,
      },
    ],
    active: false,
  },
  {
    id: 5,
    title: 'What type of custom features do you expect to need?',
    subtitle: 'Select one.',
    options: [
      {
        id: 1,
        title: 'Low Complexity',
        subtitle: '(Informational)',
        icon: info,
        iconAlt: "'i' inside a circle",
        selected: false,
        cost: 25,
      },
      {
        id: 2,
        title: 'Medium Complexity',
        subtitle: '(Interactive, Customizable, Realtime)',
        icon: customized,
        iconAlt: 'two toggle switches',
        selected: false,
        cost: 50,
      },
      {
        id: 3,
        title: 'High Complexity',
        subtitle: '(Data Modeling and Computation)',
        icon: data,
        iconAlt: 'outline of line graph',
        selected: false,
        cost: 100,
      },
    ],
    active: false,
  },
  {
    id: 6,
    title: 'How many users do you expect?',
    subtitle: 'Select one.',
    options: [
      {
        id: 1,
        title: '0-10',
        subtitle: null,
        icon: person,
        iconAlt: 'person outline',
        selected: false,
        cost: 1,
      },
      {
        id: 2,
        title: '10-100',
        subtitle: null,
        icon: persons,
        iconAlt: 'outline of two people',
        selected: false,
        cost: 1.25,
      },
      {
        id: 3,
        title: '100+',
        subtitle: null,
        icon: people,
        iconAlt: 'outline of three people',
        selected: false,
        cost: 1.5,
      },
    ],
    active: false,
  },
];

const websiteQuestions = [
  { ...defaultQuestions[0], active: false },
  {
    id: 2,
    title: 'Which type of website are you wanting?',
    subtitle: 'Select one.',
    options: [
      {
        id: 1,
        title: 'Basic',
        subtitle: '(Informational)',
        icon: info,
        iconAlt: 'person outline',
        selected: false,
        cost: 100,
      },
      {
        id: 2,
        title: 'Interactive',
        subtitle: "(Users, API's, Messaging)",
        icon: customized,
        iconAlt: 'outline of two people',
        selected: false,
        cost: 200,
      },
      {
        id: 3,
        title: 'E-Commerce',
        subtitle: '(Sales)',
        icon: globe,
        iconAlt: 'outline of three people',
        selected: false,
        cost: 250,
      },
    ],
    active: true,
  },
];

const Estimate = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [questions, setQuestions] = useState(softwareQuestions);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: estimateAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  const nextQuestion = () => {
    const newQuestions = cloneDeep(questions);
    const currentlyActive = newQuestions.filter((question) => question.active);
    const activeIndex = currentlyActive[0].id - 1;
    const nextIndex = activeIndex + 1;
    newQuestions[activeIndex] = { ...currentlyActive[0], active: false };
    newQuestions[nextIndex] = { ...newQuestions[nextIndex], active: true };
    setQuestions(newQuestions);
  };
  const previosQuestion = () => {
    const newQuestions = cloneDeep(questions);
    const currentlyActive = newQuestions.filter((question) => question.active);
    const activeIndex = currentlyActive[0].id - 1;
    const nextIndex = activeIndex - 1;
    newQuestions[activeIndex] = { ...currentlyActive[0], active: false };
    newQuestions[nextIndex] = { ...newQuestions[activeIndex], active: true };
    setQuestions(newQuestions);
  };

  return (
    <Grid container direction='row'>
      <Grid item container mt={2} mb={25} alignItems='center'>
        <Grid item mt={2} pl={5} direction='column' lg={6}>
          <Typography variant='h2'>Estimate</Typography>
          <Grid item style={{ marginRight: '10em', maxWidth: '50em', marginTop: '5em' }}>
            <Lottie options={defaultOptions} height='100%' width='100%' />
          </Grid>
        </Grid>

        <Grid item direction='column' lg={6}>
          {defaultQuestions
            .filter((question) => question.active)
            .map((question, index) => (
              <React.Fragment key={index}>
                {' '}
                <Grid item>
                  <Typography
                    variant='h2'
                    textAlign='center'
                    style={{ fontWeight: ' 500em', marginBottom: '2.5em', marginTop: '4.5em' }}
                    gutterBottom
                  >
                    {question.title}
                  </Typography>
                  <Typography
                    variant='body1'
                    alignItems='center'
                    style={{ marginBottom: '2.5em' }}
                    gutterBottom
                  >
                    {question.subtitle}
                  </Typography>
                </Grid>
                <Grid item container>
                  {question.options.map((option) => (
                    <Grid item container direction='column' md>
                      <Grid item style={{ maxWidth: '12em' }}>
                        <Typography
                          variant='h6'
                          alignItems='center'
                          style={{ marginBottom: ' 1em' }}
                        >
                          {option.title}
                        </Typography>
                        <Typography variant='caption' alignItems='center'>
                          {option.subtitle}
                        </Typography>
                      </Grid>

                      <Grid item>
                        <img src={option.icon} alt={option.iconAlt} className={classes.icon} />
                      </Grid>
                    </Grid>
                  ))}
                </Grid>
              </React.Fragment>
            ))}
          <Grid item container justifyContent='space-between'>
            <Grid item>
              <IconButton onClick={previosQuestion}>
                {' '}
                <img src={backArrow} alt='backArrow' />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton onClick={nextQuestion}>
                {' '}
                <img src={forwardArrow} alt='forwardArrow' />
              </IconButton>
            </Grid>
          </Grid>
          <Grid item>
            <Button variant='contained' className={classes.estimateButton}>
              Get Estimate
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Estimate;
