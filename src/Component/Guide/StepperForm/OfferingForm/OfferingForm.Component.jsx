import React, { useState, useEffect } from "react";
import FormInput from "../../../FormInput/FormInput.Component";
import CustomButton from "../../../CustomButton/CustomButton.Component";
import { Typography, Box, Container } from "@mui/material";
import NumbersIcon from "@mui/icons-material/Numbers";
import PercentIcon from "@mui/icons-material/Percent";
import { alpha, styled } from "@mui/material/styles";
const OfferingForm = ({
  prevStep,
  nextStep,
  conversionChange,
  values,
  downOption,
  loanOption,
  selectedMoney,
  selectedPercent,
}) => {
  const {
    offeringPrice,
    depositPercent,
    depositAmount,
    downPaymentPercent,
    downPaymentAmount,
    loanPercent,
    loanAmount,
  } = values;
  const Continue = (event) => {
    event.preventDefault();
    nextStep();
  };
  const Previous = (event) => {
    event.preventDefault();
    prevStep();
  };
  // const onClickDownMoney = (event) => {
  //   event.preventDefault();
  //   downOption();
  //   // selectedMoney();
  // };

  const [isPercent, setIsPercent] = useState(true);
  return (
    <Container component="main">
      <form onSubmit={Continue}>
        {/* <Box sx={{ py: 3 }}>
          <NumbersIconSelected onClick={() => setIsPercent(false)} />
          <PercentIcon onClick={() => setIsPercent(true)} />
        </Box> */}
        <Box sx={{ py: 3 }}>
          <Typography sx={{ pb: 2 }}>Total Price of the Offer</Typography>
          <FormInput
            onChange={conversionChange("offeringPrice")}
            name="offeringPrice"
            value={offeringPrice}
            size="small"
            label="Offering Price Amount"
            type="number"
          />
        </Box>
        <Box sx={{ py: 3 }}>
          <FormInput
            onChange={conversionChange("downPaymentPercent")}
            name="downPaymentPercent"
            value={downPaymentPercent}
            size="small"
            label="Down Payment %"
          />
          <FormInput
            onChange={conversionChange("downPaymentAmount")}
            name="downPaymentAmount"
            value={downPaymentAmount}
            size="small"
            label="Down Payment Amount"
            onClick={downOption}
          />
        </Box>
        {/* <Box sx={{ py: 3 }}>
            <FormInput
              onChange={conversionChange("depositAmount")}
              name="depositAmount"
              value={values.depositAmount}
              size="small"
              label="Deposit Amount"
            />
            <FormInput
              onChange={conversionChange("depositAmount")}
              name="depositAmount"
              value={values.depositAmount}
              size="small"
              label="Deposit Amount %"
            />
          </Box>*/}
        <Box sx={{ py: 3 }}>
          <FormInput
            onChange={conversionChange("loanPercent")}
            name="loanPercent"
            value={loanPercent}
            size="small"
            label="Loan %"
            onClick={loanOption && selectedPercent}
          />
          <FormInput
            onChange={conversionChange("loanAmount")}
            name="loanAmount"
            value={values.loanAmount}
            size="small"
            label="Loan Amount"
            onClick={loanOption && selectedMoney}
          />
        </Box>
        <Box>
          <CustomButton onClick={Previous}>Previous</CustomButton>
          <CustomButton type="submit">Continue</CustomButton>
        </Box>
      </form>
    </Container>
  );
};
export default OfferingForm;
