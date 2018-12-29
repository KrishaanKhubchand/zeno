import React, { Component } from "react";
import Pitch from "./mvPitch.jsx";
import Header from "./homeHeader.jsx";
import AppImage from "./appimages.jsx";

import "./my.css";

const AppLanding = props => {
  return (
    <div className="container whole-container">
      <Header />
      <Pitch
        name="Achieve Your Goals with Zeno"
        pitchA="Zeno is an AI-powered app for managing your life, improving yourself, setting goals and achieving them."
        pitchB=""
        buttonCTA="get early access"
        CTALink="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      />
      <AppImage />
    </div>
  );
};

export default AppLanding;
