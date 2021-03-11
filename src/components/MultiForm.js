import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Stepper, Step, StepLabel, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "70%",
    margin: "5rem auto",
    border: "1px solid #999",
    "& .MuiStepIcon-root.MuiStepIcon-active": {
      color: "#ED1B1E !important",
    },
  },
});

function Register() {
  const [activeStep, setActiveStep] = useState(0);
  function getSteps() {
    return [
      "BASIC INFORMATION",
      "OBLIGATION DETAILS",
      "SOURCE INCOME DETAILS",
      "E-AGENT DETAILS",
    ];
  }

  const steps = getSteps();

  function getStepsContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return "Step One(E-REGISTRATION)";
      case 1:
        return "Step Two(CHOOSE PLAN)";
      case 2:
        return "Step Three(CHECKOUT)";
      default:
        return "Uknown Step";
    }
  }

  const classes = useStyles();
  return (
    <div>
      <Stepper className={classes.root} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}

export default Register;
