import React from "react";
import { Box, Button } from "@mui/material";
import SwipeableTextMobileStepper from "./SwipeableTextMobileStepper";

const Login = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "428px",
        height: "926px",
        background: "#FFFFFF",
        justifyContent: "center",
      }}
    >
      <SwipeableTextMobileStepper />
      <Button
        variant="contained"
        sx={{
          textTransform: "none",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          padding: "16px 151px",
          gap: "10px",
          position: "absolute",
          width: "378px",
          height: "56px",
          left: "25px",
          top: "620px",
          background: "#4B7BE5",
          borderRadius: "8px",
        }}
      >
        Login
      </Button>
      <Button
        variant="contained"
        sx={{
          textTransform: "none",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          padding: "16px 151px",
          gap: "10px",
          position: "absolute",
          width: "378px",
          height: "56px",
          left: "25px",
          top: "700px",
          background: "#4B7BE5",
          borderRadius: "8px",
          opacity: "0.7",
        }}
      >
        SignUp
      </Button>
    </Box>
  );
};

export default Login;
