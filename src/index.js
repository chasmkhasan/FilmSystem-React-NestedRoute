import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

import Person from "./Pages/Person";
import Genre from "./Pages/Genre";
import PersonChoise from "./Pages/PersonChoise";
import Movie from "./Pages/Movie";
import Layout from "./Component/Layout";

function App() {
  return (
    <div>
      <h2>Welcome to App Component ...</h2>
      <ul>
        <li>
          <Link to="/">Person List</Link>
        </li>
        <li>
          <Link to="./Genres">Genre List</Link>
        </li>
        <li>
          <Link to="./PersonChoises">Person Choise List</Link>
        </li>
        <li>
          <Link to="./Movies">Movie List</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={Person}></Route>
        <Route path="/Genres" component={Genre}></Route>
        <Route path="/PersonChoises" component={PersonChoise}></Route>
        <Route path="/Movies" component={Movie}></Route>
      </Switch>
    </div>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <Layout>
      <App></App>
    </Layout>
  </BrowserRouter>,
  document.getElementById("createroot")
);

// Link: Its navigation to another page.
// Route: used routing data with Link.
// Switch: It staying exact place and wait for signal from UI.
