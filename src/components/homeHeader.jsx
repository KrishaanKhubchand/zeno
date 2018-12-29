import React, { Component } from "react";
import { Link } from "react-router-dom";

const Header = props => {
  return (
    <React.Fragment>
      <div className="row header-row">
        <div className="col logoTextArea">
          <h2 className="logo-text"> Zeno </h2>
        </div>

        <div className="col menuText">
          <ul className="justify-content-end nav">
            <li className="nav-item nav-link nav-item-access">
              <Link to="/" className = "link-item">iOS App</Link>
            </li>
            <li className="nav-item nav-link nav-item-access">
              <Link to="/review2018" className = "link-item">2018 Review</Link>
            </li>
            <li className="nav-item nav-link nav-item-access">
              <Link to="/gameplan2019" className = "link-item">2019 Gameplan</Link>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
/*       <Route path="/" exact Component={AppLanding} />
      <Route path="/review2018" exact Component={ReviewLanding} />
     
     import { BrowserRouter as Router, Link } from "react-router-dom";
import Route from "react-router-dom/Route";
import ReviewLanding from "./reviewlanding.jsx";
import AppLanding from "./applanding.jsx";
 */
