import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <Switch>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
