import React from "react";
import { useState, useEffect } from "react";

import "./Page.css";

function Movie() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("https://localhost:7159/api/AllMovies")
      .then((res) => res.json())
      .then((result) => {
        setMovies(result);
      });
  });

  return (
    <div>
      <h2>Movie List...</h2>
      <table>
        <tbody>
          {movies.map((m) => (
            <tr className="column" key={m.id}>
              <div className="card">
                <td className="title">
                  <b>Movie Name:- </b>
                  {m.name}
                </td>
                <td className="title">
                  <b>Movie Link:- </b>
                  {m.link}
                </td>
                <td className="title">
                  <b>Movie Rating:- </b>
                  {m.rating}
                </td>
                <td className="title">
                  <b>Person Name/ID:- </b>
                  {m.personID}
                </td>
                <td className="title">
                  <b>Movie Type:- </b>
                  {m.GenreID}
                </td>
              </div>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Movie;
