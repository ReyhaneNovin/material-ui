import Lottie from "react-lottie";

import { makeStyles, useTheme } from "@mui/styles";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import animationData from "../animations/landinganimation/data";
import ButtonArrow from "../components/ui/ButtonArrow";
import Typography from "@mui/material/Typography";
import useMediaQuery from '@mui/material/useMediaQuery';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import CustomSoftwareIcon from "../assets/images/CustomSoftwareIcon.svg";
import mobileAppsIcon from "../assets/images/mobileIcon.svg";
import websiteIcon from "../assets/images/websiteIcon.svg"
import repeatingBackground from "../assets/images/repeatingBackground.svg"
import { padding } from "@mui/system";
const useStyles = makeStyles((theme) => ({
  content: {
    height: "100%",
    width: "100%",
  },
  animation: {
    maxWidth: "50em !important",
    minWidth: "21em !important",
    marginTop: "2em !important",
    marginLeft: "10% !important",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em !important",
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: "80px !important",
    marginRight: "40px!important ",
  },
  lernButton: {
    borderRadius: "80px !important",
  },
  buttonContainer: {
    marginTop: "1em !important",
  },
  mainContainer: {
    marginTop: "5em !important",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em !important",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em !important",
    },
  },
  heroTextContainer: {
    minWidth: "21.5em !important",
    marginLeft: "1em !important",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0 !important",
    },
  },
  specialText:{
    fontFamily: "Pacifico !important",
    color:theme.palette.common.red
  },
  icon:{
    marginLeft: "2em !important",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0 !important",
    },

  },
  servicesContainer:{
    marginTop:"12em !important",
    [theme.breakpoints.down("sm")]: {
      padding: "25 !important",
    },

  },
  revolutionBackground:{
    backgroundImage:`url(${repeatingBackground})`,
    backgroundPosition:"center",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat",
    height:"100%",
    width:"100%"

  },
  revolutionCard:{
    position:"absolute",
    boxShadow:theme.shadows[10],
    borderRadius:"20px !important",
    padding:"10em"
  }
}));

const LandingPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM=useMediaQuery(theme.breakpoints.down("md"))
  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className={classes.content}>
      <Grid container direction="column" className={classes.mainContainer}>
        <Grid item>
          {/*-----Hero Block----*/}
          <Grid
            container
            justifyContent="flex-end"
            alignItems="center"
            direction="row"
          >
            <Grid sm item className={classes.heroTextContainer}>
              <Typography variant="h2" align="center" direction="row">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </Typography>
              <Grid
                container
                justifyContent="center"
                className={classes.buttonContainer}
              >
                <Grid item>
                  <Button
                    className={classes.estimateButton}
                    variant="contained"
                  >
                    Free estimate
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    color="error"
                    className={classes.lernButton}
                  >
                    Learn more{" "}
                    <ButtonArrow
                      width={20}
                      height={20}
                      fill={theme.palette.common.red}
                    />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid sm item className={classes.animation}>
              <Lottie options={defaultOptions} width="500px" height="auto" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          {" "}
          {/*-----CustomSoftware  Block----*/}
          <Grid container direction="row" justifyContent={matchesSM ? "center" :undefined } className={classes.servicesContainer}>
            <Grid item style={{marginLeft:matchesSM ? 0 :"5em" , textAlign:matchesSM ? "center" :undefined}}>
              <Typography variant="h4">Custom Software Development </Typography>
              <Typography variant="subtitle1">
                Save Energy,Save Time, Save Money{" "}
              </Typography>
              <Typography variant="subtitle1">
                Compelete digutal<span className={classes.specialText}>celeberation</span>
              </Typography>
              <Button
                variant="outlined"
                color="error"
                className={classes.lernButton}
              >
                Learn more{" "}
                <ButtonArrow
                  width={20}
                  height={20}
                  fill={theme.palette.common.red}
                />
              </Button>
            </Grid>
            <Grid item>
              <img alt="Custom Software Icon" src={CustomSoftwareIcon} className={classes.icon} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          {" "}
          {/*-----Ios/Android Block----*/}
          <Grid container direction="row" justifyContent={matchesSM ? "center" :"flex-end"} className={classes.servicesContainer}>
            <Grid item style={{ textAlign:matchesSM ? "center" :undefined}}>
              <Typography variant="h4">Ios/Android App Development </Typography>
              <Typography variant="subtitle1">
            Extend Functionality.  Compelete digutal.  Compelete digutal
              </Typography>
              <Typography variant="subtitle1">
               entegratde your web
              </Typography>
              <Button
                variant="outlined"
                color="error"
                className={classes.lernButton}
              >
                Learn more{" "}
                <ButtonArrow
                  width={20}
                  height={20}
                  fill={theme.palette.common.red}
                />
              </Button>
            </Grid>
            <Grid item style={{marginRight:matchesSM ? 0 :"5em" }}>
              <img alt="mobile Apps Icon" src={mobileAppsIcon} className={classes.icon} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          {" "}
          {/*-----Websites  Block----*/}
          <Grid container direction="row" justifyContent={matchesSM ? "center" :undefined } className={classes.servicesContainer}>
            <Grid item style={{marginLeft:matchesSM ? 0 :"5em" , textAlign:matchesSM ? "center" :undefined}}>
              <Typography variant="h4">Website Development </Typography>
              <Typography variant="subtitle1">
                Save Energy,Save Time, Save Money{" "}
              </Typography>
              <Typography variant="subtitle1">
                Compelete digutal<span className={classes.specialText}>celeberation</span>
              </Typography>
              <Button
                variant="outlined"
                color="error"
                className={classes.lernButton}
              >
                Learn more{" "}
                <ButtonArrow
                  width={20}
                  height={20}
                  fill={theme.palette.common.red}
                />
              </Button>
            </Grid>
            <Grid item>
              <img alt="website Icon" src={websiteIcon} className={classes.icon} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container alignItems="center" justifyContent="center" style={{height:"100em"}}>
          <Card className={classes.revolutionCard}>
        <CardContent>
          <Grid container direction="column" style={{textAlign:"center"}}>
<Grid item>
  <Typography variant="h3">
    The Revolution
  </Typography>

</Grid>
<Grid item >
<Typography variant="subtitle1">
    Lorem ipsum dolor sit amet consectetur 
  </Typography>
  <Button
                variant="outlined"
                color="error"
                className={classes.lernButton}
              >
                Learn more{" "}
                <ButtonArrow
                  width={20}
                  height={20}
                  fill={theme.palette.common.red}
                />
              </Button>

</Grid>
          </Grid>
        </CardContent>
          </Card>
          <div className={classes.revolutionBackground}/>
          </Grid>
     
        </Grid>
      </Grid>
    </div>
  );
};
export default LandingPage;
