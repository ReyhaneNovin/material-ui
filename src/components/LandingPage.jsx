import Lottie from "react-lottie";

import { makeStyles, useTheme } from "@mui/styles";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import animationData from "../animations/landinganimation/data";
import ButtonArrow from "../components/ui/ButtonArrow";
import Typography from "@mui/material/Typography";
import CustomSoftwareIcon from "../assets/images/CustomSoftwareIcon.svg";

const useStyles = makeStyles((theme) => ({
  content: {
    height: "1000px",
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
      marginLeft: "0em !important",
    },
  },
}));

const LandingPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const defaultOptions = {
    loop: true,
    autoplay: true,
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
          {/*-----Hero Block----*/}
          <Grid container direction="row">
            <Grid item>
              <Typography varient="h4">Custom Software Development </Typography>
              <Typography varient="subtitle1">
                Save Energy,Save Time, Save Money{" "}
              </Typography>
              <Typography varient="subtitle1">
                Compelete digutal<span>celeberation</span>
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
              <img alt="Custom Software Icon" src={CustomSoftwareIcon} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
export default LandingPage;
