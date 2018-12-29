import React, { Component } from "react";
import Pitch from "./mvPitch.jsx";
import Header from "./homeHeader.jsx";
import Steps from "./reviewsteps.jsx";

import "./my.css";

const ReviewLanding = props => {
  return (
    <div className="container whole-container">
      <Header />
      <Pitch
        name="Your 2018 Review"
        pitchA="'We don't learn from experience. We learn from reflecting on our experiences.' - William James"
        pitchB="As 2018 comes to a close, conduct an annual review to extract lessons, patterns, and self-knowledge."
        buttonCTA="review your year"
        CTALink="https://projectzeno.typeform.com/to/DS4yVy"
        FAQ="How It Works:"
      />
      <Steps
        buttonCTA="review your year"
        CTALink="https://projectzeno.typeform.com/to/DS4yVy"
      />
    </div>
  );
};

export default ReviewLanding;
