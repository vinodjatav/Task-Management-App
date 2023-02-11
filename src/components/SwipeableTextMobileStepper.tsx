import * as React from "react";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { Box } from "@mui/material";
import { FirstCardIcons, SecondCardIcons, ThirdCardIcons } from "./Icons";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const cards = [
  {
    id: "FirstCard",
    cardPath: <FirstCardIcons sx={{ width: "299px", height: "419px" }} />,
  },
  {
    id: "SecondCard",
    cardPath: <SecondCardIcons sx={{ width: "299px", height: "419px" }} />,
  },
  {
    id: "ThirdCard",
    cardPath: <ThirdCardIcons sx={{ width: "299px", height: "419px" }} />,
  },
];

const SwipeableTextMobileStepper = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = cards.length;

  // const handleNext = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  // };

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0px",
        gap: "40px",
        position: "absolute",
        width: "299px",
        height: "418.93px",
        left: "64px",
        top: "95px",
      }}
    >
      <AutoPlaySwipeableViews
        style={{overflow: "hidden"}}
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {cards.map((step, index) => (
          <div key={step.id}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box>{step.cardPath}</Box>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        variant="dots"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        sx={{
          ".MuiMobileStepper-dot": {
            borderRadius: "0px",
            width: "30px",
            height: "3px",
          },
          position: "absolute",
          mt: "460px",
          justifyContent: "center",
        }}
        nextButton={null}
        backButton={null}
      />
    </Box>
  );
};

export default SwipeableTextMobileStepper;
