import React from "react";
import { useState, useEffect, useParams } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import "./Page.css";
import NewGenrePost from "./NewGenrePost";
import MovieLinkPost from "./MovieLinkPost";
import MovieRating from "./MovieRatingPost";

const GetPersonChoise = (props) => {
  console.log(27777777777777777777);
  console.log(props.location.state);

  const [getpersonchoise, setGetPersonChoise] = useState([]);
  const url = `https://localhost:7159/api/Person/${props.location.state}/Movie`;
  console.log(url);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setGetPersonChoise(result);
      });
  }, []);

  return (
    <div>
      <h2>Person Choise Details ......</h2>
      <table>
        <tbody>
          {getpersonchoise.map((emp) => (
            <tr className="column" key={emp.Id}>
              <div className="card">
                <td className="title">
                  <b>Movie Name:- </b>
                  {emp.name}
                </td>
                <td className="title">
                  <b>Movie Link:- </b>
                  {emp.link}
                  <Link
                    to={{ pathname: "./MovieLinkPost", state: emp.personID }}
                  >
                    Add New Film and Link
                  </Link>
                </td>
                <td className="title">
                  <b>Movie Rating </b>
                  {emp.rating}
                  <Link
                    to={{ pathname: "./MovieRatingPost", state: emp.personID }}
                  >
                    Add New Rating
                  </Link>
                </td>
                <td className="title">
                  <b>Person ID </b>
                  {emp.personID}
                  <Link
                    to={{ pathname: "./NewGenrePost", state: emp.personID }}
                  >
                    Add New Genre
                  </Link>
                </td>
                <td className="title">
                  <b>Genre ID </b>
                  {emp.genreID}
                </td>
              </div>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GetPersonChoise;
