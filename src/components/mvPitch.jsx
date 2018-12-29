import React, { Component } from "react";
import { Link } from "react-router-dom";

function Pitch(props) {
  return (
    <React.Fragment>
      <h1 className="pitch-head">{props.name}</h1>
      <div className="row pitch-body-container">
        <h3 className="pitch-body">{props.pitchA}</h3>
      </div>
      <div className="row pitch-body-container">
        <h3 className="pitch-body pitch-b">{props.pitchB}</h3>
      </div>
      <div className="row sign-up-box-container">
        <form action={props.CTALink}>
          <button className="sign-up-cta">{props.buttonCTA}</button>
        </form>
      </div>
      <h2 className="steps-head">{props.FAQ}</h2>
    </React.Fragment>
  );
}

export default Pitch;

/*       <div className="steps-container">
        <h3 className="steps-body">1) Create a Learning Profile.</h3>
        <h3 className="steps-body">
          2) Receive daily email prompts to write about what you’ve learnt.
        </h3>
        <h3 className="steps-body">
          3) Get paired with partners based on you learning interests every
          week.
        </h3>
      </div> */
