import React from "react";
import FormInput from "../../../FormInput/FormInput.Component";
import CustomButton from "../../../CustomButton/CustomButton.Component";
import { Container, Typography, Box } from "@mui/material";

const ContingencyDaysForm = ({ prevStep, nextStep, handleChange, values }) => {
  const Continue = (event) => {
    event.preventDefault();
    nextStep();
  };
  const Previous = (event) => {
    event.preventDefault();
    prevStep();
  };
  const { inspection, appraisal, loan, dateCloseEscrow } = values;
  return (
    <Container component="main">
      <form onSubmit={Continue}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ py: 3 }}>
            <Typography>Inspection Day(s)</Typography>
            <FormInput
              onChange={handleChange("inspection")}
              name="inspection"
              value={values.inspection}
              size="small"
              label="Inspection"
              type="number"
            />
          </Box>
          <Box sx={{ py: 3 }}>
            <FormInput
              onChange={handleChange("appraisal")}
              name="appraisal"
              value={values.appraisal}
              size="small"
              label="appraisal"
              type="number"
            />
          </Box>
          <Box sx={{ py: 3 }}>
            <FormInput
              onChange={handleChange("loan")}
              name="loan"
              value={values.loan}
              size="small"
              label="Loan"
              type="number"
            />
          </Box>
          <Box sx={{ pb: 3 }}>
            <Typography>Date Close Escrow</Typography>
            <FormInput
              type="date"
              name="dateCloseEscrow"
              onChange={handleChange("dateCloseEscrow")}
              value={values.dateCloseEscrow}
              id="outlined-basic"
              variant="outlined"
              size="small"
              sx={{ width: "100%" }}
            />
          </Box>
          <Box>
            <CustomButton onClick={Previous}>Previous</CustomButton>
            <CustomButton type="submit">Continue</CustomButton>
          </Box>
        </Box>
      </form>
    </Container>
  );
};
export default ContingencyDaysForm;

// move date close , are u to offer
// support doc // input 2 files
