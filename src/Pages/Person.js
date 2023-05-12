import React from "react";
import { useState, useEffect } from "react";

import "./Page.css";

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
              </div>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Person;
