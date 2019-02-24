import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Main from "./Main";
import Post_view from "./Post_view";

import "./styles.css";

function App() {
  return (
    <div className="App">
      {/* <h1>Eyepax JavaScript Hackathon</h1> */}
      <Router>
        <Route exact path='/' component={Main} />
        <Route exact path='/rant/{rant_id}' component={Post_view} />
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Main/>, rootElement);
