import { useState } from "react";
import "./admin.css";

const imagesArr = [];

export default function Admin() {
  const [movieDetails, setMovieDetails] = useState({
    name: "",
    date: "",
    release_date: null,
    duration: "",
    genres: [],
    poster: "",
    image: "",
    banners: [],
  });

  const handleChange = (n, genreName) => (e) => {
    if (n === "name") {
      setMovieDetails({
        ...movieDetails,
        name: e.target.value,
      });
    } else if (n === "date") {
      console.log(e.target.value);
      setMovieDetails({
        ...movieDetails,
        release_date: e.target.value,
      });
    } else if (n === "duration") {
      setMovieDetails({
        ...movieDetails,
        duration: e.target.value,
      });
    } else if (n === "genre") {
      if (movieDetails.genres.includes(genreName)) {
        let genreArr = movieDetails.genres.filter(
          (genre) => genre !== genreName
        );
        setMovieDetails({
          ...movieDetails,
          genres: genreArr,
        });
      } else {
        setMovieDetails({
          ...movieDetails,
          genres: [...movieDetails.genres, genreName],
        });
      }
    } else if (n === "poster") {
      setMovieDetails({
        ...movieDetails,
        poster: e.target.value,
      });
    } else if (n === "image") {
      setMovieDetails({
        ...movieDetails,
        image: e.target.value,
      });
    }
  };
  console.log(movieDetails);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const addImagesToArr = () => {
    if (movieDetails.image === "") return;
    imagesArr.push(movieDetails.image);
    setMovieDetails({
      ...movieDetails,
      image: "",
    });
  };

  console.log("Arr", imagesArr);

  return (
    <form onSubmit={handleSubmit} style={{ margin: "40px" }}>
      <label>
        Movie Name:
        <input
          id="movie-name"
          type="text"
          placeholder="Movie Name"
          value={movieDetails.name}
          onChange={handleChange("name")}
        />
      </label>
      <br />
      <label>
        Release Date:
        <input id="release-date" type="date" onChange={handleChange("date")} />
      </label>
      <br />
      <label>
        Duration:
        <input
          id="duration"
          type="text"
          value={movieDetails.duration}
          onChange={handleChange("duration")}
        />
      </label>
      <br />
      <h5 style={{ margin: "0" }}>Genres</h5>
      <button
        className={`${
          movieDetails.genres.includes("Action")
            ? "pri-genre-btn genre-btn"
            : "sec-genre-btn genre-btn"
        }`}
        onClick={handleChange("genre", "Action")}
      >
        Action
      </button>
      <button
        className={`${
          movieDetails.genres.includes("Adventure")
            ? "pri-genre-btn genre-btn"
            : "sec-genre-btn genre-btn"
        }`}
        onClick={handleChange("genre", "Adventure")}
      >
        Adventure
      </button>
      <button
        className={`${
          movieDetails.genres.includes("Comedy")
            ? "pri-genre-btn genre-btn"
            : "sec-genre-btn genre-btn"
        }`}
        onClick={handleChange("genre", "Comedy")}
      >
        Comedy
      </button>
      <button
        className={`${
          movieDetails.genres.includes("Horror")
            ? "pri-genre-btn genre-btn"
            : "sec-genre-btn genre-btn"
        }`}
        onClick={handleChange("genre", "Horror")}
      >
        Horror
      </button>
      <button
        className={`${
          movieDetails.genres.includes("Drama")
            ? "pri-genre-btn genre-btn"
            : "sec-genre-btn genre-btn"
        }`}
        onClick={handleChange("genre", "Drama")}
      >
        Drama
      </button>
      <button
        className={`${
          movieDetails.genres.includes("Historical")
            ? "pri-genre-btn genre-btn"
            : "sec-genre-btn genre-btn"
        }`}
        onClick={handleChange("genre", "Historical")}
      >
        Historical
      </button>
      <button
        className={`${
          movieDetails.genres.includes("Science Fiction")
            ? "pri-genre-btn genre-btn"
            : "sec-genre-btn genre-btn"
        }`}
        onClick={handleChange("genre", "Science Fiction")}
      >
        Science Fiction
      </button>
      <button
        className={`${
          movieDetails.genres.includes("Crime")
            ? "pri-genre-btn genre-btn"
            : "sec-genre-btn genre-btn"
        }`}
        onClick={handleChange("genre", "Crime")}
      >
        Crime
      </button>
      <button
        className={`${
          movieDetails.genres.includes("Fantasy")
            ? "pri-genre-btn genre-btn"
            : "sec-genre-btn genre-btn"
        }`}
        onClick={handleChange("genre", "Fantasy")}
      >
        Fantasy
      </button>
      <button
        className={`${
          movieDetails.genres.includes("Romance")
            ? "pri-genre-btn genre-btn"
            : "sec-genre-btn genre-btn"
        }`}
        onClick={handleChange("genre", "Romance")}
      >
        Romance
      </button>
      <button
        className={`${
          movieDetails.genres.includes("Thriller")
            ? "pri-genre-btn genre-btn"
            : "sec-genre-btn genre-btn"
        }`}
        onClick={handleChange("genre", "Thriller")}
      >
        Thriller
      </button>
      <br />
      <label>
        Poster URL:
        <input
          id="poster"
          type="text"
          value={movieDetails.poster}
          onChange={handleChange("poster")}
        />
      </label>
      <br />
      <label>
        Images URL:
        <input
          id="image"
          type="text"
          value={movieDetails.image}
          onChange={handleChange("image")}
        />
        <button onClick={addImagesToArr}>Add</button>
      </label>
      {imagesArr.length > 0
        ? imagesArr.map((image, i) => <p key={i}>{`Image - ${i}`}</p>)
        : ""}
      <br />
      <button type="submit">SUBMIT</button>
    </form>
  );
}
