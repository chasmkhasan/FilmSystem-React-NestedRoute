import { useState } from "react";

import "./Page.css";

const PersonChoisePost = () => {
  console.log(27777777777777777777);
  const [data, setData] = useState({
    name: "",
    genreID: "",
  });

  const stringData = `?Name=${data.name}&GenreID=${data.genreID}`;
  const url = `https://localhost:7159/api/Person/PersonChoise${stringData}`;

  function submit(e) {
    e.preventDefault();

    fetch(url, {
      method: "POST",
    }).then((res) => {
      console.log(res);
    });
  }

  function dataHandle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }
  return (
    <div>
      <form onSubmit={(e) => submit(e)}>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            onChange={(e) => dataHandle(e)}
            id="name"
            value={data.userId}
            required
          />
        </label>

        <label htmlFor="genreId">
          GenreId:{" "}
          <input
            type="number"
            onChange={(e) => dataHandle(e)}
            id="genreID"
            value={data.genreID}
            required
          />
        </label>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default PersonChoisePost;
