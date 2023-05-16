import { useState } from "react";

const MovieRating = () => {
  const [data, setData] = useState({
    userId: "",
    movieId: "",
    rating: "",
  });
  const stringData = `${data.rating}?personId=${data.userId}&movieId=${data.movieId}`;
  const url = `https://localhost:7159/api/Movie/rating/${stringData}`;

  function submit(e) {
    e.preventDefault();

    fetch(url, {
      method: "POST",
      Headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },

      Cache: "default",
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
        <label htmlFor="UserId">
          User Id:{" "}
          <input
            type="number"
            onChange={(e) => dataHandle(e)}
            id="userId"
            value={data.userId}
          />
        </label>

        <label htmlFor="MovieId">
          Movie Id:{" "}
          <input
            type="number"
            onChange={(e) => dataHandle(e)}
            id="movieId"
            value={data.movieId}
          />
        </label>

        <label htmlFor="Rating">
          Rating:
          <input
            type="number"
            onChange={(e) => dataHandle(e)}
            id="rating"
            value={data.rating}
          />
        </label>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default MovieRating;
