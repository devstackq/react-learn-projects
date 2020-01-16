import React, { Component, Fragment } from "react";
import { Route, Link } from "react-router-dom";

import "./App.css";
import Home from "./Home";
import About from "./About";
import Users from "./Users";
import Posts from "./Posts";

//import others link's, and use, tag Link, set = src path

class App extends Component {
  render() {
    return (
      // show in page
      <Fragment>
        <div className="nav_links">
          <nav>
            <Link  to="/">
              Home
            </Link>
            <Link  to="/about">
              About
            </Link>
            <Link  to="/users">
              Users
            </Link>
            <Link  to="/posts">
              Posts
            </Link>
          </nav>
        </div>
{/* path's each, component's  exact path="/" component={Home} */}
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/posts" component={Posts} />
      </Fragment>
    );
  }
}

export default App;
