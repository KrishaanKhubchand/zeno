import React, { Component } from "react";
import AppShot1 from "./assets/firstapp.png";
import AppShot2 from "./assets/app1.svg";

const AppImage = props => {
  return (
    <React.Fragment>
      <div className="row">
        <img className="mockup" src={AppShot1} alt="" />
      </div>
    </React.Fragment>
  );
};

export default AppImage;
