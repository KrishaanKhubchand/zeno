import React, { Component } from "react";
import CalImage from "./assets/cal_ill.svg";
import QuestionImage from "./assets/questions_ill.svg";
import PortfolioImage from "./assets/port_ill.svg";
import AppImage from "./assets/mob_ill.svg";

const Steps = props => {
  return (
    <div class="steps-n-shit">
      <React.Fragment>
        <div className="row odd-step">
          <div className="col img-col">
            <img className="step-illustration" src={CalImage} alt="" />
          </div>

          <div className="col text-col">
            <h3 className="step-text">
              (1) Reserve a time and space for you to honestly figure out what
              you want and how to get it.
            </h3>
          </div>
        </div>

        <div className="row even-step">
          <div className="col text-col">
            <h3 className="step-text">
              (2) Answer the questions given to you from the suite.
            </h3>
          </div>

          <div className="col img-col">
            <img className="step-illustration" src={QuestionImage} alt="" />
          </div>
        </div>

        <div className="row odd-step">
          <div className="col img-col">
            <img className="step-illustration" src={PortfolioImage} alt="" />
          </div>

          <div className="col text-col">
            <h3 className="step-text">
              (3) Receive an email with your gameplan so your agenda is set.{" "}
            </h3>
          </div>
        </div>

        <div className="row even-step">
          <div className="col text-col">
            <h3 className="step-text">
              (4) Sign up for early access to our app which helps you set goals
              and work daily towards achieving them.{" "}
            </h3>
          </div>

          <div className="col img-col">
            <img className="step-illustration" src={AppImage} alt="" />
          </div>
        </div>
        <div className="row pitch-body-container pitch-c">
          <h3 className="pitch-body">{props.pitchC}</h3>
        </div>
        <div className="row sign-up-box-container">
          <button className="sign-up-cta">{props.secondButtonCTA}</button>
        </div>
      </React.Fragment>
    </div>
  );
};

export default Steps;
