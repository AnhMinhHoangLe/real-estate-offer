import React from "react";
import {
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";
import { addGuide } from "../../../../Redux/Guide/Guide.actions";
import { connect } from "react-redux";

const Confirmation = ({ prevStep, nextStep, values, addGuide }) => {
  const { buyerName, purchaseAddress, priceOffer, status } = values;
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      addGuide(values);
    } catch (error) {
      console.error();
    }
  };
  return (
    <Container component="main" maxWidth="xs">
      <div>
        <List>
          <ListItem>
            <ListItemText primary="Buyer Name" secondary={buyerName} />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Purchase Address"
              secondary={purchaseAddress}
            />
          </ListItem>
          <ListItem>
            <ListItemText primary="Offer Price" secondary={priceOffer} />
          </ListItem>
        </List>

        <br />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Button
              onClick={Previous}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Previous
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              onClick={handleSubmit}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Confirm & Continue
            </Button>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addGuide: (guide) => dispatch(addGuide(guide)),
});
export default connect(null, mapDispatchToProps)(Confirmation);
//!!TODO:  If click confirm you cant  previous back, stepper showing
