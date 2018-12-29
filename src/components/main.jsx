import React from "react";
import { Switch, Route } from "react-router-dom";
import ReviewLanding from "./reviewlanding.jsx";
import AppLanding from "./applanding.jsx";
import GameplanLanding from "./gameplanlanding.jsx";

const Main = () => {
  return (
    <div>
      <Route path="/" exact strict component={AppLanding} />
      <Route path="/review2018" exact strict component={ReviewLanding} />
      <Route path="/gameplan2019" exact strict component={GameplanLanding} />
    </div>
  );
};

export default Main;
