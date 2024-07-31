import React from "react";
import "./Movie.css";

const MovieApp = () => {
  const movies = [
    {
      id: 1,
      title: "The Shawshank Redemption",
      poster: "https://via.placeholder.com/200x300",
      overview:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    },
    {
      id: 2,
      title: "The Godfather",
      poster: "https://via.placeholder.com/200x300",
      overview:
        "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    },
    {
      id: 3,
      title: "The Dark Knight",
      poster: "https://via.placeholder.com/200x300",
      overview:
        "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    },
    {
      id: 4,
      title: "Inception",
      poster: "https://via.placeholder.com/200x300",
      overview:
        "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea in the mind of a CEO.",
    },
  ];

  return (
    <div>
      <header>
        <h1>Movie App</h1>
      </header>

      <div className="container">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img src={movie.poster} alt={movie.title} />
            <div className="movie-info">
              <h3>{movie.title}</h3>
              <p>{movie.overview}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieApp;
