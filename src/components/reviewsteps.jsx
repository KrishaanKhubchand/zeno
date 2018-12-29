import React, { Component } from "react";
import TimeImage from "./assets/time_ill.svg";
import BlogImage from "./assets/blog_ill.svg";
import NewsImage from "./assets/news_ill.svg";
import OrgImage from "./assets/org_ill.svg";

const Steps = props => {
  return (
    <div class="steps-n-shit">
      <React.Fragment>
        <div className="row odd-step">
          <div className="col img-col">
            <img className="step-illustration" src={TimeImage} alt="" />
          </div>

          <div className="col text-col">
            <h3 className="step-text">
              (1) Reserve a time and space for you to honestly reflect on the
              year.
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
            <img className="step-illustration" src={BlogImage} alt="" />
          </div>
        </div>

        <div className="row odd-step">
          <div className="col img-col">
            <img className="step-illustration" src={NewsImage} alt="" />
          </div>

          <div className="col text-col">
            <h3 className="step-text">
              (3) Receive an email with your review so you can learn more later.
            </h3>
          </div>
        </div>

        <div className="row even-step">
          <div className="col text-col">
            <h3 className="step-text">
              (4) Sign up for the planning module to make the most of 2019!
            </h3>
          </div>

          <div className="col img-col">
            <img className="step-illustration" src={OrgImage} alt="" />
          </div>
        </div>
        <div className="row pitch-body-container pitch-c">
          <h3 className="pitch-body">Bring closure to the year now.</h3>
        </div>
        <div className="row sign-up-box-container">
          <button className="sign-up-cta">review your year</button>
        </div>
      </React.Fragment>
    </div>
  );
};

export default Steps;
