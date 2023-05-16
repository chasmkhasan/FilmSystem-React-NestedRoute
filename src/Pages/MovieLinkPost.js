import { useState } from "react";

const MovieLinkPost = () => {
  const [data, setData] = useState({
    movieName: "",
    link: "",
    personId: "",
    genreId: "",
  });

  const stringData = `?movieName=${data.movieName}&link=${data.link}&personId=${data.personId}&genreId=${data.genreId}`;
  const url = `https://localhost:7159/api/MovieLink/${stringData}`;

  function submit(e) {
    e.preventDefault();

    fetch(url, {
      method: "POST",
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
        <label htmlFor="movieName">
          Movie Name:
          <input
            type="text"
            onChange={(e) => dataHandle(e)}
            id="movieName"
            value={data.movieName}
            required
          />
        </label>

        <label htmlFor="link">
          Link:
          <input
            type="text"
            onChange={(e) => dataHandle(e)}
            id="link"
            value={data.link}
            required
          />
        </label>
        <label htmlFor="personId">
          Person Id:
          <input
            type="number"
            onChange={(e) => dataHandle(e)}
            id="personId"
            value={data.personId}
            required
          />
        </label>
        <label htmlFor="genreId">
          Genre Id:
          <input
            type="number"
            onChange={(e) => dataHandle(e)}
            id="genreId"
            value={data.genreId}
            required
          />
        </label>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default MovieLinkPost;
