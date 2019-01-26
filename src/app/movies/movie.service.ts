import { Subject } from "rxjs";
import { Movie } from "./movie.model";

export class MovieService {
  moviesChanged = new Subject<Movie[]>();
  private movies: Movie[] = [
    new Movie(
      "First Movie",
      "This movie will show the art of tech",
      "https://pmcvariety.files.wordpress.com/2017/03/spider-man-homecoming.png"
    ),
    new Movie(
      "First Movie 2",
      "This movie will show the art of tech",
      "https://pmcvariety.files.wordpress.com/2017/03/spider-man-homecoming.png"
    )
  ];

  getMovies() {
    return this.movies.slice();
  }
  getMovie(index: number) {
    return this.movies[index];
  }
  addMovie(movie: Movie) {
    this.movies.push(movie);
    this.moviesChanged.next(this.movies.slice());
  }
  updateMovie(index: number, newMovie: Movie) {
    this.movies[index] = newMovie;
    this.moviesChanged.next(this.movies.slice());
  }
  deleteMovie(index: number) {
    this.movies.splice(index, 1);
    this.moviesChanged.next(this.movies.slice());
  }
}
