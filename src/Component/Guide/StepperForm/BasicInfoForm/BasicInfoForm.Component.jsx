import React from "react";
import { Container, Typography, Checkbox, Box } from "@mui/material";
import FormInput from "../../../FormInput/FormInput.Component";
import CustomButton from "../../../CustomButton/CustomButton.Component";
const statusList = ["New", "Review", "Submit", "Denied/ Accepted", "Close"];
const BasicInfoForm = ({ nextStep, handleChange, values }) => {
  const {
    buyerName,
    isSecondBuyerName, // not necessary
    buyerName2,
    email,
    phoneNumber,
    propertyAddress,
  } = values;
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <Container component="main">
      <form onSubmit={Continue}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ py: 3 }}>
            <Typography>Your Name</Typography>
            <FormInput
              onChange={handleChange("buyerName")}
              name="buyerName"
              //       required
              value={values.buyerName}
              size="small"
              label="Your name"
            />
          </Box>
          <Box>
            <Typography>Second buyer</Typography>
            <Checkbox
              checked={isSecondBuyerName}
              onChange={handleChange("isSecondBuyerName")}
              inputProps={{ "aria-label": "controlled" }}
            />
          </Box>
          {isSecondBuyerName ? (
            <div>
              <Typography>Your Name</Typography>
              <FormInput
                onChange={handleChange("buyerName2")}
                name="buyerName"
                //       required
                value={values.buyerName2}
                size="small"
                label="Second Buyer Name"
              />
            </div>
          ) : (
            ""
          )}
          <Box sx={{ py: 3 }}>
            <Typography sx={{ pb: 2 }}>Your Phone Number</Typography>

            <FormInput
              onChange={handleChange("phoneNumber")}
              name="phoneNumber"
              //       required
              value={phoneNumber}
              size="small"
              label="Phone Number"
              type="number"
            />
          </Box>
          <Box sx={{ py: 3 }}>
            <Typography sx={{ pb: 2 }}>Your Email</Typography>
            <FormInput
              onChange={handleChange("email")}
              name="email"
              //       required
              value={email}
              size="small"
              label="Email"
              type="email"
            />
          </Box>
          <Box sx={{ pb: 3 }}>
            <Typography sx={{ pb: 2 }}>Property Address</Typography>
            <FormInput
              onChange={handleChange("propertyAddress")}
              name="propertyAddress"
              //       required
              value={values.propertyAddress}
              size="small"
              label="Property Address"
            />
          </Box>

          {/* <Box sx={{ py: 3 }}>
            <Typography sx={{ pb: 2 }}>Status Selection</Typography>

            <FormControl sx={{ m: 1, minWidth: "100%" }}>
              <InputLabel id="status-label">Status Selection</InputLabel>
              <Select
                labelId="status-label"
                id="demo-simple-select"
                value={values.status}
                label="Status Selection"
                onChange={handleChange("status")}
              >
                {statusList.map((idx) => (
                  <MenuItem key={idx} value={idx}>
                    {idx}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box> */}

          <Box>
            <CustomButton type="submit">Next</CustomButton>
          </Box>
        </Box>
      </form>
    </Container>
  );
};
export default BasicInfoForm;
