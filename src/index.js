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
          <Link to="./Persons">Person List</Link>
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
      <Route path="/Persons" component={Person}></Route>
      <Route path="/Genres" component={Genre}></Route>
      <Route path="/PersonChoises" component={PersonChoise}></Route>
      <Route path="/Movies" component={Movie}></Route>
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
