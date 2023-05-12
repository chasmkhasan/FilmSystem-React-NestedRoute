import React from "react";
import { useState, useEffect } from "react";

import "./Page.css";

function Genre() {
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    fetch("https://localhost:7159/api/AllGenres")
      .then((res) => res.json())
      .then((result) => {
        setGenres(result);
      });
  });

  return (
    <div>
      <h2>Genres Data...</h2>
      <table>
        <tbody>
          {genres.map((g) => (
            <tr className="column" key={g.id}>
              <div className="card">
                <td className="title">
                  <b>Movie Type:- </b>
                  {g.title}
                  <b>Movie Description:- </b>
                  {g.description}
                </td>
              </div>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Genre;
