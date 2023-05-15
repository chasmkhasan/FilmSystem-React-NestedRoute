import React from "react";
import { useState, useEffect } from "react";
import GetPersonChoise from "./GetPersonChoise";

import "./Page.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Person() {
  const [persons, setPersons] = useState([]);
  useEffect(() => {
    fetch("https://localhost:7159/api/AllPerson")
      .then((res) => res.json())
      .then((result) => {
        setPersons(result);
      });
  });

  return (
    <div>
      <h2>Persons Data...</h2>
      <table>
        <tbody>
          {persons.map((emp) => (
            <tr className="column" key={emp.Id}>
              <div className="card">
                <td className="title">
                  <b>Person Name:- </b>
                  {emp.name}
                </td>
                <td className="title">
                  <b>Person Email:- </b>
                  {emp.email}
                </td>
                <td>
                  <Link to={{ pathname: "./GetPersonChoise", state: emp.id }}>
                    Further go foreward
                  </Link>
                </td>
              </div>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Person;
