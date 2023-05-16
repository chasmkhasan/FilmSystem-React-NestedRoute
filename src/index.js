import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link, NavLink, Switch, Route } from "react-router-dom";

import Person from "./Pages/Person";
import Genre from "./Pages/Genre";
import PersonChoise from "./Pages/PersonChoise";
import Movie from "./Pages/Movie";
import Layout from "./Component/Layout";
import GetPersonChoise from "./Pages/GetPersonChoise";
import NewGenrePost from "./Pages/NewGenrePost";
import MovieLinkPost from "./Pages/MovieLinkPost";
import MovieRating from "./Pages/MovieRatingPost";

import "./index.css";
import InvalidPath from "./Pages/Notfound";

function App() {
  return (
    <div>
      <h2>Welcome to App Component ...</h2>
      <ul>
        <li>
          <Link to="/">Person List</Link>
        </li>
        <li>
          <NavLink to="./Genres" activeClassName="classColor">
            Genre List
          </NavLink>
        </li>
        <li>
          <NavLink to="./PersonChoises" activeClassName="classColor">
            Person Choise List
          </NavLink>
        </li>
        <li>
          <NavLink to="./Movies" activeClassName="classColor">
            Movie List
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={Person}></Route>
        <Route path="/Genres" component={Genre}></Route>
        <Route path="/PersonChoises" component={PersonChoise}></Route>
        <Route path="/Movies" component={Movie}></Route>
        <Route path="/GetPersonChoise" component={GetPersonChoise}></Route>
        <Route path="/src/Pages/NewGenrePost" component={NewGenrePost}></Route>
        <Route
          path="/src/Pages/MovieLinkPost"
          component={MovieLinkPost}
        ></Route>
        <Route
          path="/src/Pages/MovieRatingPost"
          component={MovieRating}
        ></Route>
        <Route component={InvalidPath}></Route>
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
