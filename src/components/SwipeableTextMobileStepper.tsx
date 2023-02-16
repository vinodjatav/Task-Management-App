import * as React from "react";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { Box, Stack, Typography } from "@mui/material";
import { FirstCardIcons, SecondCardIcons, ThirdCardIcons } from "./Icons";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const cards = [
  {
    id: "FirstCard",
    title: "Enjoy Your Time",
    message: "when you are confused about \n managing your task come to us",
    cardPath: <FirstCardIcons sx={{ width: "299px", height: "277px" }} />,
  },
  {
    id: "SecondCard",
    title: "Enjoy Your Time",
    message: "when you are confused about managing your task come to us",
    cardPath: <SecondCardIcons sx={{ width: "299px", height: "277px" }} />,
  },
  {
    id: "ThirdCard",
    title: "Enjoy Your Time",
    message: "when you are confused about managing your task come to us",
    cardPath: <ThirdCardIcons sx={{ width: "299px", height: "277px" }} />,
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
        style={{ overflow: "hidden" }}
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {cards.map((step, index) => (
          <div key={step.id}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box>
                {step.cardPath}
                <Stack
                  sx={{
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "0",
                    gap: "30px",
                    // width: "266px",
                    // height: "102px",
                    flex: "none",
                    order: "1",
                    flexFlow: "0",
                  }}
                >
                  <Typography
                    sx={{
                      mt: "40px",
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: "700",
                      fontSize: "32px",
                      letterSpacing: "0.01em",
                      color: "#363942",
                      flex: "none",
                      order: "0",
                      flexGrow: "0",
                    }}
                  >
                    {step.title}
                  </Typography>
                  <Typography
                    sx={{
                      // display: "inline-block",
                      // width: "260px",
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "14px",
                      letterSpacing: "0.01em",
                      textAlign: "center",
                      textTransform: "capitalize",
                      color: "#363942",
                      opacity: "0.6",
                      flex: "none",
                      order: "1",
                      flexGrow: "0",
                    }}
                  >
                    {step.message}
                  </Typography>
                </Stack>
              </Box>
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
