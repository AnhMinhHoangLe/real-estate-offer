import React from "react";
import { Container, Typography, Box } from "@mui/material";
import FormInput from "../../../FormInput/FormInput.Component";
import CustomButton from "../../../CustomButton/CustomButton.Component";

const isRentBack = ["Yes", "No"];

const SupportFilesForm = ({
  prevStep,
  nextStep,
  handleChange,
  values,
  onFileChange,
}) => {
  const Continue = (event) => {
    event.preventDefault();
    nextStep();
  };
  const Previous = (event) => {
    event.preventDefault();
    prevStep();
  };

  const { uploadPreApproveLetter, uploadProofFund } = values;
  return (
    <Container component="main">
      <form onSubmit={Continue}>
        <Box sx={{ py: 3 }}>
          <Typography>Pre-approval letter</Typography>
          <FormInput
            onChange={onFileChange("uploadPreApproveLetter")}
            name="uploadPreApproveLetter"
            value={values.uploadPreApproveLetter}
            size="small"
            type="file"
          />
        </Box>
        <Box sx={{ py: 3 }}>
          <Typography>2 month of bank statement - Proof of Fund</Typography>
          <FormInput
            onChange={onFileChange("uploadProofFund")}
            name="uploadProofFund"
            value={values.uploadProofFund}
            size="small"
            type="file"
          />
        </Box>

        <Box>
          <CustomButton onClick={Previous}>Previous</CustomButton>
          <CustomButton type="submit">Submit</CustomButton>
        </Box>
      </form>
    </Container>
  );
};
export default SupportFilesForm;
