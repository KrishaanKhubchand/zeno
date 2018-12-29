import React, { Component } from "react";
import Pitch from "./mvPitch.jsx";
import Header from "./homeHeader.jsx";
import Steps from "./gameplansteps.jsx";

import "./my.css";

const GameplanLanding = props => {
  return (
    <div className="container whole-container">
      <Header />
      <Pitch
        name="Your 2019 Gameplan"
        pitchA="The new year stands before us like a chapter in a book, waiting to be written."
        pitchB="This suite helps you write that chapter through goal setting and creating systems to achieve them."
        buttonCTA="set goals for 2019"
        CTALink="https://projectzeno.typeform.com/to/Eh0eto"
        FAQ="How It Works:"
      />
      <Steps
        pitchC="Make 2019 your best year ever."
        buttonCTA="set goals for 2019"
        CTALink="https://projectzeno.typeform.com/to/Eh0eto"
      />
    </div>
  );
};

export default GameplanLanding;
