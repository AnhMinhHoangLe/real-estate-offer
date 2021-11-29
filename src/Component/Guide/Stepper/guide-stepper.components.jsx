import * as React from "react";
import { connect } from "react-redux";
//UI
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Typography,
} from "@mui/material";
//Component
import BasicInfoForm from "../StepperForm/BasicInfoForm/BasicInfoForm.Component";
import OfferingForm from "../StepperForm/OfferingForm/OfferingForm.Component";
import Confirmation from "../StepperForm/Confirmation/Confirmation.Component";
import Success from "../StepperForm/Success/Success.Component";
import ContingencyDaysForm from "../StepperForm/ContingencyDaysForm/ContingencyDaysForm.Component";
import SellerRentBackForm from "../StepperForm/SellerRentBack/SellerRentBack.Component";
import SupportFilesForm from "../StepperForm/SupportFilesForm/SupportFilesForm.Components";
//Redux
import { selectGuideItems } from "../../../Redux/Guide/Guide.selectors";
import { addGuide } from "../../../Redux/Guide/Guide.actions";
import {
  calculatePercent,
  calculateRealNumber,
  theRest,
} from "../StepperForm/OfferingForm/OfferingForm.Utils";
class GuideStepper extends React.Component {
  state = {
    step: 1,
    id: 0,
    //////////////////////////
    buyerName: "",
    isSecondBuyerName: false, // not necessary
    buyerName2: "", // not necessary if isSecondBuyerName is false
    propertyAddress: "", //
    phoneNumber: "",
    email: "",
    // status: "",
    //////////////////////////
    selectedDownPayment: true,
    selectedPercent: true,
    offeringPrice: 0,
    depositPercent: 0,
    depositAmount: 0,
    downPaymentPercent: 0,
    downPaymentAmount: 0,
    loanPercent: 0,
    loanAmount: 0,
    /////////////////////////
    // contingency: 0,
    inspection: 0,
    appraisal: 0,
    loan: 0,
    dateCloseEscrow: "",
    //////////////////////////
    isSellerRentBack: "",
    priceOfSellerRentBack: 0,
    timeOfSellerRentBack: 0,
    //////////////////////////
    uploadPreApproveLetter: null,
    uploadProofFund: null,
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  handleReset = () => {
    const { step } = this.state;
    this.setState({ step: 0 });
  };
  // Handle fields change
  handleChange = (input) => (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    this.setState({ [input]: value });
  };
  conversionChange = (input) => (e) => {
    const {
      selectedDownPayment,
      selectedPercent,
      offeringPrice,
      downPaymentAmount,
    } = this.state;
    this.setState(
      { [input]: e.target.value },
      () => {
        if (selectedDownPayment) {
          if (downPaymentAmount > 0 && offeringPrice > 0) {
            let loan = offeringPrice - downPaymentAmount;
            // let percent = calculatePercent(offeringPrice, downPaymentAmount);
            this.setState({
              loanAmount: loan,
              // downPaymentPercent: percent,
              // loanPercent: 100 - percent,
            });
          }
        }
      }

      // } else {
      //   if (this.state.offeringPrice > 0 && this.state.loanAmount > 0) {
      //     let result = this.state.offeringPrice - this.state.loanAmount;
      //     this.setState({ downPaymentAmount: result });
      //   }
      // }
    );
  };

  downOption = () => {
    this.setState({
      selectedDownPayment: true,
    });
  };
  loanOption = () => {
    this.setState({
      selectedDownPayment: false,
    });
  };
  selectedMoney = () => {
    this.setState({
      selectedPercent: false,
    });
  };
  selectedPercent = () => {
    this.setState({
      selectedPercent: true,
    });
  };

  // On file select (from the pop up)
  onFileChange = (input) => (event) => {
    // Update the state
    this.setState({ [input]: event.target.files[0] });
  };
  handleSubmit = (e) => {
    const { step } = this.state;
    const {
      id,
      //////////////////////////
      buyerName,
      isSecondBuyerName, // not necessary
      buyerName2,
      email,
      phoneNumber,
      propertyAddress, //
      // status,
      //////////////////////////
      selectedDownPayment,
      selectedPercent,
      offeringPrice,
      depositPercent,
      depositAmount,
      downPaymentPercent,
      downPaymentAmount,
      loanPercent,
      loanAmount,
      /////////////////////////
      // contingency,
      inspection,
      appraisal,
      loan,
      dateCloseEscrow,
      //////////////////////////
      isSellerRentBack,
      priceOfSellerRentBack,
      timeOfSellerRentBack,
      //////////////////////////
      uploadPreApproveLetter,
      uploadProofFund,
    } = this.state;
    const values = {
      id,
      //////////////////////////
      buyerName,
      isSecondBuyerName, // not necessary
      buyerName2,
      email,
      phoneNumber,
      propertyAddress, //
      // status,
      //////////////////////////
      selectedDownPayment,
      selectedPercent,
      offeringPrice,
      depositPercent,
      depositAmount,
      downPaymentPercent,
      downPaymentAmount,
      loanPercent,
      loanAmount,
      /////////////////////////
      // contingency,
      inspection,
      appraisal,
      loan,
      dateCloseEscrow,
      //////////////////////////
      isSellerRentBack,
      priceOfSellerRentBack,
      timeOfSellerRentBack,
      //////////////////////////
      uploadPreApproveLetter,
      uploadProofFund,
    };

    try {
      addGuide(values);
      this.setState({
        step: 0,
        id: 0,
        //////////////////////////
        buyerName: "",
        isSecondBuyerName: false, // not necessary
        buyerName2: "", // not necessary if isSecondBuyerName is false
        propertyAddress: "", //
        phoneNumber: "",
        email: "",
        // status: "",
        //////////////////////////
        selectedDownPayment: true,
        selectedPercent: true,
        offeringPrice: 0,
        depositPercent: 0,
        depositAmount: 0,
        downPaymentPercent: 0,
        downPaymentAmount: 0,
        loanPercent: 0,
        loanAmount: 0,
        /////////////////////////
        // contingency: 0,
        inspection: 0,
        appraisal: 0,
        loan: 0,
        dateCloseEscrow: "",
        //////////////////////////
        isSellerRentBack: "",
        priceOfSellerRentBack: 0,
        timeOfSellerRentBack: 0,
        //////////////////////////
        uploadPreApproveLetter: null,
        uploadProofFund: null,
      });
    } catch (error) {
      console.error();
    }
  };

  render() {
    const { step } = this.state;
    const {
      id,
      //////////////////////////
      buyerName,
      isSecondBuyerName, // not necessary
      buyerName2,
      email,
      phoneNumber,
      propertyAddress, //
      // status,
      //////////////////////////
      selectedDownPayment,
      selectedPercent,
      offeringPrice,
      depositPercent,
      depositAmount,
      downPaymentPercent,
      downPaymentAmount,
      loanPercent,
      loanAmount,
      /////////////////////////
      // contingency,
      inspection,
      appraisal,
      loan,
      dateCloseEscrow,
      //////////////////////////
      isSellerRentBack,
      priceOfSellerRentBack,
      timeOfSellerRentBack,
      //////////////////////////
      uploadPreApproveLetter,
      uploadProofFund,
    } = this.state;
    const values = {
      id,
      //////////////////////////
      buyerName,
      isSecondBuyerName, // not necessary
      buyerName2,
      email,
      phoneNumber,
      propertyAddress, //
      // status,
      //////////////////////////
      selectedDownPayment,
      selectedPercent,
      offeringPrice,
      depositPercent,
      depositAmount,
      downPaymentPercent,
      downPaymentAmount,
      loanPercent,
      loanAmount,
      // contingency,
      /////////////////////////
      inspection,
      appraisal,
      loan,
      dateCloseEscrow,
      //////////////////////////
      isSellerRentBack,
      priceOfSellerRentBack,
      timeOfSellerRentBack,
      //////////////////////////
      uploadPreApproveLetter,
      uploadProofFund,
    };

    const steps = [
      {
        label: "Basic Info",
        description: (
          <BasicInfoForm
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        ),
      },
      {
        label: "Offering Price",
        description: (
          <OfferingForm
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            conversionChange={this.conversionChange}
            values={values}
            downOption={this.downOption}
            loanOption={this.loanOption}
            selectedMoney={this.selectedMoney}
            selectedPercent={this.selectedPercent}
          />
        ),
      },
      {
        label: "Contingency Days",
        description: (
          <ContingencyDaysForm
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        ),
      },
      {
        label: "Seller Rent Back Permission",
        description: (
          <SellerRentBackForm
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        ),
      },
      {
        label: "Support Files",
        description: (
          <SupportFilesForm
            prevStep={this.prevStep}
            nextStep={this.handleSubmit}
            handleChange={this.handleChange}
            values={values}
            onFileChange={this.onFileChange}
          />
        ),
      },
      // {
      //   label: "Confirmation",
      //   description: (
      //     <Confirmation
      //       prevStep={this.prevStep}
      //       nextStep={this.nextStep}
      //       handleChange={this.handleChange}
      //       // handleSubmit={this.handleSubmit}
      //       values={values}
      //     />
      //   ),
      // },
    ];
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h1">Create An Offer</Typography>
        <Stepper activeStep={step} orientation="vertical">
          {/* <Stepper activeStep={step}> */}
          {steps.map((step1, index) => (
            <Step key={index}>
              <StepLabel
                optional={
                  index === 4 ? (
                    <Typography variant="caption">Last step</Typography>
                  ) : null
                }
              >
                {step1.label}
              </StepLabel>
              <StepContent>
                <Typography>{step1.description}</Typography>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </Box>
    );
  }
}
export default GuideStepper;
