import "./App.css";
import React, { useEffect } from "react";
import ResultOfFormGuide from "./Component/Guide/ResultOfForm/ResultOfFormGuide.Components";
import GuideStepper from "./Component/Guide/Stepper/guide-stepper.components";
import { Routes, Route, Link } from "react-router-dom";
import IntroPage from "./Component/Router/IntroPage/IntroPage.Component";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="cr-offer" element={<GuideStepper />} />
        <Route path="ls-offer" element={<ResultOfFormGuide />} />
      </Routes>
    </div>

    // <Grid container spacing={5}>
    //   <Grid item xs={6} md={6}>
    //     <GuideStepper />
    //   </Grid>
    //   <Grid item xs={6} md={6}>
    //     <ResultOfFormGuide />
    //   </Grid>
    // </Grid>
  );
}

export default App;
