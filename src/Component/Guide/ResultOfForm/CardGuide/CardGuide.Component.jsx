import * as React from "react";
import { Card, Box, Typography, Avatar } from "@mui/material";
import { removeGuide } from "../../../../Redux/Guide/Guide.actions";
import { connect } from "react-redux";
import { withRouter } from "react-router";
const CardGuide = ({
  dispatch,
  buyerName,
  purchaseAddress,
  priceOffer,
  status,
  removeGuide,
  id,
  ...otherProps
}) => {
  const handleRemove = (idx) => {
    removeGuide(idx);
  };
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        p: 3,
        gap: 2,
        width: "280px",
        height: "280px",
      }}
    >
      <Typography variant="h5" fontSize="20px">
        Buyer Name: {buyerName}
      </Typography>
      <Typography variant="h5" fontSize="20px">
        Offer Address: {purchaseAddress}
      </Typography>
      <Typography variant="h5" fontSize="20px">
        Budger Offer: {priceOffer}
      </Typography>
      <Typography variant="h5" fontSize="20px">
        Status: {status}
      </Typography>
      <button onClick={(id) => handleRemove(id)}>Remove</button>
      {/* <Typography fontSize="16px">{employeeInfo[idEmployee].position}</Typography>
                                <Typography sx={{ color: "#2AC28C" }} onClick={() => { history.push(`${match.url}/${idEmployee}`); }}>More detail >
                        </Typography> */}
      {/* <DeleteOutlineIcon sx={{ color: "#869892", fontSize: "20px", position:'relative', bottom:"35px", left:"257px"}} onClick={(event) => delEmpInGroup(event)} /> */}
    </Card>
  );
};
const mapDispatchToProps = (dispatch) => ({
  removeGuide: (guide) => dispatch(removeGuide(guide)),
});
export default connect(null, mapDispatchToProps)(CardGuide);
// export default CardGuide;
