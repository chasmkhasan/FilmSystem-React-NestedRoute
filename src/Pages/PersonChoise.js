import React from "react";
import { useState, useEffect } from "react";

import "./Page.css";

function PersonChoise() {
  const [personchoises, setPersonChoises] = useState([]);
  useEffect(() => {
    fetch("https://localhost:7159/api/AllPersonChoise")
      .then((res) => res.json())
      .then((result) => {
        setPersonChoises(result);
      });
  });

  return (
    <div>
      <h2>Person Choise's Data...</h2>
      <table>
        <tbody>
          {personchoises.map((emp) => (
            <tr className="column" key={emp.Id}>
              <div className="card">
                <td className="title">
                  <b>Person Name/ID:- </b>
                  {emp.personID}
                </td>
                <td className="title">
                  <b>Genre Name/ID:- </b>
                  {emp.genreID}
                </td>
              </div>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PersonChoise;
