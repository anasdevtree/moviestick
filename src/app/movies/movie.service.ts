import { Subject } from "rxjs";
import { Movie } from "./movie.model";

export class MovieService {
  moviesChanged = new Subject<Movie[]>();
  private movies: Movie[] = [
    new Movie(
      "Spiderman",
      "Spider-Man is a fictional superhero created by writer-editor Stan Lee and writer-artist Steve Ditko.",
      "https://pmcvariety.files.wordpress.com/2017/03/spider-man-homecoming.png"
    ),
    new Movie(
      "The Favourite",
      "The Favourite is a 2018 period comedy-drama film directed by Yorgos Lanthimos and written by Deborah Davis and Tony McNamara.",
      "https://saltlakefilmsociety.org/images/posters/the-favourite-poster-xl.jpg"
    ),
    new Movie(
      "Spiderman",
      "Spider-Man is a fictional superhero created by writer-editor Stan Lee and writer-artist Steve Ditko.",
      "https://pmcvariety.files.wordpress.com/2017/03/spider-man-homecoming.png"
    ),
    new Movie(
      "The Favourite",
      "The Favourite is a 2018 period comedy-drama film directed by Yorgos Lanthimos and written by Deborah Davis and Tony McNamara.",
      "https://saltlakefilmsociety.org/images/posters/the-favourite-poster-xl.jpg"
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
  setMovies(movies: Movie[]) {
    this.movies = movies;
    this.moviesChanged.next(this.movies.slice());
  }
}
