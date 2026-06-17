import movies from "../data/movies";
import MovieCard from "./Moviecard";

function MovieRow() {
  return (
    <div className="movie-row">

      <h2>Trending Now</h2>

      <div className="movies">
        {movies.map(movie => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}
      </div>

    </div>
  );
}

export default MovieRow;