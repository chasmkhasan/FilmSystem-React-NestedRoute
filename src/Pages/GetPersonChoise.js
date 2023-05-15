import React from "react";
import { useState, useEffect, useParams } from "react";

import "./Page.css";

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
                </td>
                <td className="title">
                  <b>Movie Rating </b>
                  {emp.rating}
                </td>
                <td className="title">
                  <b>Person ID </b>
                  {emp.personID}
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
