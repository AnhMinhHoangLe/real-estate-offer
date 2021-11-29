import React, { useState, useEffect } from "react";
import { selectGuideItems } from "../../../Redux/Guide/Guide.selectors";
import { connect } from "react-redux";
import CardGuide from "./CardGuide/CardGuide.Component";
import { Card, Box, Typography, Avatar } from "@mui/material";

const ResultOfFormGuide = ({ selectGuideItems }) => {
  console.log(selectGuideItems);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <Typography variant="h1">Offers List</Typography>
      <Box
        sx={{
          display: "flex",
          p: 4,
          gap: 5,
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {selectGuideItems.map(
          ({
            buyerName,
            purchaseAddress,
            priceOffer,
            status,
            id,
            ...otherProps
          }) => (
            <CardGuide
              buyerName={buyerName}
              purchaseAddress={purchaseAddress}
              priceOffer={priceOffer}
              status={status}
              id={id}
              {...otherProps}
            />
          )
        )}
      </Box>
    </Box>
  );
};
const mapStateToProps = (state) => ({
  selectGuideItems: selectGuideItems(state),
});
export default connect(mapStateToProps)(ResultOfFormGuide);
