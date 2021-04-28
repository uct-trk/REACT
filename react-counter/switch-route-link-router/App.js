import "./styles.css";
import React from "react";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import Home from "./Home";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <div className="wrap">
            <h1>UCT</h1>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/about">About</Link>
              </li>

              <li>
                <Link to="/project">Project</Link>
              </li>

              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/project">
            <Project />
          </Route>

          {/* bu şekilde de kullanabiliriz */}
          <Route path="/contact" component={Contact}></Route>
        </Switch>
      </div>
    </Router>
  );
};
export default App;
