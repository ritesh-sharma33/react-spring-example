import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./style.css";
import {HomePage} from "./HomePage";
import { BasicDemoPage } from "./demos/BasicDemo";
import { UseChainDemoPage } from "./demos/UseChainDemo";
import { UseSpringDemoPage } from "./demos/UseSpringDemo";
import { UseSpringsDemoPage } from "./demos/UseSpringsDemo";
import { UseTrailDemoPage } from "./demos/UseTrailDemo";
import { UseTransitionDemoPage } from "./demos/UseTransitionDemo";

export default function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Hello and welcome to spring demos</h1>
      <Router>
        <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/basicDemo">
          <BasicDemoPage />
        </Route>
        <Route path="/useSpringDemo">
          <UseSpringDemoPage />
        </Route>
        <Route path="/useSpringsDemo">
          <UseSpringsDemoPage />
        </Route>
        <Route path="/useTrailDemo">
          <UseTrailDemoPage />
        </Route>
        <Route path="/useTransitionDemo">
          <UseTransitionDemoPage />
        </Route>
        <Route path="/useChainDemo">
          <UseChainDemoPage />
        </Route>
      </Switch>
      </Router>
      
    </div>
  );
}
