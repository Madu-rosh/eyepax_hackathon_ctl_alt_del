import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Main from "./Main";

import "./styles.css";

function App() {
  return (
    <div className="App">
      {/* <h1>Eyepax JavaScript Hackathon</h1> */}
      <Router>
        <Route exact path='/' component={Main} />
        <Route path='/rant/{rant_id}' component={Comment} />
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Main/>, rootElement);
