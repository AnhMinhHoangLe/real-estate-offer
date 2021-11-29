import React from "react";
import FormInput from "../../../FormInput/FormInput.Component";
import CustomButton from "../../../CustomButton/CustomButton.Component";
import {
  Box,
  Container,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";
const isRentBack = ["Yes", "No"];
const SellerRentBackForm = ({ prevStep, nextStep, handleChange, values }) => {
  const Continue = (event) => {
    event.preventDefault();
    nextStep();
  };
  const Previous = (event) => {
    event.preventDefault();
    prevStep();
  };
  const { isSellerRentBack, priceOfSellerRentBack, timeOfSellerRentBack } =
    values;
  return (
    <Container component="main">
      <form onSubmit={Continue}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ py: 3 }}>
            <Typography>Are you ok if seller rent back property?</Typography>
            <FormControl sx={{ m: 1, minWidth: "100%" }}>
              <InputLabel id="demo-simple-select-label">
                Are you ok if seller rent back property?
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={values.isSellerRentBack}
                label="Status Selection"
                onChange={handleChange("isSellerRentBack")}
              >
                {isRentBack.map((idx) => (
                  <MenuItem key={idx} value={idx}>
                    {idx}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          {isSellerRentBack === "Yes" ? (
            <div>
              <Box sx={{ py: 3 }}>
                <FormInput
                  onChange={handleChange("priceOfSellerRentBack")}
                  name="priceOfSellerRentBack"
                  value={values.priceOfSellerRentBack}
                  size="small"
                  label="Price Of Seller Rent Back"
                  type="number"
                  required
                />
              </Box>
              <Box sx={{ py: 3 }}>
                <FormInput
                  onChange={handleChange("timeOfSellerRentBack")}
                  name="timeOfSellerRentBack"
                  value={values.timeOfSellerRentBack}
                  size="small"
                  type="number"
                  label="Time Of Seller Rent Back"
                  required
                />
              </Box>
            </div>
          ) : (
            <div></div>
          )}
        </Box>
        <Box>
          <CustomButton onClick={Previous}>Previous</CustomButton>
          <CustomButton type="submit">Continue</CustomButton>
        </Box>
      </form>
    </Container>
  );
};
export default SellerRentBackForm;
