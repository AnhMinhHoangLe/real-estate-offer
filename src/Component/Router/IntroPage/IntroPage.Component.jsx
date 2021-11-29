import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";
import CustomButton from "../../CustomButton/CustomButton.Component";
const IntroPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: 1,
        gap: 5,
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Typography variant="h1">BUY HOME WITH US</Typography>
      <Typography variant="h4">
        Customize Your Offer and Save Now (we will connect with hundred agents
        and help you save the most)
      </Typography>
      <Typography variant="h4">
        You earn an average of 1% of the purchase price by customizing your
        offer (If you offer 1M, you save 10K or more)
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          gap: 5,
        }}
      >
        <CustomButton>
          <Link to="/ls-offer"> List Of Offers</Link>
        </CustomButton>
        <CustomButton>
          <Link to="/cr-offer">Create An Offer</Link>
        </CustomButton>
      </Box>
    </Box>
  );
};
export default IntroPage;
