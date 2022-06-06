import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import { makeStyles, useTheme } from '@mui/styles';
import IconButton from '@mui/material/IconButton';
import { Button } from '@mui/material';
import Lottie from 'react-lottie';
import { cloneDeep } from 'lodash';
import { useState, Fragment } from 'react';
import { Dialog } from '@mui/material';
import { DialogContent } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Snackbar } from '@mui/material';
import { CircularProgress } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

import check from '../assets/images/check.svg';
import send from '../assets/images/send.svg';
import software from '../assets/images/software.svg';
import mobile from '../assets/images/mobile.svg';
import website from '../assets/images/website.svg';

import backArrow from '../assets/images/backArrow.svg';
import backArrowDisabled from '../assets/images/backArrowDisabled.svg';
import forwardArrow from '../assets/images/forwardArrow.svg';
import forwardArrowDisabled from '../assets/images/forwardArrowDisabled.svg';
import camera from '../assets/images/camera.svg';
import upload from '../assets/images/upload.svg';
import person from '../assets/images/person.svg';
import persons from '../assets/images/persons.svg';
import info from '../assets/images/info.svg';
import bell from '../assets/images/bell.svg';
import people from '../assets/images/people.svg';
import users from '../assets/images/users.svg';
import iPhone from '../assets/images/iphone.svg';
import gps from '../assets/images/gps.svg';
import customized from '../assets/images/customized.svg';
import data from '../assets/images/data.svg';
import android from '../assets/images/android.svg';
import globe from '../assets/images/globe.svg';
import biometrics from '../assets/images/biometrics.svg';
import airplane from '../assets/images/send.svg';

import estimateAnimation from '../animations/estimateAnimation/data.json';
import axios from 'axios';
import React from 'react';

const useStyle = makeStyles((theme) => ({
  icon: {
    width: '12em',
    height: '10em',
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: '50px !important',
    backgroundColor: `${theme.palette.common.orange}!important`,
    height: 50,
    width: 225,
    marginTop: '5em',
    fontSize: '1.25rem',
    '&:hover': {
      backgroundColor: `{theme.palette.secondary.light}!impotant`,
    },
  },
  message: {
    border: `2px solid ${theme.palette.common.red}`,
    marginTop: '5em !important',
    marginBottom: '2em!important ',
    borderRadius: '0.75em !important',
  },
  specialText: {
    fontSize: '1.5rem',
    color: theme.palette.common.red,
    fontWeight: '700',
  },
}));

const defaultQuestions = [
  {
    id: 1,
    title: 'Which service are you interested in?',
    active: true,
    options: [
      {
        id: 1,
        title: 'Custom Software Development',
        subtitle: null,
        icon: software,
        iconAlt: 'three floating screens',
        selected: false,
        cost: 0,
      },
      {
        id: 2,
        title: 'iOS/Android App Development',
        subtitle: null,
        icon: mobile,
        iconAlt: 'outlines of phones and tablets',
        selected: false,
        cost: 0,
      },
      {
        id: 3,
        title: 'Website Development',
        subtitle: null,
        icon: website,
        iconAlt: 'computer outline',
        selected: false,
        cost: 0,
      },
    ],
  },
];

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
        icon: iPhone,
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

function Estimate() {
  const classes = useStyle();
  const theme = useTheme();

  const machesMD = useMediaQuery(theme.breakpoints.down('md'));
  const machesSM = useMediaQuery(theme.breakpoints.down('sm'));

  const [questions, setQuestions] = useState(defaultQuestions);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [name, setName] = useState('');

  const [email, setEmail] = useState('');
  const [emailHelper, setEmailHelper] = useState('');

  const [phone, setPhone] = useState('');
  const [phoneHelper, setPhoneHelper] = useState('');

  const [message, setMessage] = useState('');
  const [total, setTotal] = useState(0);
  const [service, setService] = useState([]);
  const [platforms, setPlatforms] = useState([]);
  const [features, setFeatures] = useState([]);
  const [customFeatures, setCustomFeatures] = useState('');
  const [category, setCategory] = useState('');
  const [users, setUsers] = useState('');

  const [alert, setAlert] = useState({ open: false, message: '', backgroundColor: '' });
  const [loading, setLoading] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: false,
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

  const previousQuestion = () => {
    const newQuestions = cloneDeep(questions);
    const currentlyActive = newQuestions.filter((question) => question.active);
    const activeIndex = currentlyActive[0].id - 1;
    const nextIndex = activeIndex - 1;
    newQuestions[activeIndex] = { ...currentlyActive[0], active: false };
    newQuestions[nextIndex] = { ...newQuestions[nextIndex], active: true };
    setQuestions(newQuestions);
  };

  const navigationPreviousDisabled = () => {
    const currentlyActive = questions.filter((question) => question.active);
    if (currentlyActive[0].id === 1) {
      return true;
    } else {
      return false;
    }
  };
  const navigationNextDisabled = () => {
    const currentlyActive = questions.filter((question) => question.active);
    if (currentlyActive[0].id === questions[questions.length - 1].id) {
      return true;
    } else {
      return false;
    }
  };
  const handleSelect = (id) => {
    const newQuestions = cloneDeep(questions);
    const currentlyActive = questions.filter((question) => question.active);
    const activeIndex = currentlyActive[0].id - 1;
    const newSelected = newQuestions[activeIndex].options[id - 1];
    const previousSelected = currentlyActive[0].options.filter((option) => option.selected);

    switch (currentlyActive[0].subtitle) {
      case 'Select one':
        if (previousSelected[0]) {
          previousSelected[0].selected = !previousSelected[0].selected;
        }
        newSelected.selected = !newSelected.selected;
        break;
      default:
        newSelected.selected = !newSelected.selected;
        break;
    }

    switch (newSelected.title) {
      case 'Custom Software Development':
        setQuestions(softwareQuestions);
        setService(newSelected.title);
        setPlatforms([]);
        setFeatures([]);
        setCustomFeatures('');
        setCategory('');
        setUsers('');
        break;
      case 'iOS/Android App Development':
        setQuestions(softwareQuestions);
        setService(newSelected.title);
        setPlatforms([]);
        setFeatures([]);
        setCustomFeatures('');
        setCategory('');
        setUsers('');
        break;
      case 'Website Development':
        setQuestions(websiteQuestions);
        setService(newSelected.title);
        setPlatforms([]);
        setFeatures([]);
        setCustomFeatures('');
        setCategory('');
        setUsers('');
        break;

      default:
        setQuestions(newQuestions);
    }
  };
  const onChange = (event) => {
    let valid;
    switch (event.target.id) {
      case 'email':
        setEmail(event.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value);
        if (!valid) {
          setEmailHelper('Invalid email');
        } else {
          setEmailHelper('');
        }
        break;
      case 'phone':
        setPhone(event.target.value);
        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(event.target.value);
        if (!valid) {
          setPhoneHelper('Invalid phone');
        } else {
          setPhoneHelper('');
        }
        break;
      default:
        break;
    }
  };
  const getTotal = () => {
    let cost = 0;
    const selections = questions
      .map((question) => question.options.filter((option) => option.selected))
      .filter((question) => question.length > 0);
    selections.map((options) => options.map((option) => (cost += option.cost)));
    if (questions.length > 2) {
      const userCost = questions
        .filter((question) => question.title === 'How many users di you ecpect?')
        .map((question) => question.options.filter((option) => option.selected))[0][0];
      setUsers(userCost.title);
      cost -= userCost.cost;
      cost *= userCost.cost;

      console.log(cost);
    }
    setTotal(cost);
  };
  const getPlatforms = () => {
    let newPlatforms = [];
    if (questions.length > 2) {
      questions
        .filter((question) => question.title === 'wich platforms do you need?')
        .map((question) => question.options.filter((option) => option.selected))[0]
        .map((option) => newPlatforms.push(option.title));
      console.log(newPlatforms);
      setPlatforms(newPlatforms);
    }
  };
  const getFeatures = () => {
    let newFeatures = [];
    if (questions.length > 2) {
      questions
        .filter((question) => question.title === 'wich features do you need?')
        .map((question) => question.options.filter((option) => option.selected))
        .map((option) => option.map((newFeatures) => newFeatures.push(newFeatures.title)));
      setFeatures(newFeatures);
    }
  };
  const getCustomFeatures = () => {
    if (questions.length > 2) {
      const newCustomFeatures = questions
        .filter((question) => question.title === 'wich CustomFeatures do you need?')
        .map((question) => question.options.filter((option) => option.selected))[0][0].title;
      setCustomFeatures(newCustomFeatures);
    }
  };
  const getCategory = () => {
    if (questions.length === 2) {
      const newCategory = questions
        .filter((question) => question.title === 'which type of website?')[0]
        .options.filter((option) => option.selected)[0].title;
      console.log(newCategory);
      setCategory(newCategory);
    }
  };

  const sendEstimate = () => {
    setLoading(true);

    axios
      .get('https://jsonplaceholder.typicode.com/users', {
        params: {
          email: email,
          name: name,
          phone: phone,
          message: message,
          total: total,
          category: category,
          service: service,
          platforms: platforms,
          features: features,
          customFeatures: customFeatures,
          users: users,
        },
      })

      .then((res) => {
        setLoading(false);

        setDialogOpen(false);
        setAlert({ open: true, message: 'Message sent Successfuly', backgroundColor: '#4BB543' });
      })
      .catch((err) => {
        setLoading(false);
        setAlert({
          open: true,
          message: 'something went wrong ,please try again',
          backgroundColor: '#FF3232',
        });
      });
  };
  const buttonContants = (
    <>
      send Message
      <img src={airplane} alt='airplane' style={{ marginLeft: '1em' }} />
    </>
  );
  return (
    <Grid container direction='row'>
      {/*  */}
      <Grid item container direction='column' lg>
        <Grid item style={{ marginTop: '2em', marginLeft: '5em' }}>
          <Typography variant='h2' align={machesMD ? 'center' : undefined}>
            Estimate
          </Typography>
        </Grid>
        <Grid item style={{ marginRight: '10em', maxWidth: '50em', marginTop: '7.5em' }}>
          <Lottie options={defaultOptions} width='100%' height='100%' />
        </Grid>
      </Grid>
      {/*  */}
      <Grid
        item
        container
        alignItems='center'
        direction='column'
        lg
        style={{ marginRight: machesMD ? 0 : '2em', marginBottom: '15em' }}
      >
        {questions
          .filter((question) => question.active)
          .map((question, index) => (
            <React.Fragment key={index}>
              <Grid item>
                <Typography
                  variant='h2'
                  alignItems='center'
                  gutterBottom
                  style={{
                    fontWeight: 500,
                    marginTop: '5em',
                    fontSize: '1.25rem',
                    lineHeight: '1.25',
                  }}
                >
                  {question.title}
                </Typography>
                <Typography
                  variant='body1'
                  align='center'
                  style={{ marginBottom: '2.5' }}
                  gutterBottom
                >
                  {question.subtitle}
                </Typography>
              </Grid>

              <Grid item container>
                {question.options.map((option) => (
                  <Grid
                    container
                    direction='column'
                    md
                    onClick={() => handleSelect(option.id)}
                    component={Button}
                    style={{
                      display: 'grid',
                      borderRadius: 0,
                      textTransform: 'none',
                      backgroundColor: option.selected ? 'red' : null,
                    }}
                  >
                    <Grid item style={{ maxWidth: '14em' }}>
                      <Typography
                        variant='h6'
                        align='center'
                        gutterBottom
                        style={{ marginBottom: '1em' }}
                      >
                        {option.title}
                      </Typography>
                      <Typography variant='caption' align='center'>
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

        <Grid
          item
          container
          justifyContent='space-between'
          style={{ width: '18em', marginTop: '3em' }}
        >
          <Grid item>
            <IconButton disabled={navigationPreviousDisabled()} onClick={previousQuestion}>
              <img
                src={navigationPreviousDisabled() ? backArrowDisabled : backArrow}
                alt='previos question'
              />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton onClick={nextQuestion} disabled={navigationNextDisabled()}>
              <img
                src={navigationNextDisabled() ? forwardArrowDisabled : forwardArrow}
                alt='next question'
              />
            </IconButton>
          </Grid>
        </Grid>
        <Grid item mt={3}>
          <Button
            variant='contained'
            className={classes.estimateButton}
            onClick={() => {
              setDialogOpen(true);
              getTotal();
              getPlatforms();
              getFeatures();
              getCustomFeatures();
              getCategory();
            }}
          >
            Get estimate
          </Button>
        </Grid>
      </Grid>
      <Dialog
        open={dialogOpen}
        fullScreen={machesSM}
        onClose={() => setDialogOpen(false)}
        fullWidth
        maxWidth='lg'
        PaperProps={{
          style: {
            paddingTop: machesMD ? '0' : '3em',
            paddingBottom: machesMD ? '0' : '3em',
            paddingLeft: machesMD ? '0' : '5em',
            paddingRight: machesMD ? '0' : '5em',
          },
        }}
      >
        <Grid container justifyContent='center'>
          <Grid item>
            <Typography variant='h2' alignItems={machesMD ? 'center' : undefined}>
              Estimate
            </Typography>
          </Grid>
        </Grid>
        <DialogContent>
          <Grid container justifyContent='space-around'>
            <Grid item container direction='column' md={7} pr={20}>
              <Grid item style={{ marginBottom: '0.5em' }}>
                <TextField
                  id='name'
                  label='Name'
                  variant='standard'
                  value={name}
                  fullWidth
                  onChange={(event) => setName(event.target.value)}
                />
              </Grid>
              <Grid item style={{ marginBottom: '0.5em' }}>
                <TextField
                  id='email'
                  error={emailHelper.length !== 0}
                  helperText={emailHelper}
                  label='Email'
                  variant='standard'
                  value={email}
                  fullWidth
                  onChange={onChange}
                />
              </Grid>
              <Grid item style={{ marginBottom: '0.5em' }}>
                <TextField
                  id='phone'
                  label='Phone'
                  error={phoneHelper.length !== 0}
                  helperText={phoneHelper}
                  variant='standard'
                  value={phone}
                  fullWidth
                  onChange={onChange}
                />
              </Grid>

              <Grid item style={{ maxWidth: '20em' }}>
                <TextField
                  id='message'
                  style={{ marginBottom: '0.5em' }}
                  fullWidth
                  InputProps={{ disableUnderline: true }}
                  className={classes.message}
                  multiline
                  rows={10}
                  label='Message'
                  variant='standard'
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                />
              </Grid>
              <Grid item>
                <Typography variant='body1' paragraph>
                  we can create this digital solution for an estimated
                  <span className={classes.specialText}>
                    ${total.toFixed(2)}
                    {platforms.length > 0
                      ? `for ${
                          //if only web application is selected...
                          platforms.indexOf('Web Application') > -1 && platforms.length === 1
                            ? //then finish sentence here
                              'a Web Application.'
                            : //otherwise, if web application and another platform is selected...
                            platforms.indexOf('Web Application') > -1 && platforms.length === 2
                            ? //then finish the sentence here
                              `a Web Application and an ${platforms[1]}.`
                            : //otherwise, if only one platform is selected which isn't web application...
                            platforms.length === 1
                            ? //then finish the sentence here
                              `an ${platforms[0]}`
                            : //otherwise, if other two options are selected...
                            platforms.length === 2
                            ? //then finish the sentence here
                              'an iOS Application and an Android Application.'
                            : //otherwise if all three are selected...
                            platforms.length === 3
                            ? //then finish the sentence here
                              'a Web Application, an iOS Application, and an Android Application.'
                            : null
                        }`
                      : null}
                  </span>
                </Typography>
                <Typography variant='body1' paragraph>
                  Fill out your name, number, and email, place your request, and we’ll get back to
                  you with details moving forward and a final price.
                </Typography>
              </Grid>
            </Grid>
            <Grid item md={5} mt={5}>
              <Grid item container>
                <Grid item container alignItems='center'>
                  <Grid item xs={2}>
                    <img src={check} alt='checkmark' width='20' />
                  </Grid>
                  <Grid item xs={10}>
                    <Typography variant='body1'>you want {service} </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <img src={check} alt='checkmark' width='20' />
                  </Grid>
                  <Grid item xs={10}>
                    <Typography variant='body1'>
                      {'with '}

                      {/* if we have features... */}
                      {features.length > 0
                        ? //...and there's only 1...
                          features.length === 1
                          ? //then end the sentence here
                            `${features[0]}.`
                          : //otherwise, if there are two features...
                          features.length === 2
                          ? //...then end the sentence here
                            `${features[0]} and ${features[1]}.`
                          : //otherwise, if there are three or more features...
                            features
                              //filter out the very last feature...
                              .filter((feature, index) => index !== features.length - 1)
                              //and for those features return their name...
                              .map((feature, index) => <span key={index}>{`${feature}, `}</span>)
                        : null}
                      {features.length > 2
                        ? //...and then finally add the last feature with 'and' in front of it
                          ` and ${features[features.length - 1]}.`
                        : null}
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <img src={check} alt='checkmark' width='20' />
                  </Grid>
                  <Grid item xs={10}>
                    <Typography variant='body1'>
                      Thired{customFeatures.toLowerCase()}
                      {`project while be used${users} user`}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item mt={3}>
                  <Button
                    onClick={sendEstimate}
                    variant='contained'
                    className={classes.estimateButton}
                  >
                    {loading ? <CircularProgress size={50} color='success' /> : buttonContants}
                  </Button>
                </Grid>

                <Grid item mt={3} style={{ marginBottom: machesSM ? '5em' : 0 }}>
                  <Button
                    style={{ fontWeight: 300 }}
                    color='primary'
                    onClick={() => setDialogOpen(false)}
                  >
                    Cancel
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>

      <Snackbar
        open={alert.open}
        message={alert.message}
        ContentProps={{ style: { backgroundColor: alert.backgroundColor } }}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        onClose={() => setAlert({ ...alert, open: false })}
        autoHideDuration={4000}
      ></Snackbar>
    </Grid>
  );
}

export default Estimate;
